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
      <button
        class="d-block mt-2 m-auto rounded-2 btn btn-secondary"
        @click="searchEvent"
      >
        Search
      </button>
    </div>
    <div v-for="(event, index) in events" v-bind:key="index">
      <EventCard :event="event" />
    </div>
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
      eventCategory: this.$store.state.categories[0],
      eventLocation: "",
    };
  },
  methods: {
    searchEvent() {
      this.events = this.$store.getters.getEventBy(
        this.eventTitle,
        this.eventCategory,
        this.eventLocation
      );
    },
  },
};
</script>

<style></style>
