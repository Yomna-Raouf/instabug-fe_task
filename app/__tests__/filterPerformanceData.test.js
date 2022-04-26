import Vue from 'vue';
import Vuex from 'vuex';

import team from '../store/modules/team.js';

Vue.use(Vuex);

let store;

describe('actions', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        records: [
          {
            date_ms: 1641772800000,
            performance: 0.2,
          },
          {
            date_ms: 1641859200000,
            performance: 0.33,
          },
          {
            date_ms: 1641945600000,
            performance: 0.53,
          },
          {
            date_ms: 1642032000000,
            performance: 0.31,
          },
          {
            date_ms: 1642118400000,
            performance: 0.65,
          },
          {
            date_ms: 1642204800000,
            performance: 0.88,
          },
          {
            date_ms: 1642291200000,
            performance: 0.07,
          },
        ],
        filteredRecords: [],
      },
      mutations: team.mutations,
      actions: {
        filterPerformanceDataByDate: team.actions.filterPerformanceDataByDate,
      },
    });
  });

  it(`mocks filtering team performance data based on date 
  - returns points between start and end dates 
  - end date chart data included `, () => {
    return store
      .dispatch('filterPerformanceDataByDate', {
        startDate: 1641772800000,
        endDate: 1642032000000,
      })
      .then(() => expect(store.state.filteredRecords).toEqual(
        expect.arrayContaining([
          expect.objectContaining(
            {
              date_ms: 1641772800000,
              performance: 0.2,
            },
            {
              date_ms: 1641945600000,
              performance: 0.83,
            },
            {
              date_ms: 1642032000000,
              performance: 0.31,
            },
          ),
        ]),
      ));
  });
});
