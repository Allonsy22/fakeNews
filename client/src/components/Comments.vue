<template>
    <v-container mt-3>
        <v-layout>
            <v-flex md8 sm8 xs8>
                <v-text-field
                    label="Nickname"
                    v-model="nickname"
                ></v-text-field>
                <v-textarea
                    outline
                    v-model="comment"
                ></v-textarea>
            </v-flex>

            <v-flex >
                <v-btn flat style="color: blue"
                        @click="addComment"
                        :disabled="comment.replace(/\s/g, '') == ''">
                    <v-icon>send</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row v-for="n in comments.length"
                      :key="n"
                      mt-3>
            <v-flex md1 sm1 xs1 mr-5>
                <v-avatar
                    :size="40"
                    color="grey lighten-4">
                    <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                    </v-avatar>
                    <span>{{ comments[n - 1].userName }}</span>
            </v-flex>
            
            <v-flex md11 sm10 xs10>
                <div class="comments">{{ comments[n - 1].comment }}</div>
            </v-flex>
            <hr class="hr">
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Comments',
    data() {
        return {
            comment: "",
            nickname: "",
            postId: location.pathname.slice(6),
        }
    },
    computed: {
        ...mapGetters([
            "userName",
            "newsComments",
            "newsData"
        ]),
        comments() {
            return this.newsData.filter( item => {
                return item._id == this.postId
            })[0].comments.reverse();
        },
    },
    methods: {
        getNewsData() {
        this.$store.dispatch("getNewsData");
      },
        addComment() {
        let postId = this.postId;
        
        if ( this.nickname.trim().length > 0 ) {
            let obj = {
                "postId": postId,
                "value": {
                    "userName": this.nickname,
                    "comment": this.comment
                }
            }
            this.$store.dispatch("addComments", obj).then( () => {
                this.getNewsData();
            });
            this.comment = "";
        } else {
            let obj = {
                "postId": postId,
                "value": {
                    "userName": "No name",
                    "comment": this.comment
                }
            }
            this.$store.dispatch("addComments", obj).then( () => {
                this.getNewsData();
            });
            this.comment = "";
        }
      },
    },
}
</script>

<style scoped>
.hr {
    border-width: 2px;
}

.comments {
    width: 100%;
    word-break: break-all; 
    word-wrap: break-word;
}
</style>

