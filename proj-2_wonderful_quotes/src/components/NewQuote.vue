<template>
    <div class="main">
        <div class="form-group" id="form-centered">
            <label for="new-quote">Quote</label>
            <textarea class="form-control" rows="2" v-model="content"></textarea>
            <button class="btn btn-primary" id="quote-button" @click="publish()">Add Quote</button>
        </div> 
    </div>
</template>

<script>
    import {eventBus, Quote} from '../main';

    export default {
        data() {
            return {
                content: ""
            }
        },

        methods: {
            publish() {
                eventBus.$emit("newQuote", new Quote(this.content))
                this.content = ""
            }
        }
    }
</script>

<style scoped>
    #quote-button {
        margin-block: 10px;
    }

    #form-centered {
        margin: auto;
        width: 50%;
    }
</style>
