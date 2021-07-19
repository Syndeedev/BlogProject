<template>
  <transition class="fade">
  <div  v-if="loading">
<div class="body">
  <div class="loader">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
  </div>
  </transition>
</template>

<script>
export default {
  name: "ThreeBouncingDots",
  props: {
    loading:Boolean
  }
}
</script>

<style scoped>
.body{
  top: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.loader{
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader > span{
display: inline-block;
  background-color: purple;
  width: 0;
  height: 0;
  border-radius: 50%;
  margin: 0 8px;
  animation: bounce 0.7s infinite alternate;
  transform: translate3d(0, 0, 0);
}
.loader > span:nth-child(2){
background-color: palevioletred;
  animation-delay: 0.2s;
}
.loader > span:nth-child(3){
animation-delay: 0.2s;
}
@keyframes bounce {
  to{
    width: 16px;
    height: 16px;
    transform: translate3d(0, -16px, 0);
  }
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 2s;
}
</style>