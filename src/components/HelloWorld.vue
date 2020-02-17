<template>
  <div>
    <!-- {{ msg }} -->
    <Top/>
  </div>
</template>

<script>
import MikageDelta from "./MikageDelta.vue";
import Top from "./Top.vue";

export default {
  name: "HelloWorld",
  components: {
    Top
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
