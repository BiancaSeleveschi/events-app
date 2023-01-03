<template>
  <div>
    <img
      src="https://img.freepik.com/free-vector/stand-up-comedy-logo-with-microphone_1308-95780.jpg?w=900&t=st=1671551486~exp=1671552086~hmac=b4ce472b820eefc4d0ba2601bf28ab829f8a3fd1dd0a56726ee82d521c2fce2c"
      width="300"
    />
    <h3>Title: {{ event.title }}</h3>
    <p>Description: {{ event.description }}</p>
    <p>Categorie {{ event.category }}</p>
    <p>Data: {{ event.date }}</p>
    <p>Locatie: {{ event.location }}</p>
    <p>Price: {{ event.price }}</p>
  </div>
</template>

<script>
export default {
  name: "EventShow",
  props: ["id"],
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
      // console.log(this.$store.state.events);
      // console.log(this.$route.params.id);
    },
  },
  methods: {
    findEventById1(id) {
      for (let i = 0; i < this.$store.state.events; i++)
        if (this.$store.state.events[i].id === id) {
          return this.$store.state.events[i];
        }
    },
    findEventById2(id) {
      let index = this.$store.state.events.findIndex((e) => e.id === id);
      return this.$store.state.events[index];
    },
    findEventById3(id) {
      return this.$store.state.events.find((e) => {
        return e.id === id;
      });
    },
    findEventById4(id) {
      return this.$store.state.events.filter((e) => e.id === id);
    },
    findEventById5(id) {
      //forEach e dloar un inlocuitor de for normal = doar parcurge array-ul si in interior scrii logica
      let event;
      this.$store.state.events.forEach((e) => {
        if (e.id === id) {
          event = e;
        }
      });
      return event;
    },
  },
};
</script>

<style scoped></style>
