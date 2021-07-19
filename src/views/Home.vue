<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png" />-->
  <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  <div class="blog-card-wrap">
    <div class="container">
      <h3>View more recent Blogs</h3>
      <div class="blog-cards">
        <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
      </div>
    </div>
  </div>
   <div class="update">
     <div class="container">
       <h2>Never miss a post. Register for your free account today!</h2>
       <router-link class="router-button" to="#">
         Register for BlogProject <Arrow class="arrow arrow-light" />
       </router-link>
     </div>
   </div>
  </div>
</template>


<script>
import BlogPost from "@/components/BlogPost";
import BlogCard from "@/components/BlogCard";
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
  name: "Home",
  components: {BlogCard, BlogPost, Arrow},
  data(){
    return{
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
            "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost:[
        {
          title: "This is a filter Title",
          blogHtml: "This is a filter BlogPosst Title",
          blogCoverPhoto: "beautiful-stories"
        },
        {
          title: "This is a filter Title",
          blogHtml: "This is a filter BlogPosst Title This is a filter BlogPosst Title This is a filter BlogPosst Title",
          blogCoverPhoto: "beautiful-stories"
        },
        {
          title: "This is a filter Title",
          blogHtml: "This is a filter BlogPost Title",
          blogCoverPhoto: "beautiful-stories"
        }
      ],

    }
  },
  computed:{
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.update{
  .container{
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button{
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2{
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: inherit;
        font-size: 40px;
      }
    }
  }
}
</style>
