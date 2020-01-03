import * as types from "../types";

const state = {
    counter: 0,
};

const getters = {
    [types.DOUBLE_COUNTER]: state => state.counter * 2,
    [types.CLICK_COUNTER]: state => state.counter + ' Clicks',
};

const mutations = {
    increment: (state, payload) => state.counter += parseInt(payload) ? payload : 1,
    decrement: (state, payload) => state.counter -= parseInt(payload) ? payload : 1,
};

const actions = {
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
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
