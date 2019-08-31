<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="server in servers" :key="server.id">
      <span @click="details(server)">Server #{{ server.id }}</span>
    </li>
  </ul>
</template>

<script>
  import {eventBus} from '../../main';
  export default {
    name: "ServerList",
    props: {
      servers: Array
    },
    methods: {
      details(server) {
        eventBus.$emit('serverDetails', server)
      }
    }
  }
</script>

<style scoped>

</style>
