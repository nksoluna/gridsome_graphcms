<template>
  <Layout>
    <div>
      <h1>Food Info</h1>
      <div v-if="this.$page.FoodPandee.foods" class="food_container">
        <img :src= foods[0].image[0].url class="food_img">
        <div class="food_description_container">
          <p class="food_title" v-html="foods[0].name" />
          <p class="food_description">จานละ {{foods[0].price}} บาท</p>
          <div class="button-wrapper"><button v-on:click="testfunction()" class="button-add-to-buy">Order</button></div>
          
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
    data(){
      return{
        foods: {
          id:'',
          name:'',
          price:'',
          image:{
            url:''
          },
          categories:'',
        },
      }
    },
    created(){
      this.foods = this.$page.FoodPandee.foods
    },
    methods:{
   testfunction(){
   this.$router.push('/purchase/'); 
      }
  }
}
</script>
<page-query>
  query getFood($name: String){
    FoodPandee{
      foods(where: {name: $name}){
        id,
        name,
        price,
        image{
          url
        },
        categories
      }
    }
  }
</page-query>

<style>
  h1{
    color:white;
    font-family: "Jost", sans-serif;
    margin-bottom: 50px;
  }
  .food_container{
    display: flex;
    text-align: center;
    max-height: 500px;
  }
  .food_img{
    width: 60%;
    max-width: 600px;
  }
  .food_description_container{
    margin-left: 10%;
    text-align: left;
    height: inherit;
    border : 1px solid white ;
    width  : 50% ;
    border-radius: 20px;
  }
  .food_description{
    color: white;
    font-size: 25px;
    text-align: center ;
    margin-bottom: 40px;
  }
  .food_title {
    color : white ;
    color: white;
    font-size: 25px;
    text-align: center ;
    margin : 40px 0px 40px 0px ;
  }
  .button-wrapper {
    width : 50% ;
  height: 100%;
  margin:20px auto ;
  }
  .button-add-to-buy {
    background-color: whitesmoke;
    border: 1px solid #e4eaff;
    border-radius: 25px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    color: #090b10;
    font-family: "Jost", sans-serif;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100% ;
    height: 20%;
    cursor: pointer;
   position: relative;

  }
  .button-add-to-buy:hover {
   background-color : rgba(203, 248, 174, 0.986) ;
  } 
  
</style>
