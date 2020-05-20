<template>
  <div class="about">
    <h1>Insira aqui as coordenadas do seu frete:</h1>
    <v-form v-model="valid">
      <v-container fill-height>
        <h2>Origem:</h2>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-text-field v-model="latA" label="Latitude" required>
            </v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="longA" label="Longitude" required>
            </v-text-field>
          </v-col>
        </v-row>

        <h2>Destino:</h2>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-text-field v-model="latB" label="Latitude" required>
            </v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="longB" label="Longitude" required>
            </v-text-field>
          </v-col>
        </v-row>

        <v-btn @click="getFreightPrice" color="primary">Enviar</v-btn>
        <v-row>
          <h2 v-if="distance != null">{{ distance }}Km</h2>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valid: null,
      latA: null,
      longA: null,
      latB: null,
      longB: null,
      errors: [],
      distance: null
    };
  },

  methods: {
    getFreightPrice() {
      this.$api
        .post("/distancia", {
          latA: this.latA,
          longA: this.longA,
          latB: this.latB,
          longB: this.longB
        })
        .then(res => {
          console.log(res);
          this.distance = res.data.distance;
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e);
        });
    }
  }
};
</script>
