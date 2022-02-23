<template>
  <div class="loginBG">
    <v-container fill-height fluid>
  <v-row align="center"
      justify="center">
      <v-col>
         <v-card
  elevation="1" class="mx-auto loginCard text-center" color="#333333"
    max-width="380"
>
<v-img src="https://store-images.s-microsoft.com/image/apps.2678.14513124030084310.ec67955a-94fe-46fe-943b-1c6afb546be2.4e30ef5c-a49b-4b04-867c-a953936bf086"></v-img>
  <h1 class="login-title pt-6 pb-2">Modpack Store</h1>
    <p class="login-subtitle pb-4">Inicia sesión para acceder a Modpack Store</p>
<v-form @keyup.native.enter="login">
    <v-text-field
            filled
            dark
            class="mx-4"
            label="Usuario"
            v-model="email"
            type="email" 
            prepend-inner-icon="mdi-account"
          ></v-text-field>

          <v-text-field
            filled
            dark
            class="mx-4"
            label="Contraseña"
            type="password"
            v-model="password" 
            prepend-inner-icon="mdi-key-outline"
          ></v-text-field>

<v-btn
  elevation="2"
  outlined
  dark
  @click="login"
  class="mt-2 mb-4"
  width="80%"
>Acceder</v-btn>
</v-form>
</v-card>
      </v-col>
  </v-row>
</v-container>

<v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-overlay :value="overlay" opacity="0.9">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>


   </div>
</template>

<script type="text/javascript">
const auth = require("@/modules/Firebase").default.auth
window.auth = auth
import firebaseMessage from "@/assets/firebasei18n.json";
  
  export default {
    name: 'Login',
    data() { 
  return { 
    email: '', 
    password: '', 
    snackbar: false,
      text: '',
      timeout: 6000,
      overlay: false,
  }; 
},
    methods: {
  login() {
    this.overlay = true;
      auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.overlay = false;
        alert('Successfully logged in');
        this.$router.push('/dashboard');
      })
      .catch(e => {
        const errorText = firebaseMessage[e.code] || e.message;
        this.text = errorText;
        this.snackbar = true
        this.overlay = false
      });
  },
},
  }
</script>

<style type="text/css" scoped>

  .loginCard {
   margin-top:  20px;
  }

  .login-title {
    font-family: Jost;
    color: #eee;
    font-size: 21px;
    font-weight: 500;

  }

  .login-subtitle {
    font-family: Jost;
    color: #999;
    font-size: 16px;
    font-weight: 400;

  }


  .loginBG {
    height: 100%;
    background-size: cover;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1068%26quot%3b)' fill='none'%3e%3cpath d='M13.424795093333543-61.23217961387262L-122.50840937343136 106.63134806083312 197.2534843720097 226.59939092362754z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-30.64246378488835-105.49067247928171L-98.00585160984237 211.42915015847132 218.91397102791066 278.79253798342535 286.2773588528647-38.127284654327696z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-26.895421879446566 323.8778014432381L288.8004791109696 250.99365983582578 215.9163375035573-64.70224115459041-99.7795634868589 8.181900452821935z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1692.4920507767463 332.761762923439L2002.3347917087697 238.03333059327218 1907.606359378603-71.80941033875126 1597.7636184465794 22.919021991415548z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1559.9189040241185 143.42768764114413L1818.6768092794414 338.41575514240765 2013.664876780705 79.65784988708472 1754.906971525382-115.33021761417882z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1616.72 -56.72 a30.56 30.56 0 1 0 61.12 0 a30.56 30.56 0 1 0 -61.12 0z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M362.5196707435767 967.5573426216622L129.45357543385364 742.4880305929471 137.45035871486164 1200.6234379313853z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-158.53 878.53 a173.06 173.06 0 1 0 346.12 0 a173.06 173.06 0 1 0 -346.12 0z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-76.16870765884684 1032.5465698390108L62.67341603344573 1198.01216955271 241.45075375784825 907.0161841574215z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1852.034%2c1230.171C1926.781%2c1233.627%2c1992.952%2c1179.492%2c2024.808%2c1111.785C2052.776%2c1052.34%2c2024.194%2c988.466%2c1992.942%2c930.68C1959.379%2c868.621%2c1922.587%2c792.385%2c1852.034%2c792.321C1781.432%2c792.257%2c1741.389%2c866.849%2c1710.682%2c930.424C1684.784%2c984.043%2c1679.479%2c1043.137%2c1704.877%2c1096.995C1735.121%2c1161.129%2c1781.203%2c1226.896%2c1852.034%2c1230.171' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1593.99 830.01 a76.02 76.02 0 1 0 152.04 0 a76.02 76.02 0 1 0 -152.04 0z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1741.8341843592493 727.3027210705682L1584.755867399436 1010.6795061837324 2025.2109694724136 884.3810380303814z' fill='rgba(0%2c 0%2c 0%2c 0.18)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1068'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  }
</style>