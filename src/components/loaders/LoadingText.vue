<template>
<div class="body">
  <div class="loader">Loading</div>
</div>
</template>

<script>
export default {
  name: "LoadingText"
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
  font-family: 'ZCOOL Kuaile', cursive;
  font-size: 40px;
  color: palevioletred;
}
.loader::after{
  content: '\2026';
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  animation: dots steps(4, end) 2s infinite;
  width: 0px;
}
@keyframes dots {
  to{
    width: 1.25em;
  }

}
</style>