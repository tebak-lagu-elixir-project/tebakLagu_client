<template>
  <!-- <div id="GameRoom" class="container">
    <h2>Game Room #TKTK</h2>
    <hr/>
    <h2>Round #1</h2>
    <div class="form-container col-4 d-flex justify-content-center p-2">
        <div class="row">
            <form>
                <label class="control-label" for="username"><b>What is the song title?</b></label>
                <input type="email" class="form-control" id="username" v-model="answer" autofocus><br>
                <button type="submit" class="btn btn-success" style="width:100%;"><b>Submit answer</b></button><br>
            </form>
        </div>
    </div>
  </div> -->

    <div class="container" id="gameRoom">
      <h1>Room Indonesia music</h1>
            <h1>What is the song title?</h1>
            <img src="../assets/musicLogo.png" style="width: 20%;" >
        <form @submit.prevent="Guess()" id="formGame">
          <h1>Guees the song </h1>
            <input type="text" placeholder="what you think .." id="answer" v-model="answer"><br>
            <button type="submit" @click.prevent="Guess()">Submit</button>
        </form>
    </div>

</template>

<script>
export default {
  name: 'GameRoom',
  data () {
    return {
      answer: ''
    }
  },
  methods: {
    Guess () {
      console.log(this.answer)
      this.answer = ''
    }
  }
}
</script>

<style>

</style>
