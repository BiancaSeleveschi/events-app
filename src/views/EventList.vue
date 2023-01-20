<template>
  <div id="event-list-div">
    <h1>Lista de evenimente</h1>
    <h2 class="mt-2">Filtreaza evenimentele</h2>
    <div class="m-3">
      <input
        class="d-block mb-1 m-auto"
        @keydown.enter="searchEvent"
        v-model="eventTitle"
        placeholder="Event title"
      />
      <input
        class="d-block mb-1 m-auto"
        @keydown.enter="searchEvent"
        v-model="eventLocation"
        placeholder="Event location"
      />
      <select class="d-block mb-1 p-1 m-auto" v-model="eventCategory">
        <option
          v-for="(category, index) in this.$store.state.categories"
          :key="index"
        >
          {{ category }}
        </option>
      </select>
      <input
        class="d-block mb-1 m-auto"
        v-model="eventDateMin"
        placeholder="Date"
      />
      <input
        class="d-block mb-1 m-auto"
        v-model="eventDateMax"
        placeholder="Date"
      />
      <button
        class="d-block mt-2 m-auto rounded-2 btn btn-secondary"
        @click="searchEvent"
      >
        Search
      </button>
    </div>
    <transition name="fade">
      <div v-show="deletedEventTitle != ''">
        <div class="alert alert-success w-50 mx-auto" role="alert">
          The event {{ deletedEventTitle }} has been deleted successfully
        </div>
      </div>
    </transition>
    <div v-for="(event, index) in events" v-bind:key="index">
      <EventCard :event="event" @delete-event="showDeleteAlert" />
    </div>
    <button @click="fetchEvents">Fetch events</button>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: this.$store.state.events,
      eventTitle: "",
      deletedEventTitle: "",
      eventCategory: this.$store.state.categories[0],
      eventLocation: "",
      eventDateMin: "",
      eventDateMax: "",
    };
  },
  // mounted() {
  //   this.$store
  //     .dispatch("fetchEvents")
  //     .then((res) => console.log("workssss", res));
  // },
  methods: {
    fetchEvents() {
      this.$store
        .dispatch("fetchEvents")
        .then((res) => console.log("workssss", res));
    },
    searchEvent() {
      // this.eventDateMax = new Date(this.eventDateMax);
      this.events = this.$store.getters.getEventsByLocation(
        // this.eventTitle,
        // this.eventCategory,
        this.eventLocation
        // this.eventDateMin,
        // this.eventDateMax
      );

      // return this.events;
    },
    showDeleteAlert(eventTitle) {
      const clear1 = () => (this.deletedEventTitle = "");
      this.deletedEventTitle = eventTitle;
      setTimeout(clear1, 5000);
    },
    clear() {
      this.deletedEventTitle = "";
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
