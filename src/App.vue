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
    performSearch(){
      this.getFilm();
      this.getSerie();
    },
    getFilm() {
      let myUrl = store.apiUrl;

      if(store.searchFilm !== "") {
        myUrl+= `&query=${store.searchFilm}`
      }
      axios
      .get(myUrl)
      .then((res => {
        console.log(res.data.results);
        store.filmList = res.data.results;
      }))
      .catch((err)=>{
        console.log("Errori", err);
      })
    },
    getSerie() {
      let myUrlSerie = store.apiUrlSerie;

      if(store.searchSerie !== "") {
        myUrlSerie+= `&query=${store.searchSerie}`
        console.log("searchSerie");
      }
      axios
      .get(myUrlSerie)
      .then((res => {
        console.log(res.data.results);
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
    <FilmList/>
  </main>

</template>

<style lang="scss">

</style>
