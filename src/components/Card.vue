<script>

export default {
    name: 'Card',

    props:{
        img: String,
        name: String,
        description: String,
        url: String
        // starN: Number,
        // issuesN: Number,
    },

    data() {
        return {

        }
    },
    methods: {


    },


    mounted() {

    }

}
</script>

<template>

    <div class="card p-0 my_Card  my_bg">
        <img :src="img" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item my_bg">
                <span>
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>
                    <!-- {{ starN }} -->22
                </span>
            </li>
            <li class="list-group-item my_bg">
                <span>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </span>
                <span>
                    <!-- {{issuesN}} -->32
                </span>
            </li>
        </ul>
        <div class="card-footer d-flex justify-content-center">
            <a :href='url' class="card-link">
                Vai al repo
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
    </div>

</template>

<style scoped>
.my_Card {
    width: calc(100% / 5 - 0.5rem) !important;
    border: none !important;
}
.my_bg{
    background-color: whitesmoke !important;
}
</style>
