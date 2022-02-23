<template>
  <div>
    <v-app style="background-color: #181818">
      <TitleBar />

      <v-app-bar app color="#000" class="mt-7" flat v-if="!isLogin">
        <div class="d-flex align-center"></div>
        <v-autocomplete
          item="items"
          hide-selected
          class="mt-7 searchText"
          filled
          rounded
          dark
          dense
          single-line
          label="Buscar en Modpack Store"
          prepend-inner-icon="mdi-magnify"
          return-object
          ><template v-slot:no-data>
            <v-list-item light>
              <v-list-item-title>
                Escribe para buscar en Modpack Store
              </v-list-item-title>
            </v-list-item></template
          ></v-autocomplete
        >

        <v-spacer></v-spacer>
        <div class="text-center">
          <v-btn text dark rounded class="t-i myModpacks mr-3">
            <v-icon dark left> mdi-folder-download-outline </v-icon>Modpacks
            Instalados
          </v-btn>

          <v-menu offset-y transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                rounded
                color="#303030"
                dark
                class="userBtn t-i"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon dark left> mdi-chevron-down </v-icon>
                Mi Cuenta
                <v-avatar size="28" class="ml-3">
                  <img
                    src="https://yanquisalexander.me/_nuxt/img/alexander.9b54f94.jpg"
                /></v-avatar>
              </v-btn>
            </template>
            <v-list dark dense flat width="300" class="mt-2">
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-treasure-chest</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Abrir MultiMinecraft</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-open-in-new</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Ir a Modpack Creators</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-cog-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Configuración</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar>
      <v-main>
        <vue-page-transition name="fade-in-right" style="display: contents">
          <router-view />
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
  text-transform: initial !important;
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

.mt-18 {
  margin-top: 84px !important;
}

* {
  user-select: none;
}
</style>
