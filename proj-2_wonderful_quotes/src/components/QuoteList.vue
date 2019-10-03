<template>
    <div class="row">
        <div class="panel-qroup">
            <app-quote v-for="(quote, index) in quotes" :key="quote" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
        </div>
    </div>
</template>

<script>
    import Quote from './QuoteCard.vue';

    export default {
        components: {
            appQuote: Quote,
        },

        props: ['quotes'],

        methods: {
            deleteQuote(index) {
                this.$emit('removeQuote', index);
            }
        }
    }
</script>

<style scoped>
</style>
