<template>
  <div class="card brew-list">
    <ul class="list-group list-group-flush">
      <li
      @mouseover="mouseOver(index)"
      @mouseleave="mouseLeave(index)"
        v-for="(brew, index) in brews"
        :key="index"
        class="list-group-item"
      >{{brew.name}}, {{brew.state}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "BrewList",
  props: {
    brews: Array
  },
  methods:{
    mouseOver: function(index){
      this.$emit('mouse-over-brew', index)
    },
    mouseLeave: function(index){
      this.$emit('mouse-left-brew', index);
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
