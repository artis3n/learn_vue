<template>
    <div class="main">
        <h2><b>Quotes Added</b></h2>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{ 'width': count / max * 100 + '%' }" :aria-valuenow="count" aria-valuemin="0" :aria-valuemax="max">{{ count }} / {{ max }}</div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        data() {
            return {
                count: 0,
                max: 10
            }
        },

        methods: {
            addQuote(quote) {
                this.count++;
                if (this.count > this.max) {
                    this.count == this.max;
                    eventBus.$emit("removeQuote", quote.id);
                }
            },

            removeQuotes(count) {
                this.count--;
                if (this.count < 0) {
                    this.count = 0;
                }
            }
        },

        created() {
            eventBus.$on("newQuote", (quote) => this.addQuote(quote))
            eventBus.$on("removeQuote", () => this.removeQuotes())
        }
    }
</script>

<style scoped>
    .main {
        margin-top: 5%;
    }
</style>
