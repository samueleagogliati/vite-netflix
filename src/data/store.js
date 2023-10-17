import { reactive } from "vue";


export const store = reactive({
    api_key: '702e53fdbc4f2c549f2af52ebc385cb5',
    object_film: [],
    object_tv: [],
    api_url_film: 'https://api.themoviedb.org/3/search/movie?api_key=702e53fdbc4f2c549f2af52ebc385cb5&language=it_IT&query=',
    api_url_tv: 'https://api.themoviedb.org/3/search/tv?api_key=702e53fdbc4f2c549f2af52ebc385cb5&language=it_IT&query=',
    image_url: 'https://image.tmdb.org/t/p/w342',
    userSearch: ""
})