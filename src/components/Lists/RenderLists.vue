<template>
    <section v-auto-animate>
        <list-element v-for="(ListItem, idx) in this.$store.state.allLists" :idx=idx :key=ListItem></list-element>
    </section>
</template>

<script>
    import ListElement from './ListElement.vue'
    export default {
        components:{
            ListElement,
        },
    };
</script>

<style scoped>  
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .fadeSlide-enter-active,
    .fadeSlide-leave-active {
        transition: all 0.5s ease;
    }

    .fadeSlide-enter-from{
        opacity: 0;
        transform: translateX(30px);
    }
    
    .fadeSlide-leave-to {
        opacity: 0;
        transform: translateX(-30px);
    }
</style>
