const axios = require('axios');

const API_URL = "https://app-fake-news.herokuapp.com/user";
const API_URL_ACTION = API_URL + "/action";

const state = {
    user: []
}

const mutations = {
    GET_USER ( state, payload ) {
        state.user = payload;
    },
}

const actions = {
    getUser( {commit}, id ) {
        return axios.post(API_URL, id ).then( response => {
            commit("GET_USER", response.data);
        });
    },
    updateUserInfo( {commit}, obj ) {
        return axios.post(API_URL_ACTION, obj).then( response => {
            //
        });
    }
}

const getters = {
    userName: state => {
        return state.user['first_name'] + " " + state.user['last_name'];
    },
    likedPost: state => state.user.likedPost
}

const userModule = {
    state,
    mutations,
    actions,
    getters
}

export default userModule;