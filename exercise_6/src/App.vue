<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <server-header></server-header>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <server class="list-group-item" v-for="server in 5" :key="server" :num="server">
                    </server>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <server-footer></server-footer>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import Server from "./Server.vue";
    import ServerHeader from "./ServerHeader.vue"
    import ServerFooter from "./ServerFooter.vue";
    export default {
        components: {
            'server': Server,
            'server-header': ServerHeader,
            'server-footer': ServerFooter
        }
    }
</script>

<style>

</style>
