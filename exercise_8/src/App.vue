<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="activeComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="activeComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="activeComponent = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="activeComponent">
                    <p>Here is my content hello.</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
            return {
                activeComponent: 'appBlue'
            }
        }
    }
</script>

<style>
</style>
