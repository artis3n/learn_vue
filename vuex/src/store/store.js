import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
    },
    getters: {
        doubleCounter: state => state.counter * 2,
        stringCounter: state => state.counter + ' Clicks',
    },
    mutations: {
        increment: (state, payload) => state.counter += parseInt(payload) ? payload : 1,
        decrement: (state, payload) => state.counter -= parseInt(payload) ? payload : 1,
    },
    actions: {
        increment: context => context.commit('increment'),
        decrement: ({ commit }) => commit('decrement'),

        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', parseInt(payload.by) ? payload.by : 100);
            }, parseInt(payload.duration) ? payload.duration : 1000);
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', parseInt(payload.by) ? payload.by : 100);
            }, parseInt(payload.duration) ? payload.duration : 1000);
        }
    }
});
