<template>
  <div v-motion-slide-left
  class="menu-container">
    <app-header rootClassName="header-root-class-name"></app-header>
    <div class="menu-container1">
      <span class="menu-text">Menu</span>
      <div @click="router.push('/')"  
      class="menu-container2">
        <svg 
        viewBox="0 0 950.8571428571428 1024" class="menu-icon">
          <path
            d="M804.571 566.857v274.286c0 20-16.571 36.571-36.571 36.571h-219.429v-219.429h-146.286v219.429h-219.429c-20 0-36.571-16.571-36.571-36.571v-274.286c0-1.143 0.571-2.286 0.571-3.429l328.571-270.857 328.571 270.857c0.571 1.143 0.571 2.286 0.571 3.429zM932 527.429l-35.429 42.286c-2.857 3.429-7.429 5.714-12 6.286h-1.714c-4.571 0-8.571-1.143-12-4l-395.429-329.714-395.429 329.714c-4 2.857-8.571 4.571-13.714 4-4.571-0.571-9.143-2.857-12-6.286l-35.429-42.286c-6.286-7.429-5.143-19.429 2.286-25.714l410.857-342.286c24-20 62.857-20 86.857 0l139.429 116.571v-111.429c0-10.286 8-18.286 18.286-18.286h109.714c10.286 0 18.286 8 18.286 18.286v233.143l125.143 104c7.429 6.286 8.571 18.286 2.286 25.714z"
          ></path>
        </svg>
        <span 
        class="menu-text1">Home</span>
      </div>
      <div @click="studio" 
      class="menu-container3">
        <svg viewBox="0 0 1024 1024" class="menu-icon2">
          <path
            d="M512 768v-170h-256v170h256zM896 598h-42v256h-86v-256h-170v256h-428v-256h-42v-86l42-214h684l42 214v86zM854 170v86h-684v-86h684z"
          ></path>
        </svg>
        <span class="menu-text2">My Store</span>
      </div>
      <div class="menu-container4">
        <svg viewBox="0 0 1024 1024" class="menu-icon4">
          <path
            d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
          ></path>
        </svg>
        <span
         class="menu-text3">Settings</span>
      </div>
      <button @click="router.go(-1)"
      class="menu-find button">
        <span class="menu-text4">
          <span class="menu-text5">Back</span>
          <br />
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '../components/header.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const studio =()=>{
  window.location.href='https://men-storex.sanity.studio/desk';
}
</script>

<style scoped>
.menu-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.menu-container1 {
  width: 100%;
  height: 611px;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
}
.menu-text {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
}
.menu-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
  background-color: #ffffff;
}
.menu-container2:hover {
  background-color: #c6eaff;
}
.menu-icon {
  width: 41px;
  height: 60px;
}
.menu-text1 {
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
}
.menu-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.menu-container3:hover {
  background-color: #c6eaff;
}
.menu-icon2 {
  width: 41px;
  height: 60px;
}
.menu-text2 {
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
}
.menu-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.menu-container4:hover {
  background-color: #c6eaff;
}
.menu-icon4 {
  width: 41px;
  height: 60px;
}
.menu-text3 {
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
}
.menu-find {
  color: var(--dl-color-gray-white);
  width: 147px;
  height: 73px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-threeunits);
  transition: 0.3s;
  font-weight: 500;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  border-radius: 56px;
  padding-right: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-unit);
  background-color: rgb(255, 77, 210);
}
.menu-find:hover {
  opacity: 0.5;
}
.menu-text4 {
  font-style: normal;
  font-family: Poppins;
  font-weight: 700;
}
.menu-text5:hover {
  opacity: 0.5;
}
@media(max-width: 991px) {
  .menu-find {
    width: 139px;
    text-align: center;
    margin-right: 0px;
  }
  .menu-text5 {
    width: 139px;
    text-align: center;
    margin-right: 0px;
  }
}
@media(max-width: 767px) {
  .menu-find {
    width: 137px;
  }
  .menu-text5 {
    width: 137px;
  }
}
@media(max-width: 479px) {
  .menu-find {
    align-self: flex-start;
    margin-top: var(--dl-space-space-oneandhalfunits);
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    background-color: var(--dl-color-primary-500);
  }
  .menu-text4 {
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
}
@media(max-width: 474px) {
  .menu-find {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
  .menu-text5 {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
