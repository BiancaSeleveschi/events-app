<template>
  <div>
    <h3>Creare eveniment</h3>
    <div>
      <input
        class="d-block mb-1 m-auto"
        v-model="event.title"
        placeholder="title"
        type="text"
      />
      <input
        class="d-block mb-1 m-auto"
        v-model="event.description"
        placeholder="description"
        type="text"
      />
      <select class="d-block mb-1 m-auto p-1" v-model="event.category">
        <option
          v-for="(category, index) in this.$store.state.categories"
          :key="index"
        >
          {{ category }}
        </option>
      </select>
      <!--    <input v-model="event.category" placeholder="category" type="text" />-->
      <input
        class="d-block mb-1 m-auto"
        v-model="event.date"
        placeholder="date"
        type="date"
      />
      <input
        class="d-block mb-1 m-auto"
        v-model="event.location"
        placeholder="location"
        type="text"
      />
      <input
        class="d-block mb-1 m-auto"
        v-model="event.price"
        placeholder="price"
        type="number"
      />
      <button class="d-block mt-2 m-auto btn btn-primary" @click="addNewEvent">
        Add
      </button>
    </div>
    <h3 class="mt-5">Creare categorie</h3>
    <div>
      <input v-model="category" placeholder="Category" />
      <button @click="addCategory">Add category</button>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";

export default {
  name: "EventForm",
  data() {
    return {
      event: {
        id: uuid(),
        title: "",
        description: "",
        category: "",
        date: "",
        location: "",
        price: "",
      },
      category: "",
    };
  },
  methods: {
    addNewEvent() {
      console.log(this.event);
      this.event.date = new Date(this.event.date);
      console.log(this.event);
      this.$store.dispatch("addNewEvent", this.event);
      this.event = {
        id: uuid(),
        title: "",
        description: "",
        category: "",
        date: "",
        location: "",
        price: "",
      };
    },
    addCategory() {
      this.$store.dispatch("addCategory", this.category);
    },
  },
};
</script>

<style></style>
