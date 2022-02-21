<template>
  <div>
  <v-app style="background-color: #181818 ;">
        <TitleBar/>

    <v-app-bar
      app
      color="#181818"
      dark
      flat
      v-if="!this.$route.currentRoute == '/login'"
    >
      <div class="d-flex align-center">
       
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar'

export default {
  name: 'App',
  components: {
    TitleBar
  },

  data: () => ({
    //
  }),
};
</script>

<style type="text/css">
@import "~@fontsource/jost/variable.css"; 

  html {
    overflow-y: auto;
  }

  body {
    overflow-y: auto;
  }


</style>