<template>
  <div>
    <!-- {{ msg }} -->
    <MikageDelta/>
  </div>
</template>

<script>
import MikageDelta from "./MikageDelta.vue";
export default {
  name: "HelloWorld",
  components: {
    MikageDelta
  },
  data() {
    return {}
  },
  props: {
    msg: String
  },
  methods: {
  }
};
</script>

<style></style>
