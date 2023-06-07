<template>
  <div v-motion-slide-left
  class="home-container">
    <app-header></app-header>
    <div class="home-container01">
      <span class="home-text">
        <span>
          Latest
          <span v-html="rawd5ei"></span>
        </span>
        <span class="home-text02">deals</span>
      </span>
      <div  class="home-container02">
      <div v-for="product in products" v-bind:key="product.name">
        <div @click="router.push(`/product/${product.name}`)"
         class="home-container03">
          <img
            alt="image"
            :src="CreateURL(product.image)"
            class="home-image"
          />
          <span class="home-text03">{{ product.name }}</span>
          <span class="home-text04">{{ product.price }} Xaf</span>
        </div>
      </div>
      </div>
      <span class="home-text05">
        <span>
          Popular
          <span v-html="rawd1lk"></span>
        </span>
        <span class="home-text07">stores</span>
      </span>
      <div class="home-container04">
        <div  v-for="store in shops" v-bind:key="store.name"
         class="home-container05">
          <div
          @click="router.push(`/shop/${store.name}`)"
            class="home-container06">
            <img
              alt="image"
              :src="CreateURL(store.image)"
              class="home-image1"
            />
            <span class="home-text08">{{ store.name }}</span>
          </div>
          <img  @click="router.push(`/shop/${store.name}`)"
            alt="image"
            :src="CreateURL(store.bg_image)"
            class="home-image2"
          />
          <span class="home-text09">
           {{ store.store_description }}
          </span>
        </div>
      </div>
      <span class="home-text10">
        <span>My </span>
        <span class="home-text12">Product Feed</span>
      </span>
      <div v-for="product in products" v-bind:key="product.name"
       class="home-container07">

        <div  @click="router.push(`/product/${product.name}`)"
         class="home-container08">
          <img
            alt="image"
            :src="CreateURL(product.image)"
            class="home-image3"
          />
          <div class="home-container09">
            <span class="home-text13">{{ product.name }}</span>
            <span class="home-text14">{{ product.price }} Xaf</span>
          </div>
        </div>
       
      </div>
    </div>
    <social-bar></social-bar>
  </div>
</template>

<script setup>
import AppHeader from '../components/header.vue'
import SocialBar from '../components/social-bar.vue'

import { client } from '../client';
import { ref, onMounted } from 'vue';
import {CreateURL} from '@/utils'
import { useRouter, useRoute } from 'vue-router';

const shops = ref([])
const products = ref([])

const router = useRouter()

 async function getShops() {
 shops.value =  await client.fetch('*[_type == "store"]')
localStorage.setItem('@shops', JSON.stringify(shops.value)) 
}

async function getProducts() {
 products.value =  await client.fetch('*[_type == "product"]')
localStorage.setItem('@products', JSON.stringify(products.value)) 
  console.log('products',products.value)  
}

onMounted(() => {
getShops()
getProducts()
})
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-container01 {
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.home-text {
  font-size: 18px;
  font-style: normal;
  text-align: center;
  font-weight: 700;
}
.home-text02 {
  color: var(--dl-color-primary-300);
}
.home-container02 {
  width: 100%;
  height: auto;
  display: flex;
  overflow-x: scroll;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}
.home-container03 {
  flex: 0 0 auto;
  width: 20vw;
  height: 100%;
  margin-left: 10px;
  display: flex;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
/* .home-container03:hover {
  width: 22vw;
  height: 105%;
} */
.home-image {
  width: 100%;
  height: 80%;
  object-fit: cover;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text03 {
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
}
.home-text04 {
  color: var(--dl-color-primary-300);
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
}
.home-text05 {
  font-size: 18px;
  font-style: normal;
  text-align: center;
  font-weight: 700;
}
.home-text07 {
  color: var(--dl-color-primary-300);
}
.home-container04 {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  overflow-x: scroll;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  justify-content: center;
}
.home-container05 {
  flex: 0 0 auto;
  width: 20vw;
  height: 100%;
  display: flex;
  transition: 0.3s;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-container05:hover {
  width: 22vw;
  height: 105%;
}
.home-container06 {
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.home-image1 {
  width: 50px;
  object-fit: cover;
  margin-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-round);
}
.home-text08 {
  font-style: normal;
  font-weight: 600;
  margin-left: var(--dl-space-space-unit);
}
.home-image2 {
  width: 100%;
  height: 80%;
  object-fit: cover;
  margin-bottom: var(--dl-space-space-halfunit);
}
.home-text09 {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.home-text10 {
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  font-weight: 700;
}
.home-text12 {
  color: var(--dl-color-primary-300);
}
.home-container07 {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-container08 {
  width: 100%;
  height: 20vh;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  transition: 0.3s;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.home-container08:hover {
  background-color: #c5e1ef;
}
.home-image3 {
  width: 200px;
  height: 100%;
  object-fit: cover;
}
.home-container09 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.home-text13 {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.home-text14 {
  color: var(--dl-color-primary-300);
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 500;
}
.home-container10 {
  width: 100%;
  height: 20vh;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  transition: 0.3s;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.home-container10:hover {
  background-color: #c5e1ef;
}
.home-image4 {
  width: 200px;
  height: 100%;
  object-fit: cover;
}
.home-container11 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.home-text15 {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.home-text16 {
  color: var(--dl-color-primary-300);
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 500;
}
.home-container12 {
  width: 100%;
  height: 20vh;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  transition: 0.3s;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.home-container12:hover {
  background-color: #c5e1ef;
}
.home-image5 {
  width: 200px;
  height: 100%;
  object-fit: cover;
}
.home-container13 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.home-text17 {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.home-text18 {
  color: var(--dl-color-primary-300);
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 500;
}
.home-container14 {
  width: 100%;
  height: 20vh;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  transition: 0.3s;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.home-container14:hover {
  background-color: #c5e1ef;
}
.home-image6 {
  width: 200px;
  height: 100%;
  object-fit: cover;
}
.home-container15 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.home-text19 {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.home-text20 {
  color: var(--dl-color-primary-300);
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 500;
}
@media(max-width: 991px) {
  .home-container03 {
    width: 25vw;
  }
  .home-container05 {
    width: 25vw;
  }
}
@media(max-width: 767px) {
  .home-container03 {
    width: 30vw;
  }
  .home-container05 {
    width: 30vw;
  }
}
@media(max-width: 479px) {
  .home-container01 {
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-container03 {
    width: 50vw;
  }
  .home-text05 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
  .home-container05 {
    width: 50vw;
  }
  .home-text10 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
  .home-text13 {
    font-size: 18px;
  }
  .home-text14 {
    font-size: 18px;
  }
  .home-text15 {
    font-size: 18px;
  }
  .home-text16 {
    font-size: 18px;
  }
  .home-text17 {
    font-size: 18px;
  }
  .home-text18 {
    font-size: 18px;
  }
  .home-text19 {
    font-size: 18px;
  }
  .home-text20 {
    font-size: 18px;
  }
}
</style>
