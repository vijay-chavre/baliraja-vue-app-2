
import * as userApi from './API/userApi'
const User = {
  namespaced: true,
  state: () => ({
      allUsers:[]
    }),
  mutations: {
     setAllUsers(state, users) {
       state.allUsers = users
     }
   },
  actions: { 
    async getAllUsersAction(context) {
     const res = await userApi.getAllUsers()
      context.commit('setAllUsers', res.data)
    }
  },
  getters: { 
      getAllUsers(state) {
         return state.allUsers
      }
   }
}

export default User