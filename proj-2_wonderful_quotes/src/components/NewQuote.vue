<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <label for="new-quote">Quote</label>
                <textarea class="form-control" rows="3" v-model="content"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <button class="btn btn-primary" @click.prevent="publish">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: ""
            }
        },

        methods: {
            publish() {
                this.$emit("newQuote", this.content);
                this.content = "";
            }
        }
    }
</script>

<style scoped>
</style>
