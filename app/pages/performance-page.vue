<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
     <date-filter />

    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import FilterFormComponent from "../components/vue-components/filter-form.vue"
import DateFilter from '../components/vue-components/date-filter.vue';
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    FilterFormComponent,
    DateFilter
  }
};
</script>
