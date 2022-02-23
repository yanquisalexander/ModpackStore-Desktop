<template>
  <div class="mt-7">
    <section class="landing-home py-4 px-4 mx-auto mt-15  ">
      <h3 class="smalltext ml-6">Bienvenido a</h3>
      <h1 class="welcome-to ml-9 mt-n1">#ModpackStore</h1>
      <h3 class="welcome-to-sub ml-9 mb-16 mt-n1">¡Encuentra tus Modpacks favoritos de Minecraft aquí!</h3>


    </section>

    <section class="categories mx-auto mt-6">
      

  <v-row>
 <v-col
        class="d-flex"
        cols="12"
        sm="3"
      >
        <v-select
          items="Series"
          prepend-inner-icon="mdi-shape-outline"
          dense
          rounded
          dark
          filled
          label="Categoría"
        ></v-select>


      </v-col>

       <v-col
        class="d-flex"
        cols="12"
        sm="3"
      >
        <v-select
          items="1.12.2"
          prepend-inner-icon="mdi-controller-classic-outline"
          dense
          rounded
          dark
          filled
          label="Versión"
        ></v-select>

        
      </v-col>
    </v-row>

    </section>
  </div>
</template>


<style type="text/css">
  .landing-home {
    border-radius: 10px;
    background-color: #212121;
    background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.90)),
    url('https://www.40servidoresmc.es/blog/wp-content/uploads/2020/09/ib6bn13.jpg');
    width: 80%;
    height: 360px;
    background-size: cover;
    color: white;
    padding: 20px;
  }

  .landing-home .smalltext {
    font-family: Jost;
    color: #eee;
    margin-top: calc(100vw - 92vw);
  }

  .landing-home .welcome-to {
    font-family: Jost;
    color: #fff;
    font-size: 2rem;
  }

    .landing-home .welcome-to-sub {
    font-family: Jost;
    color: #fff;
    font-size: ;
  }
.categories {
  max-width: 80%;
}

  .c-filter {
    font-family: Jost;
  }
</style>
<script>

  export default {
    name: 'Home',

    components: {
    },
  }
</script>


