<template>
  <div>
    <h1>{{ msg }}</h1>
    <counter />
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    Counter
  }
};
</script>

<style></style>
