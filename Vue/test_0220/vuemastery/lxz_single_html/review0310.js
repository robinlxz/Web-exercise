var eventBus = new Vue({

})

Vue.component('product-review', {
  template: `
  <div>
    <p>
      <ul>
        <li v-for="error in errors">{{error}}</li>
      </ul>
    </p>
    <form class="review-form" action="#" @submit.prevent="onSubmit">
      <p>
        <label for="name">Name</label>
        <input type="text" v-model="name">
      </p>
      <p>
        <label for="review">Review</label>
        <input type="text" v-model="review">
      </p>
      <p>
        <label for="rating">Rating</label>
        <input type="number" v-model.number="rating">
      </p>
      <p>
        <input type="submit" value="Submit">
      </p>
    </form>
  </div>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        this.errors = [];
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        };
        eventBus.$emit('submit-review', productReview)
        this.name = null;
        this.review = null;
        this.rating = null;
      }
      else {
        this.errors = [];
        if (!this.name) {this.errors.push('Name required.')}
        if (!this.review) {this.errors.push('Review required.')}
        if (!this.rating) {this.errors.push('Rating required.')}
      }
    }
  }
})

Vue.component('product-tab', {
  props: {
    productReviews: {
      type: Array,
      required: true
    }
  },
  template: `
  <div>
    <span 
      class="tab" 
      v-for="(tab, index) in tabs" 
      :key="index"
      :class="{activeTab: selectedTab===tab}"
      @click="updateTab(index)"
      >
      {{ tab }}
    </span>

    <div v-show="selectedTab === 'Reviews'">
      <p v-if="productReviews.length==0">There is no review yet</p>
      <ul v-for="review in productReviews">
        <li>Rating: {{review.rating}}</li>
        <li>Review: {{review.review}}</li>
      </ul>
    </div>

    <product-review       
      v-show="selectedTab === 'Write a Review'"
    ></product-review>
  </div>
  `,
  data() {
    return {
      tabs: ['Reviews', 'Write a Review'],
      selectedTab: 'Reviews'
    }
  },
  methods: {
    updateTab(index) {
      this.selectedTab = this.tabs[index]
    }
  }
})

Vue.component('product-detail', {
  props: {
    details: {
      required: true,
      type: Array
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{detail}}</li>
    </ul>
  `
})

Vue.component('product', {
  props: {
    premium: {
      required: true,
      type: Boolean
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image" alt="">
      </div>
      <div class="product-info">
        <h2>{{ title }}</h2>
        <p v-if="inventory > 20">In Stock</p>
        <p v-else-if="inventory > 0">Almost Sold Out</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{shipping}}</p>
        <product-detail v-bind:details="properties"></product-detail>
        <div v-for="(variant, index) in variants" :key="variant.variantID"
            class="color-box" 
              :style="{backgroundColor:variant.variantColor}"
              v-on:mouseover="updateProduct(index)"
              >
        </div>

        <button 
        v-on:click="addToCart"
        v-bind:class="{disabledButton: !inStock}"
        :disabled="!inStock"
        >Add to Cart</button>
        <p>User is Premium: {{premium}}</p>
      </div>

      <product-tab :productReviews="productReviews"></product-tab>

    </div>
  `,
  data() {
    return {
      brand: "Kant",
      product: 'Fire',
      properties: ['core needs','edge-case','Dev long term benifit'],
      variants: [
        {
          variantID: 1234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green-onWhite.jpg',
          variantInventory: 100
        },
        {
          variantID: 1235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue-onWhite.jpg',
          variantInventory: 5
        }
      ],
      selectedVariant: 0,
      productReviews: []
    }
  },
  methods: {
    addToCart: function() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantID);
      this.variants[this.selectedVariant].variantInventory -= 1;
    },
    updateProduct(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inventory() {
      return this.variants[this.selectedVariant].variantInventory
    },
    inStock() {
      if (this.variants[this.selectedVariant].variantInventory>0) {return true}
      else {return false}
    },
    shipping() {
      if (this.premium) {return 'Free'}
      else {return '2.99'}
    }
  },
  mounted() {
    eventBus.$on('submit-review', submittedReview => {
      this.productReviews.push(submittedReview);
    })
  }
})



var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      // this.cart += 1;
      this.cart.push(id);
    },
    removeFromCart(id) {
      let tmp = this.cart.filter((item)=>{return item!=id})
      this.cart = tmp
    }
  }
})