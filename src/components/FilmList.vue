<script>
import SingleFilm from './SingleFilm.vue'
export default {
    name: 'FilmList',
    components: {
        SingleFilm
    }
}
</script>

<template>
    <section class="container">

        <div class="row">
            <div class="col-4">
                <SingleFilm/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>


</style>