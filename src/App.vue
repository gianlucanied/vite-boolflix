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
      let myUrl = store.apiUrl;

      if(store.searchFilmSerie !== "") {
        myUrl+= `&query=${store.searchFilmSerie}`
      }
      axios
      .get(myUrl)
      .then((res => {
        let newResp = res.data.results;
        newResp = newResp.map((element)=> {
          console.log(store.apiUrlImg + element.poster_path);
          return {
            ...element,
            poster_path:store.apiUrlImg + element.poster_path
          }
        })
        
        store.filmList = newResp;
        console.log("newResp", newResp);
      }))
      .catch((err)=>{
        console.log("Errori", err);
      })
    },
    getSerie() {
      let myUrlSerie = store.apiUrlSerie;

      if(store.searchFilmSerie !== "") {
        myUrlSerie+= `&query=${store.searchFilmSerie}`
        console.log("searchFilmSerie");
      }
      axios
      .get(myUrlSerie)
      .then((res => {
        let newResp = res.data.results;
        newResp = newResp.map((element)=> {
          console.log(store.apiUrlImg + element.poster_path);
          return {
            ...element,
            poster_path:store.apiUrlImg + element.poster_path
          }
        })
        store.serieList = newResp;
        console.log("store.serieList:", store.serieList);
      }))
      .catch((err)=>{
        console.log("Errori", err);
      })
    }
  },
  
  created() {
    // this.getFilm();
    // this.getSerie();
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
