<template>
  <div class="card brew-list">
   <ul class="list-group list-group-flush">
      <li
      @mouseover="mouseOver(index)"
      @mouseleave="mouseLeave(index)"
        v-for="(prod, index) in produtores"
        :key="index"
        class="list-group-item"
      >{{prod.Nome}}<br><b>{{prod.Municipio}}</b></li>
    </ul>
  </div>
</template>

<script>



export default {
  name: "ListaProdutores",
  props: {
    produtores: Array,
    teste: Array
  },
  mounted() {

  },
  methods: {
    mouseOver: function(index) {
      console.log("index:=" + index)
      this.$emit("mouse-over-brew", index);
    },
    mouseLeave: function(index) {
      console.log("index:=" + index)
      this.$emit("mouse-left-brew", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.brew-list {
  overflow-y: scroll;
  height: 80vh;
  li {
    &:hover {
      background-color: gray;
    }
  }
}
</style>
