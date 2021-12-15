import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState({
            currentUser: state => state.currentUser,
            user_logged: state => state.user_logged,
            token: state => state.token,
        }),
        config() {
            return { headers: { Authorization: `Bearer ${this.token}`}}
        },
        userName(){
            return `${this.currentUser.firstName} ${this.currentUser.lastName}`
        }
    }
}