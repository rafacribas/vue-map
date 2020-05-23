<template>
  <div class="row map">
    
    <l-map
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="(produtor, index) in produtores"
        :key="index"
        :lat-lng="latLng(produtor.lat, produtor.long)"
      ><l-icon :icon-size="produtor.iconSize" :icon-url="icon"></l-icon></l-marker>
    </l-map>
  </div>
  <!-- /.row map -->
</template>

<script>
import plant from "../assets/plant.png";
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";

export default {
  name: "Mapa",
  props: {
    produtores: Array
  },
  data: function() {
    return {
      zoom: 12,
      center: L.latLng(-25.8729844,-49.4107015),
      url:
        "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFmYWNyaWJhcyIsImEiOiJjazloZ3R0aW0weWIxM2ZwOWl2bTZ5aHhrIn0.q8zXHOGQxnHffPu-T6L85A",
      attribution:
        '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      icon: plant
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  methods: {
    latLng: function(lat, lng) {
      return L.latLng(lat, lng);
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

 <style scoped>
.map {
  height: 80vh;
  width: 100%;
}
</style>