<template>
  <transition name="fade">
    <div
      class="overlay"
      v-if="isActive"
      :style="{
        backgroundColor: this.bgColor,
      }"
    >
      <div class="overlay_center">
        <div class="overlay_logo">
          <img :src="this.imgsrc" alt="" />
        </div>
        <Progress
          class="overlay_progress_bar"
          :progress="this.progress"
          :color="this.color"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import Progress from "@/components/Misc/Progress";

export default {
  name: "LoadingOverlay",
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    imgsrc: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "blue",
    },
    bgColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    Progress,
  },
  computed: {
    isActive: function () {
      if (this.progress === 100) {
        return false;
      } else if (this.progress > 100) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.overlay_center {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  z-index: 101;
}
.overlay_logo {
  widows: 100%;
  height: 64px;
}
.overlay_logo img {
  width: 64px;
}
.overlay_progress_bar {
  width: 256px;
  margin-top: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
