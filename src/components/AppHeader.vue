<script>
export default {
    name: 'AppHeader',
    props: ['message'],
}
</script>

<template>
    <header class="container-fluid">
        <h1>{{ message }}</h1>
    </header>

</template>

<style lang="scss" scoped>
h1 {
    color: red;
}
</style>