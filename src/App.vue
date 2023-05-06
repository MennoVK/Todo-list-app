<template>
    <the-header></the-header>
     <section v-auto-animate>
        <confirm  v-if="this.$store.state.confirmDelete"></confirm>
     </section>
    <help-box v-if="!this.$store.state.allLists.length"></help-box>
    <render-lists></render-lists>
</template>

<script>
    import RenderLists from './components/Lists/RenderLists.vue';
    import HelpBox from './components/layout/HelpBox.vue';
    import Confirm from './components/layout/Confirm.vue';
    export default {
        components: {
            RenderLists,
            HelpBox,
            Confirm
        },
        watch: {
            '$store.state.isDark': function() {
                if(!this.$store.state.isDark){
                    document.body.style.backgroundColor = "#CCCCCC";
                }
                else{
                    document.body.style.backgroundColor = "#303030";
                };
            }
        },
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    
    body{
        background-color: #CCCCCC;
    }
</style>
