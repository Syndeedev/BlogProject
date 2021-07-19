<template>
<div class="blog-card-wrap">
  <div class=" blog-cards container">
    <div class="toggle-edit">
      <span>Toggle Editing Post</span>
<!--      <MyCurrentLocationSvg />-->
<!--      <SyndeeLogoSvg/>-->
<!--      <label>-->
        <input type="checkbox" v-model="editPost">
<!--      </label>-->
    </div>
      <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"></BlogCard>


  </div>


</div>
</template>

<script>
import BlogCard from "@/components/BlogCard";
// import MyCurrentLocationSvg from "@/components/MyCurrentLocationSvg";
// import SyndeeLogoSvg from "@/components/SyndeeLogoSvg";
// SyndeeLogoSvg MyCurrentLocationSvg
export default {
  name: "Blogs",
  components: {BlogCard },
  beforeDestroy() {
    this.$store.commit("toggleEditPost", false)
  },
  computed:{
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost:{
      get(){
        return this.$store.state.editPost
      },
      set(payload){
        this.$store.commit("toggleEditPost", payload)
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.blog-cards {
  margin-top: 50px;
  position: relative;
  @media (min-width: 800px) {
    margin-top: 40px;
  }
  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -45px;
    right: 0;
    span {
      margin-right: 16px;
    }

input[type="checkbox"] {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background: #fff;
  outline: none;
  width: 80px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input[type="checkbox"]:before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #303030;
  transform: scale(1.1);
  transition: 750ms ease all;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input:checked[type="checkbox"]:before {
  background: #fff;
  left: 52px;
}
}
}
</style>