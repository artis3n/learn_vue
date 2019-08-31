<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="Object.keys(this.server).length > 0">
            <h3>Server {{ this.server.id }}</h3>
            <p>Status: {{ this.server.status }}</p>
            <br>
            <button @click="resetStatus()">Reset Status</button>
        </template>
        <p v-else>Server Details are currently not updated</p>

    </div>

</template>

<script>
    import {eventBus} from '../../main';

    export default {
        data: function() {
          return {
              server: {}
          }
        },
        methods: {
          resetStatus() {
              eventBus.$emit('serverStatus', {server: this.server.id, status: 'Normal'})
          }
        },
        created() {
            eventBus.$on('serverDetails', (server) => {
                this.server = server;
            });
        }
    }
</script>

<style>

</style>
