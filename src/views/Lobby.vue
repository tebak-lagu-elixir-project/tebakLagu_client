<template>
  <!-- <div id="Lobby">
    <h2>Welcome! Start by either creating a room or join a game!</h2>
    <hr/>
    <div class="row d-flex justify-content-center">
        <div class="col-5 p-2" style="background-color:#778beb">
          <div class="CreateRoomBox">
            <h2>Create a room</h2>
            <button type="button" class="btn btn-success">+ Create a room</button>
          </div>
          <div class="verticalLine"></div>
        </div>
        <div class="col-5 p-2" style="background-color:#f7d794">
          <h2>Currently available room: </h2>
          <div class="container">
              <div class="column">
                <a href="#">Game Room #0</a>
                <p>Dummy Room 1 #36</p>
                <p>Dummy Room 2 #37</p>
                <p>Dummy Room 3 #38</p>
                <p>Dummy Room 4 #39</p>
              </div>
            </div>
        </div>
    </div>
  </div> -->

    <div id="Lobby" class="container">
      <!-- Create Room -->
      <div class="form-container createRoom-container">
        <form>
          <h1>Create a Room :</h1>
          <!-- modal button Create Room -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalCreate" data-whatever="newtask">create</button>
        <div class="modal fade" id="ModalCreate" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title" id="exampleModalLabel">Welcome, Game Master</h1>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form v-on:submit.prevent="createRoom">
                      <h2>Choose your genre !</h2>
                      <select name="genre" id="genre">
                        <option value="" disabled>Genre</option>
                        <option value="Edm">Edm</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                        <option value="Anime">Anime</option>
                        <option value="Indonesia">Indonesia</option>
                      </select>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-on:click.prevent="createRoom">create</button>
                </div>
                </div>
            </div>
        </div>
        </form>
      </div>
      <!-- List Available Room -->
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
          <h1>Currently available room</h1>
            <h1>Game Room : </h1><br>
            <ul>
              <li>Dummy Room 1 #36</li>
              <li>Dummy Room 2 #37</li>
              <li>Dummy Room 3 #38</li>
              <li>Dummy Room 4 #39</li>
            </ul>
            <img src="../assets/LunasMusic.gif" style="width: 50%;" >
          </div>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'Lobby',
  methods: {
    createRoom () {
      console.log('creating room')
    }
  }
}
</script>

<style>

.verticalLine{
    width:5px;
    height:auto;
    background-color:#ffc048;
    border-radius: 5px;
}

</style>
