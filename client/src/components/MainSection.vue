<template>
<v-container mt-3 v-if="newsData.length">
    <v-layout>
    <v-flex md12>
      <v-card>
       <v-layout :class="{'column': $vuetify.breakpoint.smAndDown}">
           <v-flex md6 sm4>
               <router-link :to="'/page/' + mainNovelty._id">
                <v-img
                :src="mainNovelty.imageURL"
                aspect-ratio="2"
                ></v-img>
               </router-link>
           </v-flex>

            <v-flex md6>
              <v-layout class="column" md6>
                <v-flex>
                    <v-card-title primary-title>
                    <div>
                        <router-link :to="'/page/' + mainNovelty._id"
                                     class="link">
                          <h3 class="headline" >{{ mainNovelty.title }}</h3>
                          <div class="mt-3" v-html="mainNovelty.body.slice(0, 350) + '...'"></div>
                        </router-link>
                    </div>
                    <span>{{  mainNovelty.created }}</span>
                    </v-card-title>
                </v-flex>

                <v-card-actions>
                    <v-btn flat
                        @click="addLikes(mainNovelty._id)"
                        :disabled="isDisabled">
                        <v-icon class="red--text text--lighten-3">favorite</v-icon>
                        <span>{{ mainNovelty.likes }}</span>
                    </v-btn>
                    <router-link :to="'/page/' + mainNovelty._id"
                                  class="link">
                      <v-btn flat>
                        <v-icon>mode_comment</v-icon>
                        <span>{{ mainNovelty.comments.length }}</span>
                    </v-btn>
                    </router-link>
                </v-card-actions>  
              </v-layout>
            </v-flex>
            
       </v-layout>
      </v-card>
    </v-flex>
  </v-layout>

  <v-layout row wrap v-if="newsData.length > 1">
  <v-layout mt-3 justify-center
            v-for="n in newsData.length - 1"
            :key="n">
  <v-flex xs12 sm11 md11 style="width: 300px">
    <v-card>
      
      <router-link :to="'/page/' + newsData[n]._id" class="link">
        <v-img
          :src="newsData[n].imageURL"
          aspect-ratio="2.75"
        ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ newsData[n].title }}</h3>
          <div v-html=" newsData[n].body.slice(0, 130) + '...' "></div>
        </div>
        <span class="date" >{{ newsData[n].created }}</span>
      </v-card-title>
      </router-link>
  
      <v-card-actions>
          <v-btn flat
                 @click="addLikes(newsData[n]._id)"
                 :disabled="isDisabled">
              <v-icon class="red--text text--lighten-3">favorite</v-icon>
              <span>{{ newsData[n].likes }}</span>
          </v-btn>
          <router-link :to="'/page/' + newsData[n]._id"
                       class="link">
            <v-btn flat>
              <v-icon>mode_comment</v-icon>
              <span>{{ newsData[n].comments.length }}</span>
            </v-btn>
          </router-link>

      </v-card-actions>
    </v-card>
  </v-flex>
  </v-layout>
</v-layout>

  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'MainSection',
    data() {
      return {
        isDisabled: false
      }
    },
    created() {
      this.getNewsData();
    },
    computed: {
      ...mapGetters([
        "mainNovelty",
        "newsData",
        "likedPost"
      ]),
    },
    methods: {
      getNewsData() {
        this.$store.dispatch("getNewsData");
      },
      addLikes(postId) {
        this.isDisabled = true;
        let userId = localStorage.getItem('userId');
        
        if ( userId ) {
          let isPostAlreadyExist = this.likedPost.filter( item => item["postId"] == postId);
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

.link {
 text-decoration: none;
 color: #000000;
}

.link:hover {
  color: #3498db;
}

.date {
  font-size: .9em;
}

</style>


