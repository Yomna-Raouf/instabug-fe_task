/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import axios from 'axios';

// initial state
const state = {
  records: [],
  filteredRecords: [],
};

// mutations
const mutations = {
  SET_RECORDS(state, records) {
    state.records = records;
  },
  SET_FILTERED_RECORDS(state, records) {
    state.filteredRecords = records;
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
        commit('SET_FILTERED_RECORDS', response.data);
      });
  },
  filterPerformanceDataByDate({ state, commit }, dates) {
    const { startDate, endDate } = dates;
    const filteredPerformanceData = state.records.filter((record) => {
      return record.date_ms >= startDate && record.date_ms <= endDate;
    });
    commit('SET_FILTERED_RECORDS', filteredPerformanceData);
  },
};

export default {
  namespaced: true,
  name: 'team',
  state,
  actions,
  mutations,
};
