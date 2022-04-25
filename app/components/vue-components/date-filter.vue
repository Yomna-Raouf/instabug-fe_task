<template>
    <div  class="filterForm" >
        <div class="filterForm__container">
            <label>
                <span> Start date: </span>
                <input type="date"  v-model="startDate"  @change="startDate = $event.target.value"  />
            </label>

            <label>
                <span> End date: </span>
                <input type="date" v-model="endDate" @change="endDate = $event.target.value"  />
            </label>
           
        </div>
    </div>
</template>

<script>
    export default {
        name: "DateFilterComponent",
       
        data: function() {
           return {
               startDate: '',
               endDate: ''
           }
        },
        computed: {
            startEndDate() {
                return `${this.startDate}|${this.endDate}`;
            },
        },
        watch: {
            startEndDate(value) {
                const [startDate, endDate] = value.split('|');
                if(!this.isEmptyString(startDate) && !this.isEmptyString(endDate)) {
                    const startDate_ms = this.convertDateToUnixTimstamp(startDate);
                    const endDate_ms = this.convertDateToUnixTimstamp(endDate);

                    this.filterPerformanceData(startDate_ms,endDate_ms)
                }
            },
        },
        methods: {
            convertDateToUnixTimstamp: function(date) {
               return Math.round(new Date(date).getTime())
            },
            isEmptyString: function(str) {
                return /^\s*$/.test(str)
            },
            filterPerformanceData: function(startDate_ms,endDate_ms) {
                this.$store.dispatch('team/filterPerformanceDataByDate',
                    { 
                        startDate: startDate_ms,
                        endDate: endDate_ms
                    }
                )
            }
        },
    };
</script>
