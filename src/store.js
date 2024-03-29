import { reactive } from 'vue'

export const store = reactive({
    filmList: [],
    searchFilmSerie: "",
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=89d4758b3526caf37df719336d6cbeb2",
    apiUrlSerie: "https://api.themoviedb.org/3/search/tv?api_key=89d4758b3526caf37df719336d6cbeb2",
    serieList: [],
    apiUrlImg: "https://image.tmdb.org/t/p/w342",
})