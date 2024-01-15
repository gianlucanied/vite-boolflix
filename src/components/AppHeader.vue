<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    props: ['message'],
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header class="container-fluid">
        <h1>{{ message }}</h1>
        <input type="text" placeholder="Cerca film" v-model="store.searchFilmSerie">
        <button type="submit" @click.prevent="$emit('Search')">Search</button>

    </header>

</template>

<style lang="scss" scoped>
h1 {
    color: red;
}
</style>