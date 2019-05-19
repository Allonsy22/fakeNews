<template>
  <div class="text-xs-center">
    <v-container>
      <v-layout justify-center>
        <v-flex xs8>
          <v-card>
            <v-card-text>
              <v-pagination
                v-model="page"
                :length="pagesCount"
                @input="setCurrentPage"
              ></v-pagination>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Pagination',
    data() {
        return {
            page: 1
        }
    },
    computed: {
      ...mapGetters([
        'pagesCount',
        'currentPage'
      ])
    },
    methods: {
      setCurrentPage() {
        this.$store.dispatch("setCurrentPage", this.page).then( () => {
          this.$vuetify.goTo(0);
        }).catch(e => console.log(e));
      }
    },
}
</script>
