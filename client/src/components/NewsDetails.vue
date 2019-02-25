<template>
    <v-content>
        <NavBar />

        <v-container v-if="newsData.length">
        <v-img
            :src="novelty.imageURL"
            aspect-ratio="2">
        </v-img>

        <div class="mt-3">
            <h2 class="display-3">{{ novelty.title }}</h2>
            <div v-html="novelty.body"></div>
            <span class="date" >{{ novelty.created }}</span>
        </div>

        <div class="text-md-right text-sm-right text-xs-center">
            <v-btn flat
                   @click="addLikes($event)"
                   :disabled="isDisabled">
                <v-icon class="red--text text--lighten-3">favorite</v-icon>
                <span>{{ novelty.likes }}</span>
            </v-btn>
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
            isDisabled: false
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
        }
    },
    methods: {
      getNewsData() {
        this.$store.dispatch("getNewsData");
      },
      showComments() {
          this.isVisible = !this.isVisible;
      },
      addLikes() {
        this.isDisabled = true;
        let postId = this.postId;
        let userId = localStorage.getItem("userId");
        let isPostAlreadyExist = this.likedPost.filter( item => item["postId"] == postId);
        
        if ( userId ) {
          
          if ( isPostAlreadyExist.length ) {
            this.updateUserInfo("like", "pull", postId );
            this.updateNewsInfo(postId, "likes", -1);
          } else {
            this.updateUserInfo("like", "push", postId );
            this.updateNewsInfo(postId, "likes", 1);
          }
        }
        setTimeout(() => {
          this.isDisabled = false;
        }, 1500);
      },
      updateUserInfo(action, method, postId) {
        let userId = localStorage.getItem("userId");
        let userInfo = {
            "id": userId,
            "action": action,
            "method": method,
            "value": {"postId": postId}
          }
        this.$store.dispatch("updateUserInfo", userInfo );
        this.$store.dispatch("getUser", {"id": userId});
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
      }
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
