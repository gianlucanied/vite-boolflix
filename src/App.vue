<script>

// Importo Axios
import axios from 'axios';

// Importo componenti
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

// Importo store
import {store} from './store';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    Search(){
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
  
  // created() {
  //   // this.getFilm();
  //   // this.getSerie();
  // }
  
}
</script>

<template>
  <AppHeader @Search="Search" message="BoolFlix"/>

  <main>
    <AppMain/>
  </main>

</template>

<style lang="scss">

</style>
