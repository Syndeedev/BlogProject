import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards:[
      {BlogTitle:"Blog Card #1", blogCoverPhoto: "stock-1", BlogDate:"May 1 2021"},
      {BlogTitle:"Blog Card #2", blogCoverPhoto: "stock-2", BlogDate:"May 1 2021"},
      {BlogTitle:"Blog Card #3", blogCoverPhoto: "stock-3", BlogDate:"May 1 2021"},
      {BlogTitle:"Blog Card #3", blogCoverPhoto: "stock-3", BlogDate:"May 1 2021"},
    ],
    editPost: null,

  },
  mutations: {
    toggleEditPost:(state, data) =>{
      state.editPost = data
      console.log(state.editPost)
    }
  },
  actions: {
  },
  modules: {
  }
})
