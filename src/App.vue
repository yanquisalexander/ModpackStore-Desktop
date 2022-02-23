<template>
  <div>
  <v-app style="background-color: #181818 ;">
        <TitleBar/>

    <v-app-bar
      app
      color="#000"
      class="mt-7"
      flat
      v-if="!isLogin"
    >
      <div class="d-flex align-center">

      </div>
<v-text-field
prepend-inner-icon="mdi-magnify"
            label="Buscar en Modpack Store"
            class="mt-7 searchText"
            filled
            rounded
            dark
            dense
            single-line
          ></v-text-field>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-btn text dark rounded class="t-i myModpacks mr-3">
      <v-icon
          dark
          left
        >
          mdi-folder-download-outline
        </v-icon>Modpacks Instalados
    </v-btn>
    <v-btn
      rounded
      color="#303030"
      dark
      class="userBtn t-i"
    >
    <v-icon
          dark
          left
        >
          mdi-chevron-down
        </v-icon>
      Mi Cuenta
      <v-avatar
  size="28"
  class="ml-3"
>      <img
        src="https://yanquisalexander.me/_nuxt/img/alexander.9b54f94.jpg"
      ></v-avatar>
    </v-btn>
  </div>

    </v-app-bar>
    <v-main>
<vue-page-transition name="fade-in-right" style="display:  contents;">
  <router-view/>
</vue-page-transition>
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
  computed: {
        isLogin() {
            return this.$route.name == 'Login'
        }
    }
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

  .t-i {
    text-transform: initial!important;
  }
  .userBtn {
    font-family: Jost;
  }

  .myModpacks {
    font-family: Jost;
  }

  .searchText {
    font-family: Jost;
  }


</style>