<template>
  <Layout>
    <div class="product-listing-wrapper">
      <h1 class="title">Our Food</h1>
      <p class="paragraph products-layout" >เมนูอาหารสุดพิเศษของพวกเรา สำหรับคนกลางคืนเช่นคุณ โปรดเลือกเมนูเพื่อดำเนินการต่อ!!</p>
       <div class="typeManu">
        <button class="typeButt" v-on:click="displayOnedish()">อาหารจารเดียว</button>
        <button class="typeButt" v-on:click="displayCurry()">ข้าวแกง</button>
        <button class="typeButt" v-on:click="displayNoodle()">ก๋วยเตี๋ยว</button>
      </div>
      <br />
      <ul v-if="oneDish">
        <li v-for="(food,index) in onedish_food" v-bind:key="food" class="food_li">
          <div v-if="index>=showfood_from && index<=showfood_to">
            <div @click="goTo(food.name)" class="food_containers">
                  <img :src="food.image[0].url" class="food_img" />
                  <p class="food_info">{{ food.name }} {{ food.price }}</p>
            </div>
          </div>
        </li>
      </ul>
      <ul v-if="curry">
        <li v-for="(food,index) in curry_food" v-bind:key="food" class="food_li">
          <div v-if="index>=showfood_from && index<=showfood_to">
            <div @click="goTo(food.name)" class="food_containers">
                  <img :src="food.image[0].url" class="food_img" />
                  <p class="food_info">{{ food.name }} {{ food.price }}</p>
            </div>
          </div>
        </li>
      </ul>
      <ul v-if="noodle">
        <li v-for="(food,index) in noodle_food" v-bind:key="food" class="food_li">
          <div v-if="index>=showfood_from && index<=showfood_to">
            <div @click="goTo(food.name)" class="food_containers">
                  <img :src="food.image[0].url" class="food_img" />
                  <p class="food_info">{{ food.name }} {{ food.price }}</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="button_container">
        <button class="previous_button" @click="showPrevious()">previous</button>
        <button class="next_button" @click="showNext()">next</button>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss"scoped>
@import "~/theme/_main.scss";

.button_container{
  width:100%;
  text-align: center;
  margin-bottom: 20px;
  display:flex;
  justify-content:space-between;
}
.previous_button{
  margin-left: 20px;
  width:80px;
  height:40px;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  border-radius: 1rem;
}
.previous_button:hover {
background-color : rgba(203, 248, 174, 0.986);
}
.next_button{
  margin-right: 20px;
  width:80px;
  height:40px;
  float: right;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  border-radius: 1rem;
}
.next_button:hover{
background-color : rgba(203, 248, 174, 0.986) ;
}
.typeManu {
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  height: 100px;

}
.typeButt {
  border-radius: 12px;
  transition-duration: 0.4s;
  width: 30%;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  margin : 20px auto ;
  font-size:1.25rem ;
}

.typeButt:hover {
  background-color: rgba(203, 248, 174, 0.986); /* Green */
  color: black;
  box-shadow: 0 0.75rem 1rem 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
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
    showPrevious:function(){
      if(this.showfood_from>0){
        this.showfood_from-=5;
        this.showfood_to-=5;
      }
      else{
        this.showfood_from = 0;
        this.showfood_to = 4;
      }
    },
    showNext: function(){
      if(this.showfood_to<this.showfood_total_length){
        this.showfood_from+=5;
        this.showfood_to+=5;
      }
      else{
        this.showfood_to = this.showfood_total_length;
        this.showfood_from = this.foods.length -5;
      }   
    },
    goTo: function(string){
      this.$router.push('/foods/'+string); 
    },
    resetIndex:function(total_length){
      this.showfood_from = 0;
      this.showfood_to = 4;
      this.showfood_total_length=total_length-1;
    },
    displayOnedish: function() {
      this.oneDish = true;
      this.curry = false;
      this.noodle = false;
      this.resetIndex(this.onedish_food.length);
    },
    displayCurry: function() {
      this.oneDish = false;
      this.curry = true;
      this.noodle = false;
      this.resetIndex(this.curry_food.length);
    },
    displayNoodle: function() {
      this.oneDish = false;
      this.curry = false;
      this.noodle = true;
      this.resetIndex(this.noodle_food.length);
    },
  },
   data() {
    return {
      showfood_from:0,
      showfood_to:4,
      showfood_total_length:0,
      oneDish: false,
      curry: false,
      noodle: false,
      curry_food:[{
        id:'',
        name:'',
        price:'',
        image:{
          url:''
        },
        categories:''
      }],
      noodle_food:[{
        id:'',
        name:'',
        price:'',
        image:{
          url:''
        },
        categories:''
      }],
      onedish_food:[{
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
    this.curry_food = this.$page.FoodPandee.curry,
    this.noodle_food = this.$page.FoodPandee.noodle,
    this.onedish_food = this.$page.FoodPandee.onedish
  }
};
</script>

<page-query>
  {
    FoodPandee {
        curry:foods(where:{categories:"ข้าวแกง"}) {
                id
                name
                price
                image{
                    url
                }
                categories
        }
        noodle:foods(where:{categories:"ก๋วยเตี๋ยว"}){
                id
                name
                price
                image{
                    url
                }
                categories
        }
        onedish:foods(where:{categories:"อาหารจานเดียว"}){
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