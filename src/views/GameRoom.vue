<template>
  <div id="GameRoom">
    <h2>Game Room #TKTK</h2>
    <hr/>
    <h2>Round #1</h2>
    <div class="container col-4 d-flex justify-content-center p-2">
        <div class="row">
            <form>
                <label class="control-label" for="username"><b>What is the song title?</b></label>
                <input type="email" class="form-control" id="username" v-model="answer" autofocus><br>
                <button type="submit" class="btn btn-success" style="width:100%;"><b>Submit answer</b></button><br>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameRoom',
  data () {
    return {
      answer: ''
    }
  }
}
</script>

<style>

</style>
