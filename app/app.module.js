import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import store from './store';
import NotfoundPage from './pages/404-page.vue';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import FilterFormComponent from './components/vue-components/filter-form.vue';

const appModule = angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

appModule.config(($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store: store,
  });
});

appModule.directive('vNotfoundPage', (createVueComponent) => {
  return createVueComponent(Vue.component('notfoundPage', NotfoundPage));
});

appModule.directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(
    Vue.component('performancePageComponent', PerformancePageComponent),
  );
});

appModule.directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(
    Vue.component('performanceChartComponent', PerformanceChartComponent),
  );
});

appModule
  .value('FilterFormComponent', FilterFormComponent)
  .directive('vFilterForm', (createVueComponent) => {
    return createVueComponent(
      Vue.component('FilterFormComponent', FilterFormComponent),
    );
  });

// custom filters

appModule.filter('highlight', function ($sce) {
  return function (str, termsToHighlight) {
    const regex = new RegExp('(' + termsToHighlight + ')', 'gi');
    return $sce.trustAsHtml(
      str.replace(regex, '<span style="background: yellow;">$&</span>'),
    );
  };
});
