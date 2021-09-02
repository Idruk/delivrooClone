<template>
    <div>
        <transition-group name="list" tag='div'>
            <div class="restaurant-card-list" v-for="restaurant in orderedRestaurants" :key="restaurant.id">
                <RestaurantCard :restaurantInfo="restaurant" />
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">
import Restaurant from '@/types/restaurants';
import Order from '@/types/order'
import Vue from 'vue';
import {PropType} from 'vue'
import RestaurantCard from "./restaurantCard.vue"

export default Vue.extend({
    name: 'RestaurantList',
    components: { RestaurantCard },
    props: {
        restaurants: {required: true, type: Array as PropType<Restaurant[]>},
        order: {required: true, type: Object as PropType<Order>},
    },
    methods: {
    },
    computed: {
        orderedRestaurants: function () {
            let sortOrder: any = this.order
            
            return [...this.$props.restaurants].sort((a: Restaurant, b: Restaurant) => {
                if (sortOrder.sort === 'Name')
                    return a.name > b.name ? 1 : -1
                if (sortOrder.sort === 'Note')
                    return a.note < b.note ? 1 : -1
                if (sortOrder.sort === 'Distance')
                    return a.distance > b.distance ? 1: -1
                return 1
            })
        }
    }
})
</script>

<style>
    .restaurant-card-list {
        float: left;
        margin: 1em;
    }

    .list-move {
        transition: all 1s;
    }
</style>
