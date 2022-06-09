import router from "../router/index";
import { useStorage } from "@vueuse/core";


export const logIn = {
  namespaced: true,
  state: {
    form: {
      email: "",
      password: "",
    },
    status: {
      userFound: false,
      userNotFound: false,
    },
    currentUserDetails: {
      id:"",
      firstname: "",
      lastname: "",
      phoneNumber: "",
      email: "",
      password: "",
      level: "",
      cart:[]
    },
  },
  getters: {
    getUserFoundStatus(state) {
      return state.status.userFound;
    },
    getUserNotFoundStatus(state) {
      return state.status.userNotFound;
    },
    getCurrentUserDetails(state) {
      return state.currentUserDetails;
    },
    getFormEmail(state){
      return state.form.email
    },
    getFormPassword(state){
      return state.form.password
    }
  },
  mutations: {
    updateLogInfo(state, payload) {
      state.form.email = payload.email;
      state.form.password = payload.password;
    },
    changeStatus(state, payload) {
      if (payload === true) {
        state.status.userFound = true;

        state.status.userNotFound = false;
      } else if (payload === false) {
        state.status.userNotFound = true;
        state.status.userFound = false;
      } else {
        state.status.userNotFound = false;
        state.status.userFound = false;
      }
    },
    deniedAccess(state) {
      state.status.userNotFound = true;
    },
    updateUserDetails(state, payload) {
      state.currentUserDetails.id = payload.id;
      state.currentUserDetails.firstname = payload.firstname;
      state.currentUserDetails.lastname = payload.lastname;
      state.currentUserDetails.phoneNumber = payload.phoneNumber;
      state.currentUserDetails.email = payload.email;
      state.currentUserDetails.password = payload.password;
      state.currentUserDetails.level = payload.level;
      state.currentUserDetails.cart = payload.cart;
      state.currentUserDetails.loggedIn = true;
    },
    storeCurrentUser(state) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(state.currentUserDetails)
      );
    },
    changeRouter(state, payload) {
      if (payload.level === "user") {
        router.push("/");
      } else if (payload.level === "SuperUser") {
        router.push("/admin");
      }
    },
  },
  actions: {
    getDataDB({ dispatch, commit, getters, rootGetters }) {
      fetch(`https://food-palace-4e993-default-rtdb.firebaseio.com/users.json`)
        .then((res) => res.json())
        .then((jsons) => {
          for (const json in jsons) {
            const currentDetails = {
              id: jsons[json].id,
              firstname: jsons[json].firstname,
              lastname: jsons[json].lastname,
              phoneNumber: jsons[json].phoneNumber,
              email: jsons[json].email,
              password: jsons[json].password,
              level: jsons[json].level,
              cart: jsons[json].cart,
              loggedIn: jsons[json].loggedIn,
            };
            if (
              getters.getFormEmail === currentDetails.email &&
              getters.getFormPassword === currentDetails.password
            ) {
              commit("changeRouter", currentDetails);
              commit("changeStatus", true);
              commit("updateUserDetails", currentDetails);
              commit("storeCurrentUser");
              console.log(currentDetails.id)
              dispatch("loggedInUser",currentDetails.id)
              dispatch("getCart",currentDetails.id,{root:true})
              
              break;
            } else {
              commit("changeStatus", false);
            }
          }
        })
        
          
       
    },

    loggedInUser(context,id){
      fetch(
        `https://food-palace-4e993-default-rtdb.firebaseio.com/users/${id}.json`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loggedIn: true,
          }),
        }
      )
        .then((res) => res.json())
        .then((json) => console.log(json));
    },
    loggedOutUser(context,id){
      fetch(
        `https://food-palace-4e993-default-rtdb.firebaseio.com/users/${id}.json`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loggedIn: false,
          }),
        }
      )
        .then((res) => res.json())
        .then((json) => console.log(json));
    }

  },
};
