<script>
import SingleFilm from './SingleFilm.vue'

// Importo store
import {store} from '../store';

export default {
    name: 'FilmList',
    components: {
        SingleFilm
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
                <SingleFilm :info="film"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>


</style>