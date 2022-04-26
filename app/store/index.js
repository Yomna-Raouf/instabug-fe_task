import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import team from './modules/team';

export default new Vuex.Store({
  modules: {
    team: team,
  },
});
