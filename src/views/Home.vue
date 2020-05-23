<template>
  <div class="container-fluid">
    <div></div>
    <div class="row">
      <div class="col-3">
        <ListaProdutores
          @mouse-over-brew="mouseOverBrew"
          @mouse-left-brew="mouseLeftBrew"
          :produtores="prode"
        />
      </div>
      <div class="col-9">
        <Mapa :produtores="prode" />
      </div>
    </div>
  </div>
</template>

<script>
import Mapa from "../components/Mapa";
import ListaProdutores from "../components/ListaProdutores";
import prodd from "../assets/produtores.json";

export default {
  name: "Home",
  components: { Mapa, ListaProdutores },
  data: function() {
    return {
      prode: prodd,
      produtores1: [{}],
      normalIcon: [50, 50],
      largeIcon: [85, 85]
    };
  },
  mounted: function() {
    var i = -1;
    var b = [];

    this.prode.forEach(function(prod) {
      i++;
      var a = [];
      a = prod.Coordenadas.split(",");
      var aLat = a[0].trim();
      var aLong = a[1].trim();
      b.push({ i, aLat, aLong });
    });

    var cont = 0;

    console.log(b);
    for (var x = 0; x < this.prode.length; x++) {
      this.prode[cont].lat = b[cont].aLat;
      this.prode[cont].long = b[cont].aLong;
      this.prode[cont].iconSize = this.normalIcon;
      //console.log(this.prode[cont].lat +" and cont: "+ cont);
      cont++;
    }

    console.log(this.prode);
  },
  methods: {
    mouseOverBrew: function(index) {
      console.log(
        index + "mouse entrou e icon icon:" + this.prode[index].iconSize
      );
      this.prode[index].iconSize = this.largeIcon;
      console.log(this.prode[index].iconSize);
    },
    mouseLeftBrew: function(index) {
      console.log(
        index + "mouse saiu e icon icon:" + this.prode[index].iconSize
      );
      this.prode[index].iconSize = this.normalIcon;
      console.log(this.prode[index].iconSize)
    }
  }
};
</script>


<style lang="scss" scoped>
</style>