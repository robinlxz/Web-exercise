<template>
  <div>
    <NavBar />

    <div class="product">
      <div class="product-image">
        <img :src="image" :alt="'image from v-bind'">
        <img src="@/assets/singcafe/food1.jpg" alt="">
      </div>
      
      <div class="product-info">
        <h1>{{foods[0].name}}</h1>
        <p v-if="foods[0].inventory>10">In Stock</p>
        <p v-else-if="foods[0].inventory>0">Almost sold out</p>
        <p v-else>Out of Stock</p>
        <div class="ingredients">
          <ul>
            <li v-for="(ingredient, index) in foods[0].ingredients" :key=index>{{ingredient}}</li>
          </ul>
        </div>
        <div v-for="food in foods" :key="food.id">
          {{food.color}}
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import NavBar from '../components/SingCafe/NavBar'
  export default {
    name: 'SingCafe',
    components: {
      NavBar
    },
    data() {
      return {
        foods: [
          {
            id: 1,
            name: 'Freash Seafood',
            image: '@/assets/singcafe/food1.jpg',
            price: 8,
            inventory: 11,
            onSale: false,
            ingredients: [
              'Seafood',
              'Garlic'
            ],
            color: 'green'
          },
          {
            id: 2,
            name: 'BBQ Fish',
            image: '@/assets/singcafe/food2.jpg',
            price: 6,
            inventory: 8,
            onSale: true,
            ingredients: [
              'Fish',
              'Broccoli'
            ],
            color: 'blue'
          }
        ],
        image: '@/assets/singcafe/food2.jpg'
      }
    }
  }
</script>

<style scoped>
  body {
    font-family: tahoma;
    color:#282828;
    margin: 0px;
  }

  .product {
    display: flex;
    flex-flow: wrap;
    padding: 1rem;
  }

  img {
    border: 1px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }

  .product-image {
    width: 80%;
  }

  .product-image,
  .product-info {
    margin-top: 10px;
    width: 50%;
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
    width: 400px;
    padding: 20px;
    margin: 40px;
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

  .tab {
    margin-left: 20px;
    cursor: pointer;
  }

  .activeTab {
    color: #16C0B0;
    text-decoration: underline;
  }

  .lineThrough {
    text-decoration: line-through;
  }
  .ingredients {
    width: 20%;
    /* text-align: center; */
    text-align: right;
    padding-left: 2em;
    list-style-position: inside;
  }
</style>