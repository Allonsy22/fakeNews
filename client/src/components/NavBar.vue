<template>
  <nav>
    <v-toolbar app flat scroll-off-screen class="red darken-1">
        <router-link :to="'/'"
                     class="link">
            <v-toolbar-title @click="startPage">
                <span class="red--text text--lighten-5 headline font-weight-bold">fake</span>
                <span class="headline">News</span>
        </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat
                    @click="showEditorDialog"
                    v-if="mainPage">
                <v-icon>note_add</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isLogged: false,
        }
    },
    computed: {
        mainPage() {
            return location.pathname == "/";
        }
    },
    methods: {
        showEditorDialog() {
            this.$store.dispatch("showEditorDialog");
        },
        startPage() {
            this.$store.dispatch("setCurrentPage", 1).then( () => {
                this.$vuetify.goTo(0);
            }).catch(e => console.log(e));
        }
    },
}
</script>

<style scoped>
.link {
    text-decoration: none;
    color: black;
}
.v-btn {
    min-width: 0;
    padding-left: 5px;
}

.googleBtn {

}
</style>
