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
  },
  getters: {
    getUserFoundStatus(state) {
      return state.status.userFound;
    },
    getUserNotFoundStatus(state) {
      return state.status.userNotFound;
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
      }
    },
    deniedAccess(state){
      state.status.userNotFound = true;
    }
  },
  actions: {
    getDataDB(context) {
      fetch(`https://food-palace-4e993-default-rtdb.firebaseio.com/users.json`)
        .then((res) => res.json())
        .then((jsons) => {
          for (const json in jsons) {
            const email = jsons[json].email;
            const password = jsons[json].password;
            if (
              context.state.form.email === email &&
              context.state.form.password === password
            ) {
              context.commit("changeStatus", true);
              break;
            } else {
              context.commit("changeStatus", false);
            }
          }
        });
    },
  },
};
