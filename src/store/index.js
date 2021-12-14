import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import decode from 'jwt-decode'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
     token:'',
     userDB:'',
     url_img:"",
     rol:'',
  },
  mutations:{
    getUser(state,payload){
      state.token = payload;
      
      if (payload === ''){
          state.userDB = '';
      }else{
          state.userDB = decode(payload);
          state.rol= state.userDB.data.role

          let config = {
            headers: {
              token: payload,
            },
          };

          axios.get(`/dates/${state.userDB.data.email}`,config)
            .then((res)=>{
              state.userDB.data = res.data

              if (state.userDB.data.url_img === undefined){
                state.url_img = `${axios.defaults.baseURL}/uploads/logo.png`
              }else if (state.userDB.data.url_img === ''){
                console.log("entre")
                state.url_img = `${axios.defaults.baseURL}/uploads/logo.png`
              }else{
                state.url_img= state.userDB.data.url_img
              }
              console.log(state.url_img)
            })
      }
  }
  },
  actions:{
    //para crear usuario e inicio de sesion
    saveUser({commit},payload){
      localStorage.setItem('token',payload);
      commit('getUser',payload);

      //console.log(this.state.rol)

      if(this.state.rol === 'user'){
        router.push("/reports");
      }else if (this.state.rol === 'administrator'){
        router.push("/administrator");
      }else if (this.state.rol === 'store'){
        router.push("/store-manage");
      }
  },
  //para detectar si hay una sesión iniciada
  readToken({commit}){
    const token = localStorage.getItem('token');
    if(token){
        commit('getUser',token);
    }else{
        commit('getUser','');
    }
  },
    //método para cerrar sesión
    signOff({commit}){
      commit('getUser',''); 
      localStorage.removeItem('token');
      router.push('/login');
    },
  },
  getters:{
    isActive: state => !!state.token
  },

})
