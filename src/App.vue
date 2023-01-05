<template>
  <div id="app">
    <nav class="p-3 bg-primary mb-3">
      <router-link class="m-3" to="/">Home</router-link>
      <router-link :to="{ name: 'event-form' }"> Creare eveniment</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  beforeMount() {
    console.log(" APP init store", this.$store.state);
    this.$store.commit("INIT_STORE");
    console.log(" APP init store", this.$store.state);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: lightskyblue;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/

html {
  background: lightskyblue;
}
</style>
