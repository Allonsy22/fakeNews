<template>
<div class="text-xs-center">
    <v-dialog
      v-model="isEditorDialog"
      persistent
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Add news
        </v-card-title>

        <v-container>
            <v-layout column>
                <v-flex>
                    <v-text-field label="Article title"
                                v-model="title"
                                counter="30"
                                maxlength="30"
                                required></v-text-field>
                </v-flex>

                <v-flex>
                    <v-text-field label="image url"
                                v-model="imageUrl"
                                placeholder="https://..."
                                hint="https required"
                                required></v-text-field>
                </v-flex>

                <v-flex>
                    Main content
                    <ckeditor :editor="editor" 
                            v-model="editorData" 
                            :config="editorConfig"></ckeditor>
                </v-flex>

                <v-flex>
                    <v-text-field label="Your name or nickname"
                                v-model="nickname"
                                counter="15"
                                maxlength="15"
                                required></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>
        <v-alert :value="true"
                type="warning"
                v-if="warning"
            >
            Some fields are empty.
        </v-alert>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning"
                flat
                @click="closeEditorDialog"
                >
            Cancel
          </v-btn>

          <v-btn color="primary"
                flat
                :loading="loading"
                :disabled="warning"
                @click="publishNews"
                >
            Publish
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {mapGetters} from 'vuex';

export default {
    name: 'app',
    data() {
        return {
            editor: ClassicEditor,
            title: 'Awesome title',
            imageUrl: 'https://...',
            editorData: 'Some text',
            nickname: 'anonymous',
            warning: false,
            editorConfig: {
                toolbar: [
                    'heading', 
                    '|', 'bold', 
                    'italic', 
                    'link', 
                    'bulletedList', 
                    'numberedList', 
                    'blockQuote'
                    ],
            },
            loading: false
        };
    },
    computed: {
        ...mapGetters([
            "isEditorDialog"
        ]),
    },
    methods: {
        publishNews() {
            this.checkFields();
            
            if ( !this.warning ) {
                this.loading = true;

                let novelty = {
                    "title": this.title,
                    "body": this.editorData,
                    "imageURL": this.imageUrl,
                    "nickname": this.nickname
                }

                this.$store.dispatch("addNews", novelty )
                .then( () => {
                return this.$store.dispatch("getNewsData");
                }).then(() => {
                    this.loading = false;
                    this.closeEditorDialog();
                    return;
                }).catch(e => console.log(e));
            } else {
                setTimeout(() => {
                    this.warning = false;
                }, 2000);
            }
        },
        checkFields() {
            if ( !this.title.trim() ||
                !this.imageUrl.trim() ||
                !this.editorData.trim() ||
                !this.nickname.trim() ) {
                return this.warning = true;
            } else {
                return this.warning = false;
            }
        },
        closeEditorDialog() {
            this.$store.dispatch("closeEditorDialog");
        }
    },
}
</script>