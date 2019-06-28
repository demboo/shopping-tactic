<template>
    <div>
        <b-table striped :items="positions" :fields="{id:'id', name:'Nazwa', count:'Ilość', description:'Opis'}" />
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ShoppingList",
        data() {
            return {
                positions: null
            }
        },
        async mounted() {
            const {data} = await axios.get('/app/shopping-list-data');
            this.positions = data;
        }
    }
</script>

<style scoped lang="scss">

</style>