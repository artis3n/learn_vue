<template>
    <div class="card main bg-light mb-3">
        <div class="card-body">
            <div class="card-text">
                <h2><slot></slot></h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .main {
        border: 1px solid lightgray;
        border-radius: 5px;
        max-width: 18rem;
        margin-left: 5px;
        margin-right: 5px;
        margin-block: 1%;
    }

    .card-body {
        font-family: 'Arizonia', sans-serif;
        padding-left: 8%;
        padding-bottom: 5%;
    }
</style>
