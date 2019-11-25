<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ reversed | reverseString }}</p>
                <p>{{ counted | count }}</p>

                <hr>
                <p>Now with computed properties:</p>
                <p>{{ computedReverse }}</p>
                <p>{{ computedCount }}</p>

                <hr>
                <p>Now with a mixin:</p>
                <p>{{ mixinComputedReverse }}</p>
                <p>{{ mixinComputedCount }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { stringManipulation } from './mixins/stringManipulation';

    export default {
        data() {
            return {
                reversed: 'This text is reversed.',
                counted: 'This text is counted.',
            };
        },
        filters: {
            reverseString(value) {
                return [...value].reverse().join('');
            }
        },
        computed: {
            computedReverse() {
                return [...this.reversed].reverse().join('');
            },
            computedCount() {
                return `${this.counted} (${this.counted.length})`;
            }
        },
        mixins: [stringManipulation],
    };
</script>

<style>
</style>
