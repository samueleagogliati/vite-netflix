<script>
  import Header from './components/Header.vue';
  import { store } from './data/store';
  import axios from 'axios';
  import Main from './components/Main.vue';

  export default {
    name: 'App',
    components:{
      Header,
      Main
    },
    data(){
      return{
        store
      }
    },
    methods:{
      ricerca(){
        document.getElementById("input-netflix").value="";
        this.getApi();
      },
      getApi(){
        axios.get(store.api_url_film+store.userSearch)
          .then( res =>{
            store.object_film = res.data.results;
            this.show=false;
          })
          .catch(err => {
            console.log(err);
          })

          axios.get(store.api_url_tv+store.userSearch)
          .then( res =>{
            store.object_tv= res.data.results;
            this.show=false;
          })
          .catch(err => {
            console.log(err);
          })
      }
    }
  }
</script>

<template>
  <Header @searchInput="ricerca"></Header>
  <Main></Main>
</template>

<style>

</style>