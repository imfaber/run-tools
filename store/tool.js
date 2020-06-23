export const state = () => ({
    list: []
});

export const mutations = {
    setList(state, list) {
        state.list = list;
    }
};

export default {
    state,
    mutations
};
