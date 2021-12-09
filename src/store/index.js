export const state = () => ({
    plan: {},
    membership: {},
    quotation: {},
    annexes: [],
    annexesSelected: [],
    total: 0,
})

export const mutations = {
    setAnnexesSelected: (state, annexes) => {
        state.annexesSelected = annexes
    },
    setAnnexes: (state, annexes) => {
        state.annexes = annexes
    },
    setMembership: (state, membership) => {
        state.membership = {...membership}
    },
    setPlan: (state, plan) => {
        state.plan = {...plan}
    }

}

export const actions = {
    setPlan({ commit }, value = {}) {
        commit('setPlan', value)
    },
    setMembership({ commit }, value = {}) {
        commit('setMembership', value)
    },
    setAnnexes({ commit }, value = []) {
        commit('setAnnexes', value)
    },
    setAnnexesSelected({ commit }, value = []) {
        commit('setAnnexesSelected', value)
    }
}
