<script>
import AppHeader from './components/AppHeader.vue';
import FilmList from './components/FilmList.vue';
import SingleFilm from './components/FilmList.vue';
export default {
  components: {
    AppHeader,
    FilmList,
    SingleFilm
  }
}
</script>

<template>
  <AppHeader message="BoolFlix"/>

  <main>
    <FilmList/>
  </main>

</template>

<style lang="scss">

</style>
