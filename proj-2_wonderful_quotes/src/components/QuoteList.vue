<template>
    <div class="container">
        <div class="row">
            <app-quote-card v-for="quote in quotes" :key="quote.id" @click="eventBus.$emit('removeQuote', quote.id)">{{ quote.text }}</app-quote-card>
        </div>
    </div>
</template>

<script>
    import {eventBus, Quote} from '../main';
    import QuoteCard from './QuoteCard.vue';

    export default {
        components: {
            appQuoteCard: QuoteCard,
        },

        data() {
            return {
                quotes: []
            }
        },

        methods: {
            removeQuote(quoteId) {
                this.quotes = this.quotes.filter(value => value.id !== quote.id);
            }
        },

        created() {
            eventBus.$on("newQuote", quote => this.quotes.push(quote));
            eventBus.$on("removeQuote", quoteId => this.removeQuote(quoteId));
            eventBus.$emit("newQuote", new Quote("This is the first quote"));
        }
    }
</script>

<style scoped>
</style>
