<template>
  <!-- <div class="container">
        <form class="col-4 justify-content-center"  @submit.prevent="login()">
            <label class="control-label" for="username"><b>Username:</b></label>
            <input type="email" class="form-control" id="username" v-model="newUser.userName"><br>
            <button type="submit" class="btn btn-success" style="width:100%;"><b>Log in</b></button><br>
        </form><br>
  </div> -->
    <div>
        <div class="form-container username-container">
          <form @submit.prevent="login()">
            <h1>Username :</h1>
              <input type="text" placeholder="Username .." id="userName" v-model="newUser.userName">
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend! lets Start!</h1>
              <a class="btn" @click.prevent="login()"> <img src="../assets/musicLogo.png" style="width: 50%;"> </a>
            </div>
          </div>
        </div>
  </div>

</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      newUser: {
        userName: ''
      }
    }
  },
  methods: {
    login () {
      console.log('login process activated')
      console.log(this.newUser.userName)
      this.newUser.userName = ''
    }
  }
}
</script>

<style>

</style>
