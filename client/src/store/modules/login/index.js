import axios from 'axios';

const API_URL = "https://app-fake-news.herokuapp.com/login";

const state = {
    isLogged: false
}

const mutations = {
    LOGGED_TRUE ( state ) {
        state.isLogged = true;
    },
    LOGGED_FALSE ( state ) {
        state.isLogged = false;
    }
}

const actions = {
    login ( {commit}, user ) {
        commit('LOGGED_TRUE');
        localStorage.setItem("login", true);
        localStorage.setItem("userId", user.id );
        return axios.post(API_URL, user ).then( response => {
            
        });
    },
    logout ( {commit} ) {
        return new Promise( resolve => {
            commit("LOGGED_FALSE");
            localStorage.removeItem("userId");
            localStorage.setItem("login", false);
            resolve();
        });
    },
}

const getters = {

}

const loginModule = {
    state,
    mutations,
    actions,
    getters
}

export default loginModule;