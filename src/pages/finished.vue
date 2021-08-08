<template>
  <Layout>
      <div class="bubble">
      <h1 class="title bubble-title-layout">Thank You</h1>
      <h2 class="subtitle">ออเดอร์ของคุณ จะมาถึงในอีกไม่ช้า</h2>
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
      <g-link class="index-layout cta-button-theme" to="/products/">คลิกเพื่อสั่งเมนูอื่น</g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Homepage",
  },data() {
    return {
      foods:[{
        id:'',
        name:'',
        price:'',
        image:{
          url:''
        }
      }]
    }
  },created(){
    this.foods = this.$page.FoodPandee.foods
  }
};
</script>

<style lang="scss" scoped>
@import "~/theme/_main.scss";

.bubble {
 
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: 242px;
  margin: 32px auto 72px auto;
  width: 75%;
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