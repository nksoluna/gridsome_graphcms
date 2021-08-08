<template>
  <Layout>
      <div>
          {{curry_food}} 
          {{noodle_food}} 
          {{onedish_food}}
      </div>
  </Layout>
</template>
<style lang="scss"scoped>
    div{
        color:white;
    }
</style>

<script>
import Cards from "~/components/Cards.vue";

export default {
   data() {
    return {
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