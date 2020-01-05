import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import authAxios from "./axios-auth";
import router from "./router";

const instance = axios.create({
    baseURL: 'https://vue-auth-9a840.firebaseio.com'
});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null,
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token;
            state.userId = userData.userId;
        },

        storeUser(state, user) {
            state.user = user;
        },

        clearAuthData(state) {
            state.idToken = null;
            state.userId = null;
        }
    },
    actions: {
        setLogoutTime({dispatch}, expirationTime) {
            setTimeout(() => {
                dispatch('logout');
            }, expirationTime * 1000);
        },

        signup({commit, dispatch}, formData) {
            authAxios.post(':signUp?key=AIzaSyCmaYhgrgvUaMd5F6UW-XQTU_3muEWVe1I', {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true,
            })
                .then(response => {
                    console.log(response);
                    commit('authUser', {
                        token: response.data.idToken,
                        userId: response.data.localId,
                    });

                    const now = new Date();
                    const expiration = new Date(now.getTime() + response.data.expiresIn * 1000);
                    sessionStorage.setItem('token', response.data.idToken);
                    sessionStorage.setItem('userId', response.data.localId);
                    sessionStorage.setItem('expirationDate', JSON.stringify(expiration));

                    dispatch('storeUser', formData);
                    dispatch('setLogoutTime', response.data.expiresIn);
                })
                .catch(error => console.log(error));
        },

        login({commit, dispatch}, formData) {
            authAxios.post(':signInWithPassword?key=AIzaSyCmaYhgrgvUaMd5F6UW-XQTU_3muEWVe1I', {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true,
            })
                .then(response => {
                    console.log(response);

                    commit('authUser', {
                        token: response.data.idToken,
                        userId: response.data.localId,
                    });

                    const now = new Date();
                    const expiration = new Date(now.getTime() + response.data.expiresIn * 1000);
                    sessionStorage.setItem('token', response.data.idToken);
                    sessionStorage.setItem('userId', response.data.localId);
                    sessionStorage.setItem('expirationDate', JSON.stringify(expiration));

                    dispatch('setLogoutTime', response.data.expiresIn);
                })
                .catch(error => console.log(error));
        },

        tryAutoLogin({commit, dispatch}) {
            const token = sessionStorage.getItem('token');
            if (!token) {
                return;
            }

            const expirationDate = JSON.parse(sessionStorage.getItem('expirationDate'));
            const now = new Date();
            if (now <= expirationDate) {
                return;
            }

            const userId = sessionStorage.getItem('userId');
            commit('authUser', {
                token,
                userId,
            });

            dispatch('fetchUser');
        },

        logout({commit}) {
            commit('clearAuthData');
            sessionStorage.clear();
            router.replace('/signin');
        },

        storeUser({commit, state}, userData) {
            if (!state.idToken) {
                return;
            }
            instance.post('/users.json?auth=' + state.idToken, userData)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        },

        fetchUser({commit, state}) {
            if (!state.idToken) {
                return;
            }
            instance.get('/users.json?auth=' + state.idToken)
                .then((response) => {
                    const users = [];
                    for (let key in response.data) {
                        const user = response.data[key];
                        user.id = key;
                        users.push(user);
                    }
                    console.log(users);
                    commit('storeUser', users[0]);
                })
                .catch(error => console.log(error));
        }
    },
    getters: {
        user(state) {
            return state.user;
        },

        isAuthenticated(state) {
            return state.idToken !== null;
        }
    }
})
