<template>
    <div class="card">
        <img class="img" :src="getImg(restaurantInfo.imgUrl)" :alt="restaurantInfo.imgAlt">
        <p class="name-span">{{ restaurantInfo.name }}</p>
        <p class="note-span">{{ restaurantInfo.note }} <span class="fa fa-star checked"></span></p>
        <p class="distance-span">à {{ restaurantInfo.distance / 1000 }}km</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'RestaurantList',
    props: { restaurantInfo: {
        
    } },
    methods: {
        getImg: function(item: string) {
            return (require ('../assets/' + item + ''))
        }
    },
})
</script>

<style>

    p {
        margin: 0;
    }
    .card {
        transition: 1s;
    }

    .name-span {
        font-weight: 900;
    }
    .note-span {
        color: #2ee891;
    }

    .distance-span {
        color: #a8a8a8;
    }

    .img {
        max-width: 15em;
        max-height: 15em;
        min-width: 15em;
        min-height: 15em;
    }
</style>
