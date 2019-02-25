<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      //
    }
  },
  created() {
    let obj = {
      "id": localStorage.getItem('userId'),
    };
    this.$store.dispatch('getUser', obj);
  },
};
</script>
