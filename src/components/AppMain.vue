<script>
import SingleCard from './SingleCard.vue'

// Importo store
import {store} from '../store';

export default {
    name: 'FilmList',
    components: {
        SingleCard
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="container">

        <div class="row">
            <div v-for="film in store.filmList" class="col-4">
                <SingleCard :info="film" type="film"/>
            </div>
            <div v-for="serie in store.serieList" class="col-4">
                <SingleCard :info="serie" type="serie"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>


</style>