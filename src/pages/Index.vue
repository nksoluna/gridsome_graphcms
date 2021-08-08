<template>
  <Layout>
      <div class="bubble">
      <h1 class="title bubble-title-layout">FOODPANDIE</h1>
      <h2 class="subtitle">FOOD DELIVERY FOR YOUR BORING NIGHTIMES</h2>
    </div>
    <div class="row">
      <div class="featured-product-layout">
        <div class="featured-product-wrapper">
          <g-image
            class="featured-product-image-layout"
            src="~/assets/foodpandieicon.png"
          />
        </div>
      </div>
      <g-link class="index-layout cta-button-theme" to="/products/">Our food for you</g-link>
      <!--
      <input class="input" v-model="text" placeholder="edit me"></input>
      <button @click="getInput()">submit</button>
      <h class="text">input is: ' {{input}} '</h>
      -->
    </div>
    
  </Layout>
</template>


<script>
export default {
  methods:{
    getInput(){
      this.input = this.text;
    }
  },
  data() {
    return {
      tmp: [''],
      input: '',
      text: '',
    }
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

<style lang="scss" scoped>
@import "~/theme/_main.scss";
.text{
  color:white;
  padding-top: 25px;
  font-size: 25px;
}
.input{
  align-items: center;
  height: 25px;
  width: 500px;
}

.bubble {
  border: 1px solid $custom-white;
  border-radius: 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: 242px;
  margin: 32px auto 72px auto;
  width: 75%;
}

.bubble::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 66px solid $custom-white;
  border-right: 66px solid transparent;
  margin-right: 500px;
  margin-top: 49px;
}

.bubble-title-layout {
  margin-top: 28px;
}

.cta-button-theme.index-layout {
  @include flex-align-and-justify-center;
  font-size: 34px;
  margin-bottom: 40px;
  height: 73px;
  width: 331px;
}

.featured-product-image-layout {
  margin-left: 172px;
  height: auto;
  width: 100%;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.featured-product-layout {
  display: block;
  flex: 1;

}

.featured-product-wrapper {
  width: 178px;
  height: 221px;

}

.row::after {
  content: "";
  flex: 1;
}

@media only screen and (max-width: 989px) {
  .bubble {
    border: 0;
    height: 140px;
    margin: 32px auto 58px auto;
    width: 90%;
  }

  .bubble::after {
    content: "";
    border-top: 0;
    border-right: 0;
  }

  .cta-button-theme.index-layout {
    font-size: 24px;
    margin-bottom: 32px;
    height: 56px;
    width: 220px;
  }

  .featured-product-image-layout {
    margin-bottom: 15%;
    margin-left: 0;
    width: 162px;
  }

  .row {
    display: flex;
    flex-direction: column;
  }
}
</style>