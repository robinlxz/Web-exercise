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