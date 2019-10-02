<template>
    <div class="container">
        <div class="row"><app-quote-count></app-quote-count></div>
        <div class="row"><app-new-quote></app-new-quote></div>
        <div class="row"><app-quote-list></app-quote-list></div>
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
        }
    }
</script>

<style scoped>
</style>
