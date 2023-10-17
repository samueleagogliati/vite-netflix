<script>
    import CardHover from './partials/CardHover.vue'
    import { store } from '../data/store';
    export default {
        name: 'Main',
        components:{
            CardHover
        },
        data(){
            return{
                store
            }
        }

    }
</script>

<template>
    <main>
        <div class="container" v-if="store.object_film.length>0 || store.object_tv.length>0">
            <div class="row">
                <CardHover v-for="item in store.object_film" 
                :key="item.id"
                :title="item.title"
                :originalTitle="item.original_title"
                :vote="item.vote_average.toString()"
                :language="item.original_language"
                :image="store.image_url + item.poster_path">
                </CardHover>
    
                <CardHover v-for="item in store.object_tv" 
                :key="item.id"
                :title="item.name"
                :originalTitle="item.original_name"
                :vote="item.vote_average.toString()"
                :language="item.original_language"
                :image="store.image_url + item.poster_path ">
                </CardHover>
            </div>
        </div>
    </main>
  
</template>


<style lang="scss">

</style>