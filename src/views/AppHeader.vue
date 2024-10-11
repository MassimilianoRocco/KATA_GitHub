<script>
import config from '../config.js';
import store from '../data/store.js';
import { Octokit } from 'octokit';

export default {
    name: 'AppHeader',

    data() {
        return {
            store,
            searchInput: '',
            alert: false,
        }
    },
    methods: {

        // CHIAMATE API 
        repoUserApiCall() {
            if (this.searchInput.trim().length >= 3) {
                this.alert = false;

                this.store.loading = true;

                const octokit = new Octokit({
                    auth: config.auth
                });

                if (this.store.optionRepo == true) {
                    octokit.request('GET /search/repositories', {
                        headers: {
                            'X-GitHub-Api-Version': '2022-11-28'
                        },
                        q: this.searchInput //ricerca risultati in base al valore dell'input
                    })
                        .then(response => {
                            this.store.allRepos = response.data.items;
                            console.log(this.store.allRepos);

                            this.store.loading = false; //Setto a false il loader al completamento della chiamata API
                        })
                        .catch(error => {
                            console.error(error)
                        })
                }

                else if (this.store.optionUsers == true) {
                    octokit.request('GET /search/users', {
                        headers: {
                            'X-GitHub-Api-Version': '2022-11-28'
                        },
                        q: this.searchInput
                    })
                        .then(response => {
                            this.store.allUsers = response.data.items;
                            console.log(this.store.allUsers);

                            this.store.loading = false; //Setto a false il loader al completamento della chiamata API
                        })
                        .catch(error => {
                            console.error(error)
                        })
                }
            }
            else {
                this.alert = true;
            }
        },


        // ALTRI METODI
        setReposOn() {
            if (this.store.optionUsers == true) {
                this.store.allUsers = []; //svuoto l'altro array
                this.store.optionUsers = false;
            }
            this.store.optionRepo = true;
            console.log(this.store.optionRepo)
        },
        setUsersOn() {
            if (this.store.optionRepo == true) {
                this.store.allRepos = []; //svuoto l'altro array
                this.store.optionRepo = false;
            }
            this.store.optionUsers = true;
            console.log(this.store.optionUsers)
        },

        handleSelectChange(event) {
            if (event.target.value === '1') {
                this.setReposOn();
            } else if (event.target.value === '2') {
                this.setUsersOn();
            }
        }


    },

    mounted() {

    }

}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="col-2 ms-2">GitHub API</div>
            <div class="col-6 offset-3 ">
                <form class="form-inline d-flex">
                    <p v-if="alert == true" class="mb-0 me-2 p-1 alert alert-danger">Inserisci almeno 3 lettere</p>
                    <input class="form-control mr-sm-2 my_Search" type="search" placeholder="Search" aria-label="Search"
                        v-model="searchInput">
                    <select class="form-select ms-2 my_Select" aria-label="Default select example"
                        @change="handleSelectChange($event)">
                        <option value="1">Repositories</option>
                        <option value="2">Users</option>
                    </select>
                    <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="repoUserApiCall()">Search
                    </button>
                </form>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.my_Search {
    width: 14rem !important;
}

.my_Select {
    width: 10rem !important;
    margin-right: 0.5rem;
}
</style>
