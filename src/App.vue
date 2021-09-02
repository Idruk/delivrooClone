<template>
  <div id="app">
    <div class="title">
      <p>deliveroo</p>
      <div class="search-div">
        <input class="search" type="text" placeholder="plats, restaurants ou types de cuisine">
      </div>
      
    </div>
    <!--  -->

    <div class="site-body">
      <div class="side-bar">
        <div class="sticky-side-bar">
        <form >
          <div class="radio">
            <input type="radio" id="yes" value='false' v-model="deliver">
            <label>Livraison</label>
          </div>
          <div class="radio">
            <input type="radio" id="a" value='true' v-model="deliver">
            <label>À emporter </label>
          </div>
        </form>
        <!--  -->


        <div class="sort-button">
          <div class="button-check" v-on:click="radioHidden">Trier <img v-bind:class='isHidden ? "small-arrow" : "small-arrow-rotated"' src="./assets/arrow.png" /></div>
          <div v-bind:class='isHidden ? "dropdown-container-hidden" : "dropdown-container"'>
            <form class="sort-items">
              <div class="radio-button" v-for="sorter in sorters" :key="sorter.id">
                <input type="radio" :id="sorter.id" :value="sorter.value" v-model="order.sort" >
                <label>{{ sorter.value }}</label>
              </div>
            </form>
          </div>
        </div>
        <!--  -->

        <div class="regime-button">
          <div class="button-check" v-on:click="regimeHidden" >Régime alimentaires <img v-bind:class='regimeIsHidden ? "small-arrow" : "small-arrow-rotated"'  src="./assets/arrow.png" /></div>
          <div v-bind:class='regimeIsHidden ? "regime-dropdown-container-hidden" : "regime-dropdown-container"'>
            <form class="regime-items">
              <div class="radio-button" v-for="regime in order.regimes" :key="regime.id">
                <input type="checkbox" v-model="regime.checked">
                <label>{{ regime.type }}</label>
              </div>
            </form>
          </div>
        </div>

        </div>
      </div>
      <RestaurantList :order="order" :restaurants="staticData" />
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import RestaurantList from "./components/restaurantList.vue"

