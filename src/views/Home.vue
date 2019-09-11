<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="row">
        <Joke />
      </div>
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
