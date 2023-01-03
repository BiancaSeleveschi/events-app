<template>
  <div>
    <h1>Lista de evenimente</h1>
    <h2>Filtreaza evenimentele</h2>
    <input
      @keydown.enter="searchEvent"
      v-model="eventTitle"
      placeholder="Event title"
    />
    <input
      @keydown.enter="searchEvent"
      v-model="eventLocation"
      placeholder="Event location"
    />
    <select v-model="eventCategory">
      <option
        v-for="(category, index) in this.$store.state.categories"
        :key="index"
      >
        {{ category }}
      </option>
    </select>
    <button @click="searchEvent">Search</button>
    <div v-for="(event, index) in events" v-bind:key="index">
      <EventCard :event="event" />
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard";

export default {
  name: "EventList",
  components: { EventCard },
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

<style soped></style>
