<template>
    <article :class="{darkTheme: isDark}">
        <list-header :passedIndex="idx"></list-header>
        <list-body></list-body>
    </article>
</template>

<script>
    import listHeader from "./ListElement/ListHeader.vue";
    import ListBody from "./ListElement/ListBody.vue";
    export default {
        components: {
            listHeader,
            ListBody,
        },
        data(){
            return{
                randomNumber: null,
            };
        },
        computed:{
            isDark(){
                return this.$store.state.isDark;
            }
        },
        props:[
            'idx',
        ],
    };
</script>

<style scoped>
    .darkTheme{
        background-color: #4F4F4F;
    }
    
    article{
        background-color: #EEEEEE;
        width: 20vw;
        min-width: 300px;
        height: 50vh;
        min-height: 400px;
        border-radius: 1.5rem;
        margin: 2rem;
        overflow: hidden;
    }
</style>