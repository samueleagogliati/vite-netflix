<script>
    export default {
        name: 'CardHover',
        props: {
            title: String,
            originalTitle: String,
            language: String,
            vote: String,
            image: String
        },
        methods:{
            calcolaStelle(vote){
                console.log(vote);
                var numeroFloat = parseFloat(vote);
                numeroFloat=numeroFloat/2;
                var numeroArrotondato = Math.ceil(numeroFloat);
                return numeroArrotondato;
            }
        }

    }
</script>


<template>
    <div class="col-lg-2 col-md-3 col-sm my-3" v-if="image!='https://image.tmdb.org/t/p/w342null'">
        <div class="card h-100 bg-dark">
            <img class="h-100" :src="image" alt="">
            <div class="card-img-overlay h-100 text-white bg-black">
                <h6 class="">{{ title }}</h6>
                <p class="">{{ originalTitle }}</p>
                <p class="">{{ language }}</p>
                <i class="fa-solid fa-star" v-for="(n, index) in calcolaStelle(vote)" :key="index">
                </i>
                <i class="fa-regular fa-star" v-for="(n, index) in (5-calcolaStelle(vote))" :key="index">
                </i>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .card{
        img{
            z-index:999;
        }
        &:hover{
            img{
                z-index: 0;
            }
        }
    }
</style>