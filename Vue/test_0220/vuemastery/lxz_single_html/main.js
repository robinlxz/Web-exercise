Vue.component ('product', {
  template: `
  <div class="product">
    <div class="product-image">
      <img v-bind:src="image">
    </div>
    <div class="product-info">
      <h1>{{title}}</h1>
      <h3>Here are some products: {{product}}</h3>
      <a v-bind:href="link">a link</a>
      <p v-show="onSale">On Sale!</p>
      <ul>
        <li v-for="item in details">{{item}}</li>
      </ul>
      <div v-for="(vari, index) in variants" 
          v-bind:key="vari.variantId"
          class = "color-box"
          v-bind:style="{backgroundColor: vari.variantColor }"
          v-on:mouseOver="updateProduct(index)"
          >
      </div>
      <button v-on:click="addToCart"       
              v-bind:class="{disabledButton: !inStock}"
              v-bind:disabled=!inStock>Add to Cart</button>
      <button v-on:click="removeFromCart" v-if="cart > 0">Remove from Cart</button>
      <div class="cart">
        <p>Cart: ({{cart}})</p>
      </div>
    </div>
  </div>  
  `,
  data() {
    return{
    brand: 'Qing Luan',
    product: 'Swords',
    selectedVariant: 0,
    link: '####',
    inventory: 10,
    onSale: true,
    details: ["80% cotton", "20% polyester"],
    variants: [
      {
        variantId: 1234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green-onWhite.jpg',
        variantQuantity: 10
      },
      {
        variantId: 1235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0
    }
  },
  methods: {
    addToCart: function() {
      this.cart += 1
    },
    removeFromCart: function() {
      this.cart -= 1
    },
    updateProduct: function(index) {
      console.log(index)
      this.selectedVariant = index
    }
  },
  computed: {
    title: function() {
      return this.brand + ' ' + this.product
    },
    image: function() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock: function() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    brand: 'Qing Luan',
    product: 'Swords',
    selectedVariant: 0,
    link: '####',
    inventory: 10,
    onSale: true,
    details: ["80% cotton", "20% polyester"],
    variants: [
      {
        variantId: 1234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green-onWhite.jpg',
        variantQuantity: 10
      },
      {
        variantId: 1235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1
    },
    removeFromCart: function() {
      this.cart -= 1
    },
    updateProduct: function(index) {
      console.log(index)
      this.selectedVariant = index
    }
  },
  computed: {
    title: function() {
      return this.brand + ' ' + this.product
    },
    image: function() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock: function() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})