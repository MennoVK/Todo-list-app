<template>
    <article>
        <section>
        </section>
        <section class="text">
            <p v-if="this.$store.state.allLists.length">Are you sure? Clicking Confirm will delete all to-do lists</p>
            <p v-if="this.$store.state.allLists.length" @click="confirmDelete"><b>Confirm</b></p>
            <p v-if="!this.$store.state.allLists.length">There are no lists</p>
        </section>
        <section class="icon">
            <img @click="cancelDelete" src="assets/icons/exit.svg" alt="exit" />
        </section>
    </article>
    
</template>

<script>
    export default {
        methods:{
            confirmDelete(){
                this.$store.state.allLists.splice(0);
                this.$store.state.confirmDelete = false;
            },
            cancelDelete(){
                this.$store.state.confirmDelete = false;
            }
        }
    }
</script>

<style scoped>
    article{
        background-color: rgb(202, 28, 28);
        display: flex;
        justify-content: space-between;
    }
    p{
        padding: 0.5rem;
    }
    img{
        margin: 0.5rem;
    }
    .text{
        text-align: center;  
        display: flex;
        width: 50%;
        justify-content: center;
    }
    img{
        height: 1rem;
    }
    .icon, b:hover{
        cursor: pointer;
    }
</style>