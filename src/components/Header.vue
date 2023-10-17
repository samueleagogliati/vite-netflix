<script>
    import { store } from '../data/store';
    export default {
        name: 'Header',
        data(){
            return {
                store
            }
        },
        methods:{
        }
    }
</script>

<template>
    <header>
        <nav class="bg-dark p-2">
            <div class="container-nav d-flex justify-content-between">
                <a class="navbar-brand bd-highlight p-2" href="#">
                <img src="logo.png" alt="">
                </a>
                <div class="d-flex">
                    <input v-model="store.userSearch" id="input-netflix" class="form-control mx-2" type="search" placeholder="Search" aria-label="Search" @keyup.enter="$emit('searchInput')">
                    <select class="form-select mx-2">
                        <option selected>All</option>
                    </select>
                </div>
            </div>
        </nav>
    </header>
</template>


<style lang="scss">
    header{
        nav{
            width: 100%;
            .container-nav{
                img{
                    width: 100px;
                }
                input{
                    width: 350px;
                }
                select{
                    width: 120px;
                }
            }
        }
    }

</style>