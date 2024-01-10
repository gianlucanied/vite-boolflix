<script>

// Importo Axios
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

// Importo componenti
import FilmList from './components/FilmList.vue';
import SingleFilm from './components/FilmList.vue';

// Importo store
import {store} from './store';

export default {
  components: {
    AppHeader,
    FilmList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilm() {
      axios
      .get(store.apiUrl)
    }
  },
  created() {
    
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
