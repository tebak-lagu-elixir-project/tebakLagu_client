<template>
  <div id="gameRoom" class="container">
    <h2>Game Room {{joinedRoomData.name}}</h2>
    <hr/>
    <div v-if="!gameFinished">
          <div>
            <h1>Round {{questionNumber}}</h1>
          </div>
            <h1>What is the song title?</h1>
              <a class="btn" @click="trigerPlay()" v-if="!isPlaying"> <img src="../assets/musicLogo.png" style="width: 20%;"> </a>
            <form @submit.prevent="submitAnswer()" id="formGame">
              <h1>Guees the song </h1>
                <input type="text" placeholder="what you think .." id="answer" v-model="answer"><br>
                <button type="submit" @click.prevent="Guess()">Submit</button>
            </form>

      <!-- <h2>Round {{questionNumber}}</h2>
      <button type="button" class="btn btn-success" @click="playGame()" v-if="!isPlaying">Play!</button> -->
      <!-- <audio controls>
        <source src="http://cdn-preview-5.deezer.com/stream/c-5bdbc1c9e6ddad715a461836727da5c4-4.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio> -->
      <!-- <div class="container col-4 d-flex justify-content-center p-2">
          <div class="row">
              <form @submit.prevent="submitAnswer()">
                  <label class="control-label" for="username"><b>What is the song title?</b></label>
                  <input type="text" class="form-control" id="username" v-model="answer" autofocus><br>
                  <button type="submit" class="btn btn-success" style="width:100%;"><b>Submit answer</b></button><br>
              </form>
          </div>
      </div> -->
    </div>
      <div v-else-if="gameFinished">
        <h3>And the winner is...</h3>
        <h2>TKTKTKTK!</h2>
        <!-- Play again | Exit room -->
      </div>
  </div>

</template>

<script>
// import axios from 'axios'
// import io from 'socket.io-client'
// const socket = io.connect('https://shrouded-forest-27107.herokuapp.com')
// const socket = io.connect('http://localhost:3000')

export default {
  name: 'GameRoom',
  data () {
    return {
      answer: '',
      questionNumber: '',
      currentGameRoomNumber: '',
      isReadytoPlay: false,
      currentPlaylist: [], // berisi array lagu-lagu yang jadi soal
      currentPlayerPoint: 0,
      currentSongId: 0,
      gameFinished: false,
      isPlaying: false
    }
  },
  methods: {
    trigerPlay () {
      // socket.emit('trigerPlay')
      this.playGame()
    },
    playGame () {
      const currentSong = new Audio((this.currentPlaylist.pop().preview))
      this.questionNumber = this.currentPlaylist.length + 1
      console.log(this.questionNumber)
      currentSong.play()
      this.isPlaying = true
      setTimeout(() => {
        this.isPlaying = false
      }, 30000)
    },
    submitAnswer () {
      console.log(this.answer)
      // check answer
      if (this.answer === this.currentPlaylist[this.currentSongIdforQuestion].title) {
        this.currentPlayerPoint += 10
        this.answer = ''
      } else {
        this.answer = ''
      }
      // Setelah cek apakah benar salah, maka ganti ke pertanyaan berikutnya
      // Yang perlu di-update: stage number number in Question title, lagu yang akan dimainkan
      if (this.currentSongIdforQuestion === 10) {
        this.checkForWinner()
      } else {
        this.currentSongIdforQuestion += 1
      }
    },
    checkForWinner () {
      console.log('Check winner process started')
      // di sini ada proses untuk cek score dari semua player.
      // di sini kita akan terima emit dari server untuk siapa pemenangnya
    }
    // playSound () {
    //   // var music = new Audio('http://soundbible.com/mp3/Button-SoundBible.com-1420500901.mp3')
    //   // var music = new Audio(require('../assets/click-button-sound.mp3')) // --> Nanti diisi dengan url preview yang diperlukan
    //   // music.play()
    // }
  },
  computed: {
    joinedRoomData () {
      return this.$store.state.joinedRoomData
    },
    currentUserName () {
      return this.$store.state.currentUserName
    },
    allRooms () {
      return this.$store.state.allRooms
    }
  },
  created () {
    console.log('masuk')
    const currentRoomGame = this.allRooms.filter((el) => {
      return el.id === +this.$route.params.id
    })
    this.currentPlaylist = currentRoomGame[0].songs
    // socket.on('playGames', () => {
    //   console.log('masuuuuk')
    //   this.playGame()
    // })
    // console.log(currentRoomGame, 'test')
    // console.log(this.allRooms)
    // socket.emit('addPlayer', {
    //   roomId: this.joinedRoomData.id,
    //   newPlayer: 'testUser'
    // })
    // io.on('createdRoom', (room) => {
    //   console.log(room)

    // })
    /* Data yang diterima :
      {
        name: 'nama room',
        songs: [
            { id: 1, preview: 'url'}, ... // sesuai apk deezer
        ],
        players: {
          usernames: [
            "Luffy", "Zoro", "Nami", "Usop"
          ]
        }
      }
      */
  }
}
</script>

<style>

</style>
