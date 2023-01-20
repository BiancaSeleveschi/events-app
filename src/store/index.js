import Vue from "vue";
import Vuex from "vuex";
// import { v4 as uuid } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [
      {
        id: "d66454d7-9472-4717-8cae-dc1b32f3c1e4",
        title: "Stand-up",
        description: "Micutu",
        category: "Comedy",
        date: new Date("03-03-22"),
        location: "Cluj-Napoca",
        price: 100,
      },
      {
        id: "d66454d7-96i2-4717-8cae-dc1b32f3c1e4",
        title: "Stand",
        description: "Bordea",
        category: "Drama",
        date: new Date("03-03-22"),
        location: "Baia-Mare",
        price: 130,
      },
      {
        id: "d66454d7-96i2-4717-8c9e-dc1b32f3c1e4",
        title: "FISC",
        description: "Badea",
        category: "Comedy",
        date: new Date("03-03-22"),
        location: "Sibiu",
        price: 220,
      },
    ],
    categories: ["Comedy", "Drama", "Aventure"],

    // categories: [
    //   {
    //     id: "23e-45-yg-67h",
    //     name: "Comedy",
    //   },
    //   {
    //     id: "23e-45-yg-69h",
    //     name: "Drama",
    //   },
    // ],
  },
  getters: {
    getEventById: (state) => (id) => {
      return state.events.find((e) => e.id === id);
    },
    getEventsByLocation: (state) => (location) => {
      return state.events.filter((e) => e.location === location);
    },
    getEventBy:
      //, location, eventDateMin, eventDateMax
      (state) => (category) => {
        return state.events.filter(
          (e) =>
            // e.title.toLowerCase().includes(title.toLowerCase()) ||
            e.category === category
        );
        //solutia 2:
        // return state.events.find((e) => e.title.includes(title));
        // //sol 3:
        // let event;
        // state.events.forEach((e) => {
        //     if (e.title.includes(title){
        //         event = e
        //     }
        // })
        // return event;
      },
  },
  mutations: {
    INIT_STORE(state) {
      console.log("init store", state);
      if (localStorage.getItem("state")) {
        console.log("init store - inside state");
        const stateFromStorage = JSON.parse(localStorage.getItem("state"));
        // replaceState(JSON.parse(localStorage.getItem("state"));)
        state.events = stateFromStorage.events;
        state.categories = stateFromStorage.categories;
      } else {
        console.log("init store - not inside state");

        localStorage.setItem("state", JSON.stringify(state));
      }
      console.log(" after init store", state);
    },
    INIT_EVENTS(state, events) {
      console.log("init events mutation", events);
      state.events = events;
    },
    ADD_EVENT(state, event) {
      state.events.push(event);
      localStorage.setItem("state", JSON.stringify(state));
    },
    ADD_CATEGORY(state, category) {
      state.categories.push(category);
      localStorage.setItem("state", JSON.stringify(state));
    },
    DELETE_EVENT(state, id) {
      let index = state.events.findIndex((e) => e.id === id);
      //solutia 2: forEach
      //solutia 3: for loop
      state.events.splice(index, 1);
      localStorage.setItem("state", JSON.stringify(state));
      //solutia 2:
      // state.events.slice(index, index + 1);
      //solutia 3: spread operator
      //solutia 4: for loop -> shiftarea elementelor la stanga
    },
  },
  actions: {
    addNewEvent(context, event) {
      context.commit("ADD_EVENT", event);
    },
    addCategory(context, category) {
      context.commit("ADD_CATEGORY", category);
    },
    deleteEvent(context, id) {
      context.commit("DELETE_EVENT", id);
    },
    fetchEvents(context) {
      fetch("http://localhost:3000/events", {
        method: "GET",
      })
        .then((result) => {
          console.log("Response events:...");
          return result.json();
        })
        .then((res) => {
          context.commit("INIT_EVENTS", res);
          console.log("Response events:", res);
          return res;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  modules: {},
});
