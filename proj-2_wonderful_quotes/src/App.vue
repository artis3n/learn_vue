<template>
    <div class="container">
        <div class="row"><app-quote-count :max="maxQuotes" :count="quotes.length"></app-quote-count></div>
        <div class="row"><app-new-quote @newQuote="newQuote"></app-new-quote></div>
        <div class="row"><app-quote-list :quotes="quotes" @removeQuote="removeQuote"></app-quote-list></div>
        <div class="row"><app-quote-instructions></app-quote-instructions></div>
    </div>
</template>

<script>
    import QuoteList from './components/QuoteList.vue';
    import QuoteCount from './components/QuoteCount.vue';
    import NewQuote from './components/NewQuote.vue';
    import QuoteInstructions from './components/QuoteInstructions.vue';
    
    export default {
        components: {
            appQuoteList: QuoteList,
            appQuoteCount: QuoteCount,
            appNewQuote: NewQuote,
            appQuoteInstructions: QuoteInstructions,
        },

        data() {
            return {
                maxQuotes: 10,
                quotes: ["This is the first quote"]
            }
        },

        methods: {
            newQuote(quote) {
                if (this.quotes.length < this.maxQuotes) {
                    this.quotes.push(quote);
                } else {
                    return alert('Please delete a quote!');
                }
            },

            removeQuote(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
</style>
