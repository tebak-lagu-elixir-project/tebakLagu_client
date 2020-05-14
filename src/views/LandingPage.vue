<template>
  <div>
    <hr/>
      <h2>Welcome to TebakLagu!</h2>
      <div class="container">
        <div class="column">
          <LoginForm/>
        </div>
      </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'LandingPage',
  components: {
    LoginForm
  }
}
</script>

<style>

</style>
