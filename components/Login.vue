<template>
  <div>
    <div><label>Username</label> <input v-model="username" type="text" /></div>
    <div><label>Password</label> <input v-model="password" type="text" /></div>
    <button id="my-button" @click="login">Login</button>
    <br />
    <br />
    <br />
    <nuxt-link id="direct-call" to="/dashboard"
      >Direkter Aufruf zum Dashboard</nuxt-link
    >
  </div>
</template>

<script>
import NuxtLink from '../.nuxt/components/nuxt-link.client'
export default {
  components: {
    NuxtLink
  },
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    login() {
      /*
       ** Here a login function should be defined to approve or deny the user credentials
       */
      this.$router.push('/dashboard')
    }
  }
}
</script>
