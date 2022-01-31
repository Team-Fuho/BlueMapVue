<!--https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_progressbar_round based-->
<template>
  <div class="m-progress-container">
    <div
      class="m-progress-bar"
      v-bind:style="{
        width: this.progress + '%',
        height: '100%',
        backgroundColor: this.color,
        transition: 'width 0.5s ease-in-out',
      }"
    >
    </div>
  </div>
</template>
<script>
export default {
  name: 'Progress',
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "blue",
    },
  },
};
</script>
<style>
.m-progress-container {
  height: 10px;
  width: 100%;
  background-color: transparent;
  border-radius: 5px;
  overflow: hidden;
  text-align: left;
}
</style>