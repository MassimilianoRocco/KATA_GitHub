<script>
import store from '../data/store.js'
import Card from '../components/Card.vue';
import Loader from '../components/Loader.vue';

export default {
    name: 'AppHome',

    components: {
        Card,
        Loader
    },

    data() {
        return {
            store,
        }
    },
    methods: {

    },


    mounted() {
        
    }

}
</script>

<template>
    <div class="container py-4">

        <div v-if="store.loading==true" class="row gap-2">
            <Loader />
        </div>

        <div v-else class="row gap-2">
            <Card v-if="store.optionRepo==true && store.optionUsers==false" v-for="repo in store.allRepos" :img='repo.owner.avatar_url' :name='repo.name'
                :description='repo.description' :url="repo.html_url"/>
            <Card v-if="store.optionUsers==true && store.optionRepo==false" v-for="user in store.allUsers" :img="user.avatar_url" :name="user.login" :url="user.repos_url"/>
        </div>
    </div>
</template>

<style scoped></style>
