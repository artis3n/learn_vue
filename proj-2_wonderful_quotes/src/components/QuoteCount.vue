<template>
    <div class="main">
        <h2><b>Quotes Added</b></h2>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{ 'width': count / max * 100 + '%' }" :aria-valuenow="count" aria-valuemin="0" :aria-valuemax="max">{{ count }} / {{ max }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['count', 'max'],
    }
</script>

<style scoped>
    .main {
        margin-top: 5%;
    }
</style>
