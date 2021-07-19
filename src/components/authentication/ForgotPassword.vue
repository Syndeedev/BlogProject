<template>
  <div class="reset-password">
    <confirm-modal v-if="modalActive" :modal-message="modal" @closeModal="closeModal" />
    <round-loading v-if="loading"/>

        <div class="form-wrap">
    <form class="reset">
      <p class="login-register">
        Back to
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Reset Password</h2>
      <p>Forgot your password? Enter your email to reset it</p>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
      </div>
      <button @click.prevent="resetPassword">Reset</button>
      <div class="angle"></div>
      <div style="background-color: #c7ebd6; right: -60px" class="angle"></div>
      <div style="background-color: #a2ddbb; right: -60px; width: 30px" class="angle"></div>

    </form>
    <div class="background">
      <circle-s-v-g/>
    </div>
  </div>
</div>


</template>

<script>
import CircleSVG from "@/components/circleSVG";
import email from "@/assets/Icons/envelope-regular.svg"
import ConfirmModal from "@/components/modals/ConfirmModal";
import RoundLoading from "@/components/loaders/RoundLoading";


export default {
name: "ForgotPassword",
  components: { RoundLoading, ConfirmModal, CircleSVG, email},
  data(){
  return{
    email: null,
    modalActive: null,
    modalMessage:"",
    loading: null
  }
  },
  methods:{
    closeModal(){
      this.modalActive= !this.modalActive;
      this.email = "";
    }
  }
}
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>