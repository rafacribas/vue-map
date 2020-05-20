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
        :lat-lng="latLng(produtor.latitude, produtor.longitude)"
      >
        <l-icon :icon-size=produtor.iconSize :icon-url="icon"></l-icon>
      </l-marker>
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
      zoom: 10,
      center: L.latLng(32.824142, -112.137451),
      url:
        "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFmYWNyaWJhcyIsImEiOiJjazloZ3R0aW0weWIxM2ZwOWl2bTZ5aHhrIn0.q8zXHOGQxnHffPu-T6L85A",
      attribution:
        '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      marker: L.latLng(32.824142, -112.137451),
      icon: plant,
      inconSize: [80, 80]
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