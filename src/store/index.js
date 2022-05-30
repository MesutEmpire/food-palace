import { createStore } from "vuex";
import {signUp} from './signUp'

export default createStore({
  state: {
    
  },
  getters: {},
  mutations: {
   
  },
  actions: {
    

    // postData() {
    //   fetch(
    //     "https://food-palace-4e993-default-rtdb.firebaseio.com/users.json",
    //     {
    //       method: "post",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name: form.name,
    //         password: form.password,
    //       }),
    //     }
    //   )
    //     .then((res) => res.json())
    //     .then((json) => console.log(json));
    // },

    // fetchData() {
    //   fetch("https://food-palace-4e993-default-rtdb.firebaseio.com/users.json")
    //     .then((res) => res.json())
    //     .then((jsons) => {
    //       for (const json in jsons) {
    //         const userObject = jsons[json];
    //         userObject["id"] = json;
    //         users.value.push(userObject);
    //       }
    //     });
    // },
    // deleteData(id) {
    //   console.log(id);
    //   fetch(
    //     `https://food-palace-4e993-default-rtdb.firebaseio.com/users/${id}.json`,
    //     {
    //       method: "DELETE",
    //     }
    //   )
    //     .then((res) => res.json())
    //     .then((res) => console.log(res));
    // },

    // changeData(id) {
    //   fetch(
    //     `https://food-palace-4e993-default-rtdb.firebaseio.com/users/${id}.json`,
    //     {
    //       method: "put",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         password: form.password,
    //       }),
    //     }
    //   )
    //     .then((res) => res.json())
    //     .then((json) => console.log(json));
    // },
  },
  modules: {signUp},
});
