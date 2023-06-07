<template>
  <div class="store-container">
    <app-header rootClassName="header-root-class-name2"></app-header>
    <div class="store-container01">
      <img
        alt="image"
        :src="CreateURL(store.image)"
        class="store-image"
      />
      <span class="store-text"> {{store.name}}</span>
      <div class="store-container02">
        <svg viewBox="0 0 877.7142857142857 1024" class="store-icon">
          <path
            d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"
          ></path></svg
        ><svg viewBox="0 0 1024 1024" class="store-icon2">
          <path
            d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
          ></path></svg
        ><svg viewBox="0 0 1024 1024" class="store-icon4">
          <path
            d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
          ></path>
        </svg>
      </div>
      <span class="store-text01">Store details</span>
      <span class="store-text02">
        <span class="store-text03">Store Name:</span>
        <span><span v-html="rawltqi"></span></span>
        <span class="store-text05">{{ store.name }}</span>
      </span>
      <span class="store-text06">
        <span class="store-text07">Region:</span>
        <span><span v-html="rawmr69"></span></span>
        <span class="store-text09">Centre</span>
      </span>
      <span class="store-text10">
        <span class="store-text11">Town:</span>
        <span><span v-html="rawr2zz"></span></span>
        <span class="store-text13">Yaoundé</span>
      </span>
      <span class="store-text14">Description</span>
      <span class="store-text15">
     {{ store.description }}
      </span>
      <span class="store-text16">
        <span>Our </span>
        <span class="store-text18">Product Feed</span>
      </span>
      <div v-for="prod in p1" :key="prod.name" 
       class="store-container03">
     
        <div class="store-container08">
          <img
            alt="image"
            :src="CreateURL(prod.image)"
            class="store-image3"
          />
          <div class="store-container09">
            <span class="store-text23">{{ prod.name }}</span>
            <span class="store-text24">0000 Xaf</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import { useRoute } from 'vue-router';
import {CreateURL} from '@/utils'
import { client } from '../../client';
const slug = useRoute()

const shops = JSON.parse(localStorage.getItem('@shops'))
const products = JSON.parse(localStorage.getItem('@products'))


 const store = shops.filter(x => x.name === slug.params.slug)[0]
 const p1 = products.filter(x => x.store._ref === store._id)
 console.log(p1)

</script>

<style scoped>
.store-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.store-container01 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: flex-start;
}
.store-image {
  width: 200px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.store-text {
  font-size: 21px;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  font-weight: 600;
}
.store-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.store-icon {
  fill: var(--dl-color-success-500);
  width: 45px;
  height: 60px;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
}
.store-icon2 {
  fill: var(--dl-color-primary-300);
  width: 45px;
  height: 60px;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
}
.store-icon4 {
  fill: var(--dl-color-danger-700);
  width: 45px;
  height: 60px;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
}
.store-text01 {
  color: var(--dl-color-gray-black);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.store-text02 {
  color: var(--dl-color-primary-300);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.store-text05 {
  color: var(--dl-color-gray-black);
}
.store-text06 {
  color: var(--dl-color-primary-300);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.store-text09 {
  color: var(--dl-color-gray-black);
}
.store-text10 {
  color: var(--dl-color-primary-300);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 700;
}
.store-text13 {
  color: var(--dl-color-gray-black);
}
.store-text14 {
  color: var(--dl-color-gray-black);
  font-size: 21px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-oneandhalfunits);
  text-align: center;
  font-weight: 700;
}
.store-text15 {
  margin-top: var(--dl-space-space-unit);
}
.store-text16 {
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  font-weight: 700;
}
.store-text18 {
  color: var(--dl-color-primary-300);
}
.store-container03 {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.store-container04 {
  width: 100%;
  height: 20vh;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  transition: 0.3s;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.store-container04:hover {
  background-color: #c5e1ef;
}
.store-image1 {
  width: 200px;
  height: 100%;
  object-fit: cover;
}
.store-container05 {
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
.store-text19 {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.store-text20 {
  color: var(--dl-color-primary-300);
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 500;
}
.store-container06 {
  width: 100%;
  height: 20vh;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  transition: 0.3s;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.store-container06:hover {
  background-color: #c5e1ef;
}
.store-image2 {
  width: 200px;
  height: 100%;
  object-fit: cover;
}
.store-container07 {
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
.store-text21 {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.store-text22 {
  color: var(--dl-color-primary-300);
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 500;
}
.store-container08 {
  width: 100%;
  height: 20vh;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  transition: 0.3s;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.store-container08:hover {
  background-color: #c5e1ef;
}
.store-image3 {
  width: 200px;
  height: 100%;
  object-fit: cover;
}
.store-container09 {
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
.store-text23 {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.store-text24 {
  color: var(--dl-color-primary-300);
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 500;
}
@media(max-width: 479px) {
  .store-container01 {
    width: 100%;
    height: auto;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-twounits);
    margin-bottom: 2px;
    padding-right: var(--dl-space-space-twounits);
    padding-bottom: var(--dl-space-space-unit);
    justify-content: flex-start;
  }
  .store-image {
    border-radius: var(--dl-radius-radius-round);
  }
  .store-text {
    font-size: 21px;
    margin-top: var(--dl-space-space-unit);
    font-weight: 600;
  }
  .store-container02 {
    height: 70px;
  }
  .store-icon {
    width: 35px;
  }
  .store-icon2 {
    width: 35px;
  }
  .store-icon4 {
    width: 35px;
  }
  .store-text01 {
    color: var(--dl-color-gray-black);
    font-size: 18px;
    align-self: center;
    font-style: normal;
    margin-top: var(--dl-space-space-twounits);
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .store-text02 {
    color: var(--dl-color-gray-black);
    font-size: 18px;
    align-self: flex-start;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .store-text03 {
    color: var(--dl-color-primary-300);
  }
  .store-text06 {
    color: var(--dl-color-gray-black);
    font-size: 18px;
    align-self: flex-start;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .store-text07 {
    color: var(--dl-color-primary-300);
  }
  .store-text10 {
    color: var(--dl-color-gray-black);
    font-size: 18px;
    align-self: flex-start;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .store-text11 {
    color: var(--dl-color-primary-300);
  }
  .store-text14 {
    color: var(--dl-color-gray-black);
    font-size: 18px;
    align-self: flex-start;
    font-style: normal;
    font-weight: 700;
    margin-bottom: var(--dl-space-space-unit);
  }
  .store-text16 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
  .store-text19 {
    font-size: 18px;
  }
  .store-text20 {
    font-size: 18px;
  }
  .store-text21 {
    font-size: 18px;
  }
  .store-text22 {
    font-size: 18px;
  }
  .store-text23 {
    font-size: 18px;
  }
  .store-text24 {
    font-size: 18px;
  }
}
</style>
