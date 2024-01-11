import { reactive } from 'vue'

export const store = reactive({
    filmList: [],
    searchFilm: "",
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=89d4758b3526caf37df719336d6cbeb2",
    apiUrlSerie: "https://api.themoviedb.org/3/search/tv?api_key=89d4758b3526caf37df719336d6cbeb2",
    searchSerie: "",
    serieList: [],
})