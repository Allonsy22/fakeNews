<template>
<v-container mt-3 v-if="newsOnPage.length">
    <v-layout>
    <v-flex md12>
      <v-card>
        <router-link :to="'/page/' + newsOnPage[0]._id"
                                     class="link">
          <v-layout :class="{'column': $vuetify.breakpoint.smAndDown}">
              <v-flex md6 sm4>
                  <v-img
                  :src="newsOnPage[0].imageURL"
                  aspect-ratio="2"
                  ></v-img>
              </v-flex>

              <v-flex md6>
                <v-layout class="column" md6>
                  <v-flex>
                      <v-card-title primary-title>
                      <div>
                        <h3 class="headline" >{{ newsOnPage[0].title }}</h3>
                        <div class="mt-3" v-html="newsOnPage[0].body.slice(0, 350) + '...'"></div>
                      </div>
                      <span>{{  newsOnPage[0].created }}</span>
                      </v-card-title>
                  </v-flex>

                  <v-card-actions>
                      <v-btn flat>
                          <v-icon>mode_comment</v-icon>
                          <span>{{ newsOnPage[0].comments.length }}</span>
                      </v-btn>
                  </v-card-actions>  
                </v-layout>
              </v-flex>
          </v-layout>
        </router-link>
      </v-card>
    </v-flex>
  </v-layout>

  <v-layout row wrap v-if="newsOnPage.length > 1">
  <v-layout mt-3 justify-center
            v-for="n in newsOnPage.length - 1"
            :key="n">
  <v-flex xs12 sm11 md11 style="width: 300px">
    <v-card>
      
      <router-link :to="'/page/' + newsOnPage[n]._id" class="link">
        <v-img
          :src="newsOnPage[n].imageURL"
          aspect-ratio="2.75"
          lazy-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5WrlkUQT9BMeXPL4NVAwuD1n9hqczs__ff8Uv8XJnPfau98e"
        ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ newsOnPage[n].title }}</h3>
          <div v-html=" newsOnPage[n].body.slice(0, 130) + '...' "
              style="word-break: break-all;"></div>
        </div>
        <span class="date" >{{ newsOnPage[n].created }}</span>
      </v-card-title>
      
      <v-card-actions>
          <v-btn flat>
            <v-icon>mode_comment</v-icon>
            <span>{{ newsOnPage[n].comments.length }}</span>
          </v-btn>

      </v-card-actions>
      </router-link>
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
        "newsData",
        "currentPage",
        "newsLength"
      ]),
      newsOnPage() {
        // 7 news per page
        const NPP = 7;
        if ( this.currentPage == 1 ) {
          return this.newsData.slice(0, NPP);
        } else if ( this.currentPage > 1) {
          let from = ( this.currentPage - 1 ) * NPP;
          let to = this.currentPage * NPP;
          return this.newsData.slice(from, to + 1);
        } 
      }
    },
    methods: {
      getNewsData() {
        this.$store.dispatch("getNewsData");
      },
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


