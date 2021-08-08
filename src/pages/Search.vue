<template>
  <Layout>
    <div class="product-listing-wrapper">
      <h1 class="title">Our Food</h1>
      <div class="categories_container">
        <label for="foods" class="paragraph products-layout">Choose a title to search:</label>
            <select name="foods" v-model="select" class="select_box">
                <option value="name">Name</option>
                <option value="price">Price</option>
            </select>
      </div>
      <ul>
      <div v-if="select=='name'" class="input_container">
        <input class="input_name" v-model="text" placeholder="Enter">
        <button class="summit" @click="getInputName()">submit</button>
      </div>
      <div v-if="select=='price'" class="input_container">
        <input class="input_price" v-model="text2" placeholder="Enter">
        -
        <input class="input_price" v-model="text3" placeholder="Enter">
        <button class="summit" @click="getInputPrice()">submit</button>
      </div>
      
      <li v-for="foods in foods" :key="foods.name" class="food_li">
        <div v-if="select=='name'">
          <div v-if="foods.name==input">
            <div @click="goTo(foods.name)" class="food_containers">
              <img :src= foods.image[0].url class="food_img">
              <p class="food_info">{{foods.name}} {{ foods.price }}</p>
            </div>
          </div>
        </div>
        <div v-if="select=='price'">
          <div v-if="foods.price>=input_price_min && foods.price<=input_price_max">
            <div @click="goTo(foods.name)" class="food_containers">
              <img :src= foods.image[0].url class="food_img">
              <p class="food_info">{{foods.name}} {{ foods.price }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    </div>
  </Layout>
</template>
<style lang="scss"scoped>
@import "~/theme/_main.scss";
.input_container{
  margin-bottom: 25px;
}
.input_price{
  width: 200px;
  height: 30px;
  margin-left: 15px;
  margin-right: 15px;
}
.select_box{
  height: 23px;
  align-items: center;
  margin-left: 20px;
}
.input_name{
    width: 500px;
    height: 30px;
    margin-bottom: 15px;
}
.summit{
  margin-left: 10px;
  padding-left:15px;
  padding-right:15px;
  font-size: 17px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  height:30px;
}

.summit:hover {background-color: #3e8e41}

.summit:active {
  background-color: #3e8e41;
  transform: translateY(4px);
}
.food_li{
  list-style:none;
  display:block;
  margin-bottom: 30px;
}
.food_containers{
  width: inherit;
  display: flex;
  float:left;
}
.food_info{
  color:white;
   font-family: "Jost", sans-serif;
    font-weight: 600;
    margin-left: 40px;
    text-align: center;
    align-items: center;
    margin-top: 20%;
}
.food_img{
  width: 100%;
  max-width:350px;
  margin-bottom: 50px;
  cursor: pointer;
}
.test{
  color:white;
}
.cards-wrapper {
  width: 67%;
}

.products-layout.paragraph {
  margin: 29px auto 42px;
  width: 60%;
  text-align: center;
}

.product-listing-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color:white;
}

@media only screen and (max-width: 768px) {
  .cards-wrapper {
    width: 50%;
  }
  .products-layout.paragraph {
    width: 80%;
  }
}
</style>
<script>
import Cards from "~/components/Cards.vue";

export default {
  components: {
    Cards
  },
  metaInfo: {
    title: "Products"
  },methods: {
    getInputPrice:function(){
      this.input_price_max=this.text3;
      this.input_price_min=this.text2;
    },
     getInputName:function(){
      this.input = this.text;
    },
    goTo: function(string){
      this.$router.push('/foods/'+string); 
    },
  },
   data() {
    return {
      input_price_min:0,
      input_price_max:0,
      select:'name',
      text: '',
      text2: '',
      text3: '',
      input: '',
      foods:[{
        id:'',
        name:'',
        price:'',
        image:{
          url:''
        },
        categories:''
      }]
    }
  },created(){
    this.foods = this.$page.FoodPandee.foods
  }
};
</script>
<page-query>
  {
    FoodPandee {
      foods {
        id
        name
        price
        image{
          url
        }
        categories
      }
    }
  }
</page-query>