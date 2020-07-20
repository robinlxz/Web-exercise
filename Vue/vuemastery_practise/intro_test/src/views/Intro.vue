<template>
  <div>
    <h1 class="lxz-info">This is Intro course review 0414</h1>
    <div class="product">
      <div class="product-image">
        <!-- <img src="../assets/vmSocks-blue-onWhite.jpg" alt="Blue Socks"> -->
        <img :src="image" alt="Blue Socks" />
      </div>
      <div class="product-info">
        <h1>{{ productName }}</h1>
        <h2 v-show="inventory <= 0">Out of stock</h2>
        <div id="detail-block">
          <ul>
            <li v-for="detail in details" :key="details.indexOf(detail)">
              {{ detail }}
            </li>
          </ul>
          <div
            class="color-box"
            v-for="(variant, index) in variants" 
            :key="variant.variantID"
            @mouseover="updateSelectedVariant(index)"
            :style="{backgroundColor: variant.variantColor}"
          ></div>
        </div>

        <button 
          @click="addToCart" 
          :disabled="inventory <= 0"
          :class="{disabledButton: inventory<=0}"
        >Add to Cart</button>

        <div class="cart">
          <p>In cart: {{ cart }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Intro",
    data() {
      return {
        brand: 'SS',
        // image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        // image: '../assets/vmSocks-blue-onWhite.jpg',
        inventory: 10,
        details: ['IntelliSense', 'flex align-item', 'manage projects'],
        variants: [
          {
            variantID: 11,
            variantColor: 'green',
            variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
          },
          {
            variantID: 12,
            variantColor: 'blue',
            variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
          }
        ],
        cart: 0,
        selectedVariant: 0,
      }
    },
    computed: {
      productName() {
        return this.brand + '_Socks'
      },
      image() {
        return this.variants[this.selectedVariant].variantImage
      }
    },
    methods: {
      addToCart() {
        this.cart += 1;
        this.inventory -= 1;
      },
      updateSelectedVariant(index) {
        // console.log(index);
        this.selectedVariant = index;
      }
    }
  }
</script>

<style scoped>
  body {
    font-family: tahoma;
    color: #282828;
    margin: 0px;
    text-align: left;
  }

  .nav-bar {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    height: 60px;
    margin-bottom: 15px;
  }

  .product {
    display: flex;
  }

  img {
    border: 1px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }

  .product-image {
    flex-basis: 700px;
  }

  .product-info {
    margin-top: 10px;
    flex-basis: 500px;
    /* below is from lxz */
    text-align: left;
  }

  .color-box {
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }

  .cart {
    margin-right: 25px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 5px 20px;
  }

  button {
    margin-top: 30px;
    border: none;
    background-color: #1E95EA;
    color: white;
    height: 40px;
    width: 100px;
    font-size: 14px;
  } 

  .disabledButton {
    background-color: #d8d8d8;
  }

  .review-form {
    width: 30%;
    padding: 20px;
    border: 1px solid #d8d8d8;  
  }

  input {
    width: 100%;  
    height: 25px;
    margin-bottom: 20px;
  }

  textarea {
    width: 100%;
    height: 60px;
  }

  .lxz-info {
    border-style: dotted;
    margin:auto;
    width: 60%;
  }

  #detail-block{
    text-align: left;
    /* margin-left: 40%; */
  }

</style>