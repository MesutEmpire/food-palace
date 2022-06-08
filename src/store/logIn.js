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
      firstname: "",
      lastname: "",
      phoneNumber: "",
      email: "",
      password: "",
      level: "",
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
      state.currentUserDetails.firstname = payload.firstname;
      state.currentUserDetails.lastname = payload.lastname;
      state.currentUserDetails.phoneNumber = payload.phoneNumber;
      state.currentUserDetails.email = payload.email;
      state.currentUserDetails.password = payload.password;
      state.currentUserDetails.level = payload.level;
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
    getDataDB(context) {
      fetch(`https://food-palace-4e993-default-rtdb.firebaseio.com/users.json`)
        .then((res) => res.json())
        .then((jsons) => {
          for (const json in jsons) {
            const currentDetails = {
              firstname: jsons[json].firstname,
              lastname: jsons[json].lastname,
              phoneNumber: jsons[json].phoneNumber,
              email: jsons[json].email,
              password: jsons[json].password,
              level: jsons[json].level,
            };
            if (
              context.state.form.email === currentDetails.email &&
              context.state.form.password === currentDetails.password
            ) {
              context.commit("changeRouter", currentDetails);
              context.commit("changeStatus", true);
              context.commit("updateUserDetails", currentDetails);
              context.commit("storeCurrentUser");

              break;
            } else {
              context.commit("changeStatus", false);
            }
          }
        });
    },
  },
};
