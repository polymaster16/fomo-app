<template>
  <div class="product-container">
    <app-header rootClassName="header-root-class-name1"></app-header>
    <div class="product-container1">
      <img
        :src="CreateURL(product.image)"
        alt="image"
        class="product-image"
      />
      <span class="product-text">
        <span>Product </span>
        <span class="product-text02">{{ product.name }}</span>
      </span>
      <span class="product-text03">{{ product.price }} XAF</span>
      <span class="product-text04">
        <span class="product-text05">Contact</span>
        <span><span v-html="rawdufa"></span></span>
        <span class="product-text07">the</span>
        <span>
          seller
          <span v-html="rawnnvi"></span>
        </span>
        <span class="product-text09">directly </span>
        <span>via: </span>
      </span>
      <div class="product-container2">
        <svg viewBox="0 0 877.7142857142857 1024" class="product-icon">
          <path
            d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"
          ></path></svg
        ><svg viewBox="0 0 1024 1024" class="product-icon2">
          <path
            d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
          ></path></svg
        ><svg viewBox="0 0 1024 1024" class="product-icon4">
          <path
            d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
          ></path>
        </svg>
      </div>
      <span class="product-text11">Description</span>
      <span>
       {{ product.description }}
      </span>
      <span class="product-text13">Store details</span>
      <span class="product-text14">
        <span class="product-text15">Store Name:</span>
        <span>{{ store.name }}</span>
      </span>
      <span class="product-text17">
        <span class="product-text18">Region:</span>
        <span>Centre</span>
      </span>
      <span class="product-text20">
        <span class="product-text21">Town:</span>
        <span>Yaoundé</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import { useRoute } from 'vue-router';
import {CreateURL} from '@/utils'

const slug = useRoute()
const products  = JSON.parse(localStorage.getItem('@products')) 

const stores = JSON.parse(localStorage.getItem('@shops'))

const product = products.filter(p => p.name === slug.params.slug)[0]
const store = stores.filter(s => s._id === product.store._ref)[0]
console.log(store)
</script>

<style scoped>
.product-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.product-container1 {
  width: 100%;
  height: 664px;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}
.product-image {
  width: 100%;
  height: 30vh;
  object-fit: cover;
}
.product-text {
  font-size: 24px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.product-text02 {
  color: var(--dl-color-primary-300);
}
.product-text03 {
  color: var(--dl-color-primary-300);
  font-size: 21px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.product-text04 {
  color: var(--dl-color-primary-300);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.product-text05 {
  color: var(--dl-color-gray-black);
}
.product-text07 {
  color: var(--dl-color-gray-black);
}
.product-text09 {
  color: var(--dl-color-gray-black);
}
.product-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-icon {
  fill: var(--dl-color-success-500);
  width: 45px;
  height: 60px;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
}
.product-icon2 {
  fill: var(--dl-color-primary-300);
  width: 45px;
  height: 60px;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
}
.product-icon4 {
  fill: var(--dl-color-danger-700);
  width: 45px;
  height: 60px;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
}
.product-text11 {
  color: var(--dl-color-primary-300);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.product-text13 {
  color: var(--dl-color-primary-300);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.product-text14 {
  color: var(--dl-color-primary-300);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.product-text17 {
  color: var(--dl-color-primary-300);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.product-text20 {
  color: var(--dl-color-primary-300);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
@media(max-width: 479px) {
  .product-container1 {
    height: 855px;
  }
  .product-text {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .product-text03 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .product-text04 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .product-text11 {
    color: var(--dl-color-gray-black);
    font-size: 18px;
    align-self: flex-start;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .product-text13 {
    color: var(--dl-color-gray-black);
    font-size: 18px;
    align-self: center;
    font-style: normal;
    margin-top: var(--dl-space-space-twounits);
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .product-text14 {
    color: var(--dl-color-gray-black);
    font-size: 18px;
    align-self: flex-start;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .product-text15 {
    color: var(--dl-color-primary-300);
  }
  .product-text17 {
    color: var(--dl-color-gray-black);
    font-size: 18px;
    align-self: flex-start;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .product-text18 {
    color: var(--dl-color-primary-300);
  }
  .product-text20 {
    color: var(--dl-color-gray-black);
    font-size: 18px;
    align-self: flex-start;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .product-text21 {
    color: var(--dl-color-primary-300);
  }
}
</style>
