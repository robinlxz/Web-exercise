//not working

Vue.component('product-review', {
  template: `
    <form action="" class="review-form" @submit.prevent="collectReview">
      <p>
        <label for="name">Name</label>
        <input type="text" v-model="oneReview.testname" required>
      </p>
      <p>
        <label for="review">Review</label>
        <input type="text" v-model="oneReview.testreview" required>
      </p>
      <button >Submit</button>
    </form>
  `,
  data() {
    return {
      oneReview: {
        testname: null,
        testreview: null
      }
    }
  },
  methods: {
    collectReview() {
      if (this.oneReview.testname && this.oneReview.testreview) {
        console.log(this.oneReview);
        console.log(this.oneReview.testname);
        console.log(this.oneReview.testreview);
        console.log('oneReview');
        this.$emit('submit-review', this.oneReview);
      }
      else {console.log('not enough info')}
      this.oneReview.testname = null;
      this.oneReview.testreview = null;
    }
  }
})

Vue.component('product', {
  props: {
    userpremium: {
      required: true,
      type: Boolean
    }
  },
  template:`
    <div>
      <div class="product">
        <div class="product-image">
          <img :src="image" :alt="product">
        </div>
        <div class="product-info">
          <h2>{{ product }}</h2>
          <p v-if="inventory>20">In Stock</p>
          <p v-else-if="inventory>0">Almost sold out</p>
          <p v-else>Out of Stock</p>
          <ul>
            <li v-for="(property, index) in properties" :key="index">{{ property }}</li>
          </ul>
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.variantID"
            @mouseover="updateProduct(index)"
            class="color-box"
            :style="{backgroundColor: variant.variantColor}"
            >
            
          </div>        
        </div>      
      </div>
      <button 
        class="button" 
        @click="updateCart"
        :disabled="inventory==0"
        :class="{disabledButton: inventory==0}"
        >Add to Cart</button>

      <p>User is premium: {{userpremium}}</p>
    </div>
  `,
  data() {
    return {
      product: 'Water',
      // image: './assets/vmSocks-green-onWhite.jpg',
      // inStock: true,
      // inventory: 8,
      properties: ['Vue Mastery Full Course', 'Vue crash with local Vue and component file', 'AWS', 'Portfolio site on cloud'],
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
          variantInventory: 3
        }
      ],
      selectedVariant: 0,
      cart: 0
    }
  },
  methods: {
    updateCart() {
      // this.cart += 1;
      this.$emit('add-to-cart',this.variants[this.selectedVariant].variantID);
      this.variants[this.selectedVariant].variantInventory -= 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inventory() {
      return this.variants[this.selectedVariant].variantInventory
    }
  }
})


var app = new Vue ({
  el: '#app',
  data: {
    premium: true,
    cart: [],
    reviews: []
  },
  methods: {
    updateCart(item) {
      this.cart.push(item);
    },
    saveReview(submittedreview) {
      console.log(JSON.stringify(submittedreview));
      let new_obj = { ...submittedreview};
      this.reviews.push(new_obj);
    }
  }
})