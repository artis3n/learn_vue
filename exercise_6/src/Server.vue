<template>
  <div>
    <p>Server #{{ num }}</p>
  </div>
</template>

<script>
  export default {
    name: "Server",
    props: {
      num: Number
    },
  }
</script>

<style scoped>

</style>