export default Vue.extend({
  name: 'App',
  props: {},
  components: { RestaurantList },
  methods: {
    radioHidden: function () {
      if (this.isHidden == false)
        this.isHidden = true
      else
        this.isHidden = false
    },
    regimeHidden: function () {
      if (this.regimeIsHidden == false)
        this.regimeIsHidden = true
      else
        this.regimeIsHidden = false
    },
  },
  data() {
    return ( {
      staticData: [
        {id:"1", name: "McSaladeDonald", distance: 2000, regime: "hallal", note: 5.0, imgUrl: 'salade.png', imgAlt: "bourgir"},
        {id:"2", name: "aMcDonald", distance: 22000, regime: "hallal", note: 5.0, imgUrl: 'Hamburger.png', imgAlt: "bourgir"},
        {id:"3", name: "MacSoupDonald", distance: 2000, regime: "hallal", note: 5.0, imgUrl: 'soup.png', imgAlt: "bourgir"},
        {id:"4", name: "McDonald", distance: 32000, regime: "hallal", note: 4.0, imgUrl: 'salade.png', imgAlt: "bourgir"},
        {id:"5", name: "McDonald", distance: 2000, regime: "hallal", note: 4.0, imgUrl: 'Hamburger.png', imgAlt: "bourgir"},
        {id:"6", name: "McDonald", distance: 100, regime: "hallal", note: 4.1, imgUrl: 'soup.png', imgAlt: "bourgir"},
        {id:"7", name: "McDonald", distance: 200, regime: "hallal", note: 5.0, imgUrl: 'salade.png', imgAlt: "bourgir"},
        {id:"8", name: "McDonald", distance: 400, regime: "hallal", note: 1.0, imgUrl: 'Hamburger.png', imgAlt: "bourgir"},
        {id:"9", name: "McDonald", distance: 2000, regime: "hallal", note: 2.0, imgUrl: 'soup.png', imgAlt: "bourgir"},
        {id:"10", name: "McDonald", distance: 2000, regime: "hallal", note: 5.0, imgUrl: 'Hamburger.png', imgAlt: "bourgir"},
        {id:"11", name: "McDonald", distance: 2000, regime: "hallal", note: 4.0, imgUrl: 'Hamburger.png', imgAlt: "bourgir"},
        {id:"12", name: "McDonald", distance: 2000, regime: "hallal", note: 3.0, imgUrl: 'soup.png', imgAlt: "bourgir"},
        {id:"13", name: "McDonald", distance: 800, regime: "hallal", note: 1.0, imgUrl: 'Hamburger.png', imgAlt: "bourgir"},
        {id:"14", name: "dMcDonald", distance: 2000, regime: "hallal", note: 5.0, imgUrl: 'salade.png', imgAlt: "bourgir"},
        {id:"16", name: "McDonald", distance: 2000, regime: "hallal", note: 3.3, imgUrl: 'soup.png', imgAlt: "bourgir"},
        {id:"17", name: "McDonald", distance: 2000, regime: "hallal", note: 4.0, imgUrl: 'Hamburger.png', imgAlt: "bourgir"},
        {id:"18", name: "McDonald", distance: 9000, regime: "hallal", note: 5.0, imgUrl: 'soup.pngg', imgAlt: "bourgir"},
        {id:"19", name: "McDonald", distance: 2000, regime: "hallal", note: 4.0, imgUrl: 'Hamburger.png', imgAlt: "bourgir"},
        {id:"20", name: "McDonald", distance: 2000, regime: "hallal", note: 3.0, imgUrl: 'soup.png', imgAlt: "bourgir"},
        {id:"21", name: "McDonald", distance: 15000, regime: "hallal", note: 3.0, imgUrl: 'Hamburger.png', imgAlt: "bourgir"},
        {id:"22", name: "McDonald", distance: 2000, regime: "hallal", note: 1.0, imgUrl: 'soup.png', imgAlt: "bourgir"},
        {id:"23", name: "McDonald", distance: 2100, regime: "hallal", note: 3.0, imgUrl: 'Hamburger.png', imgAlt: "bourgir"}],

      deliver: false,
      isHidden: true,
      regimeIsHidden: true,
      sorters: [{id: 1, value:"Distance"},
                {id: 2, value: "Note"},
                {id: 3, value: "Recommandations"},
                {id: 4, value: "Name"}
      ],
      order: {
        sort: "Distance",
        regimes: [{id: 1, type: "bio", checked: false},
                {id: 2, type: "casher", checked: false},
                {id: 3, type: "halal", checked: false},
                {id: 4, type: "vegan", checked: false},
                {id: 5, type: "sans gluten", checked: false},
                {id: 6, type: "vegetarien", checked: false},],
      },
    })
  },

  
});
</script>

<style>

  .site-body {
    display: flex;
  }

  .title {
    display: flex;
    border-bottom: 1px solid grey;
    width: 100%;

  }

  .search {
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid #e8ebeb;
    border-radius: 4px;
    opacity: 1;
    height: 46px;
    width: 600px;
    color: #777f7f;
    background-color: #eaeaea;
  }

  .search-div {
    padding-left: 30%;
    margin-bottom: 5px;
  }

  .button-check {
    font-weight: bold;
  }
  .side-bar {
    width: 15%;
    min-width: 250px;
    margin-left: 1em;
  }

  .sticky-side-bar {
    top: 3em;
    position: sticky;
  }

  .radio-button {
    padding-bottom: 2em;
  }

  .radio {
    font-size: 14px;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .sort-button {
    cursor: pointer;
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 2px solid #969696;
    border-top: 2px solid #969696;
    font-size: 14px;
  }

  .dropdown-container {
    display: block;
  }
  .dropdown-container-hidden {
    display: none;
  }

  .sort-items {
    padding: 1em;
  }

  .regime-dropdown-container {
    display: block;
  }
  .regime-dropdown-container-hidden {
    display: none;
  }

  .regime-button {
    cursor: pointer;
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 2px solid #969696;
    font-size: 14px;
  }

  .regime-items {
      padding: 1em;
  }

  .small-arrow {
    width: 1em;
    height: 1em;
    float: right;
  }

  .small-arrow {
    width: 1em;
    height: 1em;
    float: right;
    transition: 0.5s;
  }

  .small-arrow-rotated {
    width: 1em;
    height: 1em;
    float: right;
    transform: rotate(180deg);
    transition: 0.5s;
  }

  ul li
  {
      list-style-type: none;
  }

</style>
