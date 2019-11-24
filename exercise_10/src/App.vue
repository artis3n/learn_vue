<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <btn class="btn btn-primary" v-local-on:click="registerClick" @click.prevent>Click me</btn>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomOn from "./directives/CustomOn";
    export default {
        directives: {
            localOn: CustomOn,
        },
        data() {
            return {
                clicked: 0,
            };
        },
        methods: {
            registerClick() {
                this.clicked++;
                alert('Times clicked: ' + this.clicked);
            }
        },
    }
</script>

<style>
</style>
