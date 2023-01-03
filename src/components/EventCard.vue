<template>
  <div id="event-card-div">
    <router-link :to="{ name: 'event-show', params: { id: event.id } }">
      <h3>{{ event.title }}</h3>
    </router-link>
    <p>{{ event.description }}</p>
    <p>{{ event.category }}</p>
    <p>{{ event.date }}</p>
    <p>{{ event.location }}</p>
    <p>Price: {{ event.price }}</p>
    <button @click="deleteEvent">Delete</button>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: ["event"],
  methods: {
    deleteEvent() {
      this.$store.dispatch("deleteEvent", this.event.id);
    },
  },
};
</script>

<style>
#event-card-div {
  text-decoration: none;
  border: 3px black solid;
  border-radius: 5px;
  padding: 5px;
  width: max-content;
  margin: auto;
  margin-bottom: 5px;
}

#event-card-div:hover {
  text-decoration: none;
  cursor: pointer;
  border-color: blue;
}
</style>
