<template>
    <div class="col-xs-12 col-sm-6">
        <server-list :servers="servers"></server-list>
    </div>
</template>

<script>
    import ServerList from "./ServerList.vue";
    import {eventBus} from "../../main";
    export default {
        components: {ServerList},
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                ]
            }
        },
        created() {
            eventBus.$on('serverStatus', (data) => {
                this.servers[data.server - 1].status = data.status;
            })
        }
    }
</script>

<style>

</style>
