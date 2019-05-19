<template>
    <v-content>
        <NavBar />

        <v-container v-if="newsData.length">
        <v-img
            :src="novelty.imageURL"
            aspect-ratio="2"
            lazy-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5WrlkUQT9BMeXPL4NVAwuD1n9hqczs__ff8Uv8XJnPfau98e">
        </v-img>

        <div>
            <h2 class="display-3">{{ novelty.title }}</h2>
            <div v-html="novelty.body"
                style="word-break: break-all;"></div>
            <span class="date mr-2 blue--text" >{{ novelty.nickname }}</span>
            <span class="date" >{{ novelty.created }}</span>
        </div>

        <div class="text-md-right text-sm-right text-xs-center">
            <v-btn flat
                   @click="showComments">
                <v-icon>mode_comment</v-icon>
                <span>{{ novelty.comments.length }}</span>
            </v-btn>
        </div>
    
        <transition name="fade">
            <div v-if="isVisible">
            <Comments />
            </div>
        </transition>
    </v-container>

    <Footer />
    </v-content>
</template>

<script>
import Comments from "@/components/Comments";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {mapGetters} from 'vuex';

export default {
    name: 'NewsDetails',
    components: {
        NavBar,
        Comments,
        Footer
    },
    data() {
        return {
            isVisible: false,
            postId: location.pathname.slice(6),
            likes: 0
        }
    },
    created() {
        this.getNewsData();
    },
    computed: {
        ...mapGetters([
            "newsData",
            "likedPost",
            "newsComments"
        ]),
        novelty() {
            return this.newsData.filter( item => item._id == this.postId)[0];
        },
        noveltyLikes() {
          return this.likes || this.novelty.likes;
        },
    },
    methods: {
      getNewsData() {
        this.$store.dispatch("getNewsData");
      },
      showComments() {
          this.isVisible = !this.isVisible;
      },
      addLikes() {
        let postId = this.postId;
        let userId = localStorage.getItem("userId");
        let isPostAlreadyExist = this.likedPost.filter( item => item["postId"] == postId);
        
        if ( userId ) {
          
          if ( isPostAlreadyExist.length ) {
            this.likes = this.novelty.likes - 1;
            this.updateUserInfo("like", "pull", postId ).then(() => {
              this.updateNewsInfo(postId, "likes", -1);
            }).catch(e => {
              console.log(e);
            });
          } else {
            this.likes = this.novelty.likes + 1;
            this.updateUserInfo("like", "push", postId ).then(() => {
              this.updateNewsInfo(postId, "likes", 1);
            }).catch(e => {
              console.log(e);
            });
          }
        }
      },
      updateUserInfo(action, method, postId) {
        return new Promise( (res, rej) => {
            let userId = localStorage.getItem("userId");
            if ( userId ) {
              let userInfo = {
                  "id": userId,
                  "action": action,
                  "method": method,
                  "value": {"postId": postId}
                }
              this.$store.dispatch("updateUserInfo", userInfo ).then(() => {
                this.$store.dispatch("getUser", {"id": userId});
              });
              res();
            } else {
              rej("User doesn't exist");
            }            
        });
      },
      updateNewsInfo(postId, key, step) {
        let noveltyObj = {
          "_id": postId,
          "key": key,
          "step": step
        };
        this.$store.dispatch("addLikes", noveltyObj).then(() => {
          this.getNewsData();
        });
      },
    },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
