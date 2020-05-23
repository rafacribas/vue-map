<template>
  <v-app id="app">
    <div id="nav">
      <v-tabs v-model="tab">
        <v-tab :key="1" to="/">Mapa</v-tab>
        <v-tab :key="2" to="/sobre">Sobre</v-tab>
      </v-tabs>
    </div>

    <router-view />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tab: null
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}
</style>
