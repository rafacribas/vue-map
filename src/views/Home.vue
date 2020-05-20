<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <BrewList 
          @mouse-over-brew="mouseOverBrew"
          @mouse-left-brew="mouseLeftBrew"
          :brews="produtores" />
      </div>
      <div class="col-9">
        <Mapa :produtores="produtores" />
      </div>
    </div>
  </div>
</template>

<script>
import Mapa from "../components/Mapa";
import BrewList from "../components/BrewList";
import axios from "axios";

export default {
  name: "Home",
  components: { Mapa, BrewList },
  data: function() {
    return {
      produtores: [],
      normalIcon: [50,50],
      largeIcon: [90,90]
    };
  },
  mounted: function() {
    axios.get("https://api.openbrewerydb.org/breweries").then(r => {
      this.produtores = r.data.filter(r => r.state =='Arizona').map(r => {
        r.iconSize = this.normalIcon;
        return r;
      });
    });
  },
  methods: {
    mouseOverBrew: function(index){
      
      console.log(index + "mouse entrou e icon icon:" + this.produtores[index].iconSize )
       this.produtores[index].iconSize = this.largeIcon; 
    },
    mouseLeftBrew: function(index){
      
      console.log(index + "mouse saiu e icon icon:" + this.produtores[index].iconSize )
      this.produtores[index].iconSize = this.normalIcon; 
    }
  }
};
</script>


<style lang="scss" scoped>

</style>