<template>
  <div style="display:flex;justify-content:center;">
        <form class="col-4 justify-content-center"  @submit.prevent="login()">
            <label class="control-label" for="username"><b>Username:</b></label>
            <input type="email" class="form-control" id="username" v-model="newUser.userName"><br>
            <button type="submit" class="btn btn-success" style="width:100%;"><b>Log in</b></button><br>
        </form><br>
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
    }
  }
}
</script>

<style>

</style>
