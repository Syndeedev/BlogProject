<template>
  <div class="form-wrap">
    <form action="" class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{name:'Login'}">Login</router-link>
      </p>
      <h2>Create your BlogProject Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName">
          <user class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName">
          <user class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="userName">
          <user class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email">
          <email class="icon"/>
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password">
          <password class="icon"/>
        </div>
      </div>
      <span class="error">{{errorMsg}}</span>
      <button @click.prevent="register()">Sign Up</button>
      <div class="angle"></div>
      <div style="background-color: #c7ebd6; right: -60px" class="angle"></div>
      <div style="background-color: #a2ddbb; right: -60px; width: 30px" class="angle"></div>
    </form>
    <div class="background" >
      <circle-s-v-g/>
      <!--    <my-current-location-svg />-->

    </div>
  </div>
</template>

<script>
import email from "@/assets/Icons/envelope-regular.svg";
import password from "@/assets/Icons/lock-alt-solid.svg";
import user from "@/assets/Icons/user-alt-light.svg";
// import MyCurrentLocationSvg from "@/components/MyCurrentLocationSvg";
import CircleSVG from "@/components/circleSVG";
import firebase from "firebase/app";
import "firebase/auth"
import db from "../../firebase/firebaseInit"
export default {
name: "Register",
  components: {CircleSVG, user, password, email},
  data(){
  return{
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
    error: "",
    errorMsg: ""
  }
  },
  methods:{
    async register(){
       if (
          this.email !== "" &&
          this.password !== "" &&
          this.firstName !== "" &&
          this.lastName !== "" &&
          this.username !== ""
        ){
         this.error = false;
         this.errorMsg = "";
         const firebaseAuth = await firebase.auth();
         const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email,this.password)
         const result = await createUser;
         const database = db.collection("users").doc(result.user.uid)
         let data = {
           firstName: this.firstName,
           lastName: this.lastName,
           userName: this.userName,
           email: this.email,
         }
         console.log(data)
         await database.set(data);
         this.$router.push({name : "Home"})
         return;

        }
      this.error = true;
      this.errorMsg = "Please fill out all the details";
      setTimeout(() => {
        this.errorMsg = "";
      }, 2000);
    }
  }
}
</script>

<style lang="scss" scoped>
.register{
  h2{
    max-width: 350px;
    text-align: center;
    font-size: 32px;
    color: #303030;
    margin-bottom: 40px;
    @media (min-width: 900px) {
      font-size: 32px;
    }

  }
}
</style>