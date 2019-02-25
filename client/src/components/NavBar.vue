<template>
  <nav>
    <v-toolbar app flat scroll-off-screen class="red darken-1">
        <router-link :to="'/'"
                     class="link">
            <v-toolbar-title>
                <span class="red--text text--lighten-5 headline font-weight-bold">fake</span>
                <span class="headline">News</span>
        </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat 
                   @click="facebookLogin"
                   v-if="isLogged === 'false'">
                <span>Log In</span>
                <v-icon>arrow_drop_up</v-icon>
            </v-btn>
            <v-btn flat 
                   @click="facebookLogout"
                   v-else>
                <span class="mr-1">Log Out</span>
                <v-icon>input</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'NavBar',
    data() {
        return {
            isLogged: 'false'
        }
    },
    created() {
        this.isLogged = 'false';
        localStorage.setItem("login", false);
    }, 
    methods: {
        facebookLogin() { 
            FB.login( response => {
                this.getInfo();
            }, {scope: 'email,user_birthday'});
            this.$store.dispatch("getNewsData");
        },
        facebookLogout () {
            FB.getLoginStatus( response => {
                if ( response.status === "connected" ) {
                    FB.logout( response => {
                        this.$store.dispatch("logout");
                        this.setLoginStatus();
                    });
                } else {
                    return console.log("logout");
                }
            });
        },
        getInfo() {
            FB.api('/me?fields=first_name,last_name,email,birthday', response => {
                if ( response && !response.error ) {
                    this.$store.dispatch('login', response );
                    this.setLoginStatus();
                } else {
                    console.log( response.error );
                }
            });
        },
        setLoginStatus() {
            this.isLogged = localStorage.getItem('login');
        }
    },
}
</script>

<style scoped>
.link {
    text-decoration: none;
    color: black;
}
</style>
