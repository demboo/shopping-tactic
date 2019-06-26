<template>
    <div>
        <b-table striped :items="positions" :fields="{id:'id', name:'Nazwa', count:'Ilość', description:'Opis'}" />
    </div>
</template>

<script>
    export default {
        name: "ShoppingList",
        data() {
            return {
                positions: [
                    {
                        id: 1,
                        name: 'mleko',
                        count: 1,
                        description: 'w proszku'
                    },
                    {
                        id: 1,
                        name: 'chleb razowy',
                        count: 6,
                        description: 'w proszku'
                    },
                    {
                        id: 1,
                        name: 'jaja',
                        count: 24,
                        description: 'w proszku'
                    },
                    {
                        id: 1,
                        name: 'woda gazowana zgrzewka',
                        count: 1,
                        description: 'w proszku'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>