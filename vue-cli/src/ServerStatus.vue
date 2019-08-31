<template>
  <div>
    <p>Server status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  export default {
    name: "ServerStatus",
    data: function() {
      return {
        status: 'Critical'
      }
    },
    methods: {
      changeStatus() {
        this.status = 'Normal'
      }
    }
  }
</script>

<style scoped>

</style>
