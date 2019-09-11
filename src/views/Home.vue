<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <img src="https://pngimg.com/uploads/chuck_norris/chuck_norris_PNG14.png" />
      </div>
    </div>
    <div class="row">
      <Joke />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Joke from "../components/Joke";

export default {
  name: "home",
  components: {
    Joke
  }
};
</script>

<style>
img {
  height: 300px;
}
</style>