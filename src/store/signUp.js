import router from "../router/index";

export const signUp = {
  namespaced: true,
  state: {
    form: {
      id:'',
      firstname: "",
      lastname: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      level: "user",
      cart:[],
      loggedIn:false
    },
  },
  getters: {},
  mutations: {
    updateForm(state, payload) {
      state.form.firstname = payload.firstname;
      state.form.lastname = payload.lastname;
      state.form.phoneNumber = payload.phoneNumber;
      state.form.email = payload.email;
      state.form.password = payload.password;
      state.form.confirmPassword = payload.confirmPassword;
    },
  },
  actions: {
    fetchNoOfUsers(context) {
      fetch("https://food-palace-4e993-default-rtdb.firebaseio.com/noUser.json")
        .then((res) => res.json())
        .then((id) =>
          id == null
            ? context.dispatch("createNoUser")
            : context.dispatch("userData", id)
        );
    },

    createNoUser(context) {
      fetch(
        "https://food-palace-4e993-default-rtdb.firebaseio.com/noUser.json",
        {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            noUser: 0,
          }),
        }
      )
        .then((res) => res.json())
        .then((newID) => {
          
          context.dispatch("userData", newID);
        });
    },

    userData(context, newID) {
      fetch(
        `https://food-palace-4e993-default-rtdb.firebaseio.com/users/${newID.noUser}.json`,
        {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id:newID.noUser,
            firstname: context.state.form.firstname,
            lastname: context.state.form.lastname,
            phoneNumber: context.state.form.phoneNumber,
            email: context.state.form.email,
            password: context.state.form.password,
            confirmPassword: context.state.form.confirmPassword,
            level: context.state.form.level,
            cart: context.state.form.cart,
            loggedIn: context.state.form.loggedIn,
          }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          context.dispatch("updateNoOfUsers", newID.noUser);
        });
      router.push("/logIn");
    },

    updateNoOfUsers(context, newID) {
      fetch(
        "https://food-palace-4e993-default-rtdb.firebaseio.com/noUser.json",
        {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            noUser: (newID += 1),
          }),
        }
      )
        .then((res) => res.json())
        .then((json) => console.log(json));
    },
  },
};
