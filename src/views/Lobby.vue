<template>
  <div id="Lobby">
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
  </div>
</template>

<script>
export default {
  name: 'Lobby'
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
