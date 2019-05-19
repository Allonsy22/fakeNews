import axios from 'axios';

const API_URL = "https://app-fake-news.herokuapp.com/news";
const API_URL_UPDATE_LIKES = API_URL + "/update/likes";
const API_URL_UPDATE_COMMENTS = API_URL + "/update/comments";
let newsInPage = 7;

const state = {
    newsData: [],
    isEditorDialog: false,
    currentPage: 1
}

const mutations = {
    UPDATE_NEWS_DATA( state, payload ) {
        state.newsData = payload;
    },
    SHOW_EDITOR_DIALOG( state, payload ) {
        state.isEditorDialog = true;
    },
    CLOSE_EDITOR_DIALOG( state, payload ) {
        state.isEditorDialog = false;
    },
    SET_CURRENT_PAGE( state, payload ) {
        state.currentPage = payload;
    }
}

const actions = {
    getNewsData( {commit} ) {
        return axios.get(API_URL ).then( response => {
            commit('UPDATE_NEWS_DATA', response.data.reverse() );
        });
    },
    addLikes( {commit}, obj ) {
        return axios.post(API_URL_UPDATE_LIKES, obj);
    },
    addComments( {commit}, obj ) {
        return axios.post(API_URL_UPDATE_COMMENTS, obj);
    },
    addNews( {commit}, obj ) {
        return axios.post(API_URL, obj);
    },
    showEditorDialog( {commit} ) {
        commit('SHOW_EDITOR_DIALOG');
    },
    closeEditorDialog( {commit} ) {
        commit('CLOSE_EDITOR_DIALOG');
    }, 
    setCurrentPage( {commit}, page ) {
        return new Promise( (res, rej) => {
            if ( page ) {
                commit('SET_CURRENT_PAGE', page);
                res();
            } else {
                rej("Page number error");
            }
        });
    }

}

const getters = {
    newsData: state => state.newsData,
    pagesCount: state => {
        let len = state.newsData.length;
        if ( len % newsInPage == 0 ) {
            return len / newsInPage;
        } else {
            return Math.floor( len / newsInPage ) + 1;
        }
    },
    newsLength: state => state.newsData.length,
    currentPage: state => state.currentPage,
    newsComments: state => state.newsData.map( item => item.comments ),
    isEditorDialog: state => state.isEditorDialog
}

const newsModule = {
    state,
    mutations,
    actions,
    getters
}

export default newsModule;