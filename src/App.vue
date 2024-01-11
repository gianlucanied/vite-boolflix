<script>

// Importo Axios
import axios from 'axios';

// Importo componenti
import AppHeader from './components/AppHeader.vue';
import FilmSerieList from './components/FilmSerieList.vue';

// Importo store
import {store} from './store';

export default {
  components: {
    AppHeader,
    FilmSerieList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    performSearch(){
      this.getFilm();
      this.getSerie();
    },
    getFilm() {
      console.log('getFilm called with searchFilmSerie:', store.searchFilmSerie);
      let myUrl = store.apiUrl;

      if(store.searchFilmSerie !== "") {
        myUrl+= `&query=${store.searchFilmSerie}`
      }
      axios
      .get(myUrl)
      .then((res => {
        store.filmList = res.data.results;
      }))
      .catch((err)=>{
        console.log("Errori", err);
      })
    },
    getSerie() {
      console.log('getSerie called with searchFilmSerie:', store.searchFilmSerie);
      let myUrlSerie = store.apiUrlSerie;

      if(store.searchFilmSerie !== "") {
        myUrlSerie+= `&query=${store.searchFilmSerie}`
        console.log("searchFilmSerie");
      }
      axios
      .get(myUrlSerie)
      .then((res => {
        store.serieList = res.data.results;
        console.log("store.serieList:", store.serieList);
      }))
      .catch((err)=>{
        console.log("Errori", err);
      })
    }
  },
  created() {
    this.getFilm();
    this.getSerie();
  }
  
}
</script>

<template>
  <AppHeader @performSearch="performSearch" message="BoolFlix"/>

  <main>
    <FilmSerieList/>
  </main>

</template>

<style lang="scss">

</style>
