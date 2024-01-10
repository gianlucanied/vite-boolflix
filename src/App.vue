<script>

// Importo Axios
import axios from 'axios';

// Importo componenti
import AppHeader from './components/AppHeader.vue';
import FilmList from './components/FilmList.vue';

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
      .then((res => {
        console.log(store.apiUrl);
      }))
      .catch((err)=>{
        console.log("Errori", err);
      })
    }
  },
  created() {
    this.getFilm();
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
