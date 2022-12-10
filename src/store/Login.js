const Login = {
  namespaced: true,
  state: () => ({
    accessToken:'token'
    }),
  mutations: {
     setAccessToken(state, token) {
       state.accessToken = token
     }
   },
  actions: { 
    setAccessTokenAction(context, token) {
     context.commit('setAccessToken', token)
    }
  },
  getters: { 
      getAccessToken(state) {
         return state.accessToken
      }
   }
}

export default Login