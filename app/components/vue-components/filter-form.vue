<template>
    <div  class="filterForm" >
        <div class="filterForm__container">
            <input  type="search" placeholder="search"  v-model="query" 
            @input="updateFilterQuery" />
            <button v-on:click="clearFilterQuery" class="c-button">
                Clear
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FilterFormComponent",
       
        data: function() {
            return {
                query: ''
            }
        },
        methods: {
            updateFilterQuery(Event) {     
                this.$emit('filter-employees', Event.target.value)
            },
            clearFilterQuery() {
                this.$emit('filter-employees', '');
                this.query = ''
            }
        },
    };
</script>
