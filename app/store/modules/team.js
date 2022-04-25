/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import axios from 'axios';

// initial state
const state = {
  records: [],
};

// mutations
const mutations = {
  SET_RECORDS(state, records) {
    state.records = records;
  },
};

// actions
const actions = {
  fetchRecords({ state, commit }, params) {
    return axios
      .get('https://fe-task.getsandbox.com/performance', {
        params: { ...params, ...state.filters },
      })
      .then((response) => {
        commit('SET_RECORDS', response.data);
      });
  },
};

export default {
  namespaced: true,
  name: 'team',
  state,
  actions,
  mutations,
};
