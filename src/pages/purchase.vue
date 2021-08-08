<template>
  <Layout>
    <div>
      <h1>ที่อยู่ในการจัดส่ง และการชำระเงิน</h1>
      <div v-if="this.$page.FoodPandee.foods" class="food_container" style="width : 100%; ">
        <h2>ชื่อ :</h2>
        <textarea v-model="message" placeholder="โปรดใส่ชื่อ" style="width : 340px ;"></textarea>
        <h2>นามสกุล :</h2>
        <textarea v-model="message" placeholder="โปรดใส่นามสกุล" style="width : 340px ;"></textarea>
        <br><br>
        </div>
         <div v-if="this.$page.FoodPandee.foods" class="food_container" style="width : 100%; ">
        <h2>ที่อยู่ :</h2>
        <textarea v-model="message" placeholder="โปรดใส่ที่อยู่" style="width : 640px ;height : 240px"></textarea>
        </div>
        <div v-if="this.$page.FoodPandee.foods" class="food_container" style="width : 100%; ">
        <h2>เบอร์โทรศัพท์ :</h2>
        <textarea v-model="message" placeholder="เช่น +66 หรือ 0xx" style="width : 240px ;"></textarea>
        </div>
        <div v-if="this.$page.FoodPandee.foods" class="food_container" style="width : 100%; ">
        <h2>อีเมล :</h2>
        <textarea v-model="message" placeholder="โปรดใส่อีเมล" style="width : 240px ;"></textarea>
        </div>
        <div v-if="this.$page.FoodPandee.foods" class="food_container" style="width : 100%;">
        <h2>รหัสบัตรเครดิต หรือ บัตรเดบิต (กรณีหักบัตร) :</h2>
        <textarea v-model="message" placeholder="" class="widearea"></textarea>
        <h2>CVC :</h2>
        <textarea v-model="message" placeholder="" class="widearea"></textarea>
        </div>
            <div v-if="this.$page.FoodPandee.foods" class="buttons-wrapper">
              <div class="purchase-wrapper">
        <button v-on:click="(finished())" class="confirm-order">Purchase</button></div>
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
          }
        },
      }
    },
    created(){
      this.foods = this.$page.FoodPandee.foods
    },
     methods:{
   finished(){
   this.$router.push('/finished/'); 
      }
  }
}

</script>
<page-query>
  query getFood($id: ID){
    FoodPandee{
      foods(where: {id: $id}){
        id,
        name,
        price,
        image{
          url
        }
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
  h2{
    color:white;
    font-family: "Jost", sans-serif;
    margin-left: 50px;
    margin-right : 20px ;
  }
  .food_container{
    display: flex;
    text-align: center;
    max-height: 500px;
    margin-bottom: 50px;
  }
  .wide-area {
    width: 100%;
  }
  
  .confirm-order {
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
    height: 50%;
       cursor: pointer;
  }
  .confirm-order:hover {
    background-color : rgba(203, 248, 174, 0.986) ;
  }
  .buttons-wrapper{
   width:100% ;
   height: 100px;
 
   align-items: center;
   justify-content: center;
  }
  .purchase-wrapper {
    width: 50%; 
    height: 100%;
    margin: 20px auto ;
  }
  
</style>
