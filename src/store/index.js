export const state = () => ({
    plan: {},
    membership: {},
    quotation: {},
    annexes: [],
    annexesSelected: [],
    total: 0,
    user_logged: false,
    currentUser: {},
    token: ''
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
    },
    setCurrentUser: (state, currentUser) => {
        state.currentUser = {...currentUser}
    },
    setUserLogged: (state, userLogged) => {
        state.user_logged = userLogged
    },
    setToken: (state, token) => {
        state.token = token
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
    },
    login({commit}, { user, user_logged, token }){
        commit('setCurrentUser', user)
        commit('setUserLogged', user_logged)
        commit('setToken', token)
    }
}
