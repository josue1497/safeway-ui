export const state = () => ({
    membership: {},
    quotation: {},
    annexes: [],
    total: 0,
})

export const mutations = {
    calculateTotalQuotation: (state, {membership, annexes}) => {
        state.membership = membership
        state.annexes = annexes
    },

}

export const actions = {
    calculateTotalQuotation({ commit }, value = {}) {
        commit('calculateTotalQuotation', value)
    }
}
