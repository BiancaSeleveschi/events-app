<template>
  <div>
    <img
      src="https://img.freepik.com/free-vector/stand-up-comedy-logo-with-microphone_1308-95780.jpg?w=900&t=st=1671551486~exp=1671552086~hmac=b4ce472b820eefc4d0ba2601bf28ab829f8a3fd1dd0a56726ee82d521c2fce2c"
      width="300"
    />
    <h3>Title: {{ event.title }}</h3>
    <div v-if="!isEditMode">
      <p class="pgf-details">Description: {{ event.description }}</p>
      <p class="pgf-details">Categorie {{ event.category }}</p>
      <p>Data: {{ event.date }}</p>
      <p>Locatie: {{ event.location }}</p>
      <p>Price: {{ event.price }}</p>
      <button class="btn btn-primary rounded-2" @click="editDetails">
        Edit
      </button>
    </div>
    <div v-else-if="isEditMode">
      <input
        v-model="event.description"
        @keydown.enter="saveEdit"
        placeholder="description"
        type="text  "
      />
      <input
        class="d-block mb-2 mt-2 m-auto"
        v-model="event.location"
        @keydown.enter="saveEdit"
        placeholder="location"
        type="text"
      />
      <input
        class="d-block mb-2 mt-2 m-auto"
        v-model="event.price"
        @keydown.enter="saveEdit"
        placeholder="price"
        type="number"
      />
      <input
        class="d-block mb-2 mt-2 m-auto"
        v-model="event.date"
        @keydown.enter="saveEdit"
        placeholder="date"
        type="date"
      />
      <select class="d-block mb-1 m-auto p-1" v-model="event.category">
        <option
          v-for="(category, index) in this.$store.state.categories"
          :key="index"
        >
          {{ category }}
        </option>
      </select>
      <button @click="saveEdit" class="btn btn-success d-block mt-3 m-auto">
        Save
      </button>
    </div>
    <div v-else>
      <p class="pgf-details">Description: {{ event.description }}</p>
      <p class="pgf-details">Categorie {{ event.category }}</p>
      <p>Data: {{ event.date }}</p>
      <p>Locatie: {{ event.location }}</p>
      <p>Price: {{ event.price }}</p>
    </div>
  </div>
</template>
<script>
//TODO: imbunatatiri:
//MUTA tot ce nu tine de state din state si lasa-le doar in componente, ex: isDelete, isEditMode, isEditSave
//REFACTORIZARE: scoate din state tot  ce nu trebuioe, pune in componente tot ce tine doar de componenta si redenumeste cat mai sugestiv tot ce e ambiguu
export default {
  name: "EventShow",
  props: ["id"],
  data() {
    return {
      description: "",
      location: "",
      pricee: "",
      date: "",
      category: "",
      showSave: false,
      isEditMode: false,
    };
  },
  // data() {
  //   console.log("data");
  //   return {
  //     event: this.findEventById2(this.$route.params.id),
  //   };
  // },
  // created() {
  //   console.log("created", this.$route.params.id);
  // },
  // mounted() {
  //   console.log("mounted", this.$route.params.id);
  //   this.event1 = this.findEventById3(this.$route.params.id);
  // },

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    event() {
      return this.$store.getters.getEventById(this.$route.params.id);
      // return this.findEventById5(this.id);
      // console.log("computed", this.$route.params.id);
      // console.log(this.$stores.state.events);
      // console.log(this.$route.params.id);
    },
  },
  methods: {
    editDetails() {
      this.isEditMode = true;
    },
    saveEdit(event) {
      let index = this.events.findIndex((e) => e.id === event.id);
      this.event[index] = event;
      this.isEditMode = false;
    },
    // findEventById1(id) {
    //   for (let i = 0; i < this.$store.state.events; i++)
    //     if (this.$store.state.events[i].id === id) {
    //       return this.$store.state.events[i];
    //     }
    // },
    // findEventById2(id) {
    //   let index = this.$store.state.events.findIndex((e) => e.id === id);
    //   return this.$store.state.events[index];
    // },
    // findEventById3(id) {
    //   return this.$store.state.events.find((e) => {
    //     return e.id === id;
    //   });
    // },
    // findEventById4(id) {
    //   return this.$store.state.events.filter((e) => e.id === id);
    // },
    // findEventById5(id) {
    //   //forEach e dloar un inlocuitor de for normal = doar parcurge array-ul si in interior scrii logica
    //   let event;
    //   this.$store.state.events.forEach((e) => {
    //     if (e.id === id) {
    //       event = e;
    //     }
    //   });
    //   return event;
    // },
  },
};
</script>

<style scoped></style>
