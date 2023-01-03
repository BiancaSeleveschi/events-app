<template>
  <div id="event-card-div" class="rounded-4">
    <router-link :to="{ name: 'event-show', params: { id: event.id } }">
      <h3 id="title-event-card">Title: {{ event.title }}</h3>
    </router-link>
    <p>
      Description :<span class="fw-bold fs-4"> {{ event.description }}</span>
    </p>
    <p>
      Category: <span class="fw-bold">{{ event.category }}</span>
    </p>
    <p>
      Date: <span class="fw-bold">{{ event.date }}</span>
    </p>
    <p>
      Location:<span class="fw-bold"> {{ event.location }}</span>
    </p>
    <p>
      Price: <span class="fw-bold"> {{ event.price }} </span>
    </p>
    <button class="btn btn-danger" @click="deleteEvent">Delete</button>
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
  padding: 5px;
  width: max-content;
  margin: auto;
  margin-bottom: 5px;
  background: orange;
}

#event-card-div:hover {
  text-decoration: none;
  cursor: pointer;
  border-color: #e1541e;
  background: mistyrose;
}

#title-event-card:hover {
  color: darkgreen;
}
</style>
