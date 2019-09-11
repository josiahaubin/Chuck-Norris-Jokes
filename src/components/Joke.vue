<template>
  <div class="Joke col-12">
    <h5 class="mt-5">{{chuckJoke.value}}</h5>
    <button class="btn btn-success" @click="getJoke()">Get Joke</button>
  </div>
</template>


<script>
export default {
  name: "Joke",
  data() {
    return {};
  },
  mounted() {
    return this.getJoke();
  },
  computed: {
    chuckJoke() {
      return this.$store.state.joke;
    }
  },
  methods: {
    getJoke() {
      this.$store.dispatch("getJoke");
    }
  },
  components: {}
};
</script>


<style scoped>
</style>