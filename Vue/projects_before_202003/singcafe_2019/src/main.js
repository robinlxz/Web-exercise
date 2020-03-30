// import VuePictureSwipe from 'vue-picture-swipe';
// Vue.component('vue-picture-swipe', VuePictureSwipe);

// import Lightbox from 'vue-my-photos'
// Vue.component('lightbox', Lightbox);
// Vue.use(Lightbox);

// import App from "./App.vue"

Vue.component('Dish',{
  template: `
  <div class="product">
  <div class="product-image">
      <img v-bind:src="image" />
      <p v-show="soldOut" >Sold Out!</p>
  </div>
  <div class="product-info">
      <h1>{{ title }}</h1>
      <p>Description: {{description}}</p>
      <!-- <a v-bind:href="course_link">Course link</a> -->

      <p>Ingredients:</p>
      <ul>
          <li v-for="ingredient in ingredients.ricePork">{{ingredient}}</li>
      </ul>
      <div v-for="(variant, index) in variants" 
          v-bind:key="variant.variantId"
          class="color-box"
          v-bind:style="{ backgroundColor: variant.variantColor}"
      >
          <p v-on:mouseover="updateProduct(index)">{{ variant.variantItem }}</p>
      </div>

      <button v-on:click="addToCart"
          v-bind:disabled="soldOut"
          v-bind:class="{ disabledButton: soldOut}"
      >Add to Cart</button>
      <button @click="clearCart"
          :disabled="soldOut"
          :class="{ disabledButton: soldOut}"
      >Clear Cart</button>
  </div> 
  <span><input type="checkbox" style="float: left" @change="markSoldOut">Mark Sold Out</span>
</div>
  `,
  data(){
    return {
      product: 'SingCafe Cusine',
      description: 'By Chef Mao~',
      // soldOut: false,
      // image: "https://i.ibb.co/yQgf4KB/food1.jpg",
      selectedVariant: 0,
      imageDescription: "No.1",
      variants: [
        {
          variantId: 101,
          variantItem: 'Original',
          // variantImage: "https://i.ibb.co/80jRZ65/Rice.png",
          variantImage:"https://i.ibb.co/yQgf4KB/food1.jpg",
          variantColor: "#AAA",
          variantQuantity: 10
        },
        {
          variantId: 102,
          variantItem: '+Vegtable',
          variantImage: "https://i.ibb.co/ys4QcGd/Rice-veg.png",
          variantColor: "#0F0",
          variantQuantity: 10
        },
        {
          variantId: 103,
          variantItem: '+Egg',
          variantImage: "https://i.ibb.co/xJynG7Y/Rice-egg.png",
          variantColor: "#FF0",
          variantQuantity: 0
        },
        {
          variantId: 104,
          variantItem: '+Egg&Vegtable',
          variantImage: "https://i.ibb.co/LrccwVy/Rice-egg-veg.png",
          variantColor: "#CF0",
          variantQuantity: 0
        }
      ],
      image_all: [ //need to update, select all picture link in imageBB
        "https://ibb.co/HFvmy1q",
        "https://ibb.co/YLfR0JT",
        "https://ibb.co/QQ73Q66",
        "https://ibb.co/R780Y5S",
        "https://ibb.co/DMKGSSx"
      ],
      ricePorkImages: [
        "https://i.ibb.co/80jRZ65/Rice.png",
        "https://i.ibb.co/ys4QcGd/Rice-veg.png",
        "https://i.ibb.co/xJynG7Y/Rice-egg.png",
        "https://i.ibb.co/LrccwVy/Rice-egg-veg.png"
      ],
      course_link: "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
      ingredients:{
        seaFoodDish:["seafood","vegetable","carrot"],
        ricePork:["pork","rice"]
      }
  }
  },
  methods: {
    addToCart: function() {
      // this.cart += 1;
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId)
    },
    clearCart: function() {
      this.$emit("clear-cart");
    },
    updateProduct: function(index) {
      // this.image = variantImage;
      this.selectedVariant = index;
      // console.log(index);
    },
    markSoldOut: function() {
      this.soldOut = !this.soldOut;
    }
  },
  computed: {
    title() {
      return this.product + ' ' + this.imageDescription;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    soldOut() {
      return this.variants[this.selectedVariant].variantQuantity===0;
    }
  }
})

var app2 = new Vue({
  el: '#app',
  data: {
    cart: []
  },
  methods: {
    updateCart(item){
      this.cart.push(item);
    },
    clearCart() {
      this.cart = [];
    }
  }
})

// var lxzapp = new Vue({
//   el: '#lxzapp',
//   render: h => h(App)
// }).$mount('#lxzapp')