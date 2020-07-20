<template>
  <div>
    <div class="product">
      <div class="product-image">
        <img src="../assets/logo.png" alt="Socks"/>
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <ul>
          <li 
            v-for="(point,index) in points" 
            :key="index"
            @mouseover="updateSelectedPoint(index)"
          >{{ point }}</li>
        </ul>
        <h2 class="current-point">{{ currentPoint }}</h2>
        <p>{{ vhtmlInfo }}</p>
        <p v-html="vhtmlInfo"></p>
        <button @click="addToCart">Add to Cart</button>
        <div class="cart">
          Cart: {{ cart }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        product: 'Socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        inStock: true,
        points: [
          'typo is one of the bugs, keep that in mind',
          'align-item vs justify-content',
          'pain + reflection = progress'
        ],
        selectedPoint: 0,
        cart: 0,
        vhtmlInfo: '<h1 style="color: red">v-html info</h1>',
      }
    },
    computed: {
      currentPoint() {
        return this.points[this.selectedPoint];
      }
    },
    methods: {
      updateSelectedPoint(index) {
        this.selectedPoint = index;
      },
      addToCart() {
        this.cart += 1;
      }
    }
  }
</script>

<style scoped>
  body {
    font:bold;
  }
  .product {
    display: flex;
  }
  .product-image {
    flex-basis: 700px;
    /* width: 10rem; */
  }
  .product-info {
    flex-basis: 500px;
    text-align: left;
    /* width: 10rem; */
  }
  .test-container {
    border-style: solid;
    height: 20rem;
    flex-direction: column;
    justify-content: center;
  }
  .test-child {
    border-style: dashed;
    /* height: 5rem; */
    /* width: 5rem; */
    flex-basis: 5rem;
  }
  .current-point {
    color: tomato;
  }
  .cart {
    float: right;
    border-style: dashed;
    margin: 25px;
    padding: 5px;
  }
  button {
    background-color: #33e;
    color: white;
    padding: 5px;
    border-style: solid;
    border-width: 3px;
    border-color: black;
  }
</style>