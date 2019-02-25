import axios from 'axios';

const API_URL = "https://app-fake-news.herokuapp.com/news";
const API_URL_UPDATE_LIKES = "https://app-fake-news.herokuapp.com/news/update/likes";
const API_URL_UPDATE_COMMENTS = "https://app-fake-news.herokuapp.com/news/update/comments";
let newsInPage = 7;

const state = {
    newsData: [],
}

const mutations = {
    UPDATE_NEWS_DATA( state, payload ) {
        state.newsData = payload;
    },
}

const actions = {
    getNewsData( {commit} ) {
        axios.get(API_URL).then( response => {
            commit('UPDATE_NEWS_DATA', response.data );
        });
    },
    addLikes( {commit}, obj ) {
        return axios.post(API_URL_UPDATE_LIKES, obj);
    },
    addComments( {commit}, obj ) {
        return axios.post(API_URL_UPDATE_COMMENTS, obj);
    }

}

const getters = {
    newsData: state => state.newsData,
    mainNovelty: state => state.newsData[0],
    pagesCount: state => {
        let len = state.newsData.length;
        if ( len % newsInPage == 0 ) {
            return len / newsInPage;
        } else {
            return Math.floor( len / newsInPage ) + 1;
        }
    },
    newsComments: state => state.newsData.map( item => item.comments )
}

const newsModule = {
    state,
    mutations,
    actions,
    getters
}

export default newsModule;