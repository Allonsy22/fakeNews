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
  created() {
    this.getUser().then( user => {
      this.$store.dispatch('getUser', user);
    }).catch(e => {
      console.log(e);
    });
  },
  methods: {
    getUser() {
      return new Promise((res, rej) => {
        let obj = {
          "id": localStorage.getItem('userId'),
        };
        if ( obj ) {
          res(obj);
        } else {
          rej("User id does'n exist");
        }
      });
    }
  },
};
</script>
