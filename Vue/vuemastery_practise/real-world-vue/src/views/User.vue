<template>
  <div>
    <h1>This is {{ username }}</h1>
    <!-- <h2>Below is for slot</h2>
    <SlotTest>placeHolder is: {{ placeHolder }}</SlotTest>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeHolder: 1
    };
  },
  props: ['username']
};
</script>

<style lang="scss" scoped>
</style>
