<template>
    <nav>
        <ul>
            <li><a @click="addList">Create new list</a></li>
            <li><a @click="clearAlert">Clear all lists</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data(){
            return{
                confirmed: false,
                id: 0,
            };
        },
        methods:{
            addList(){
                this.$store.state.allLists.push({'ListItem': this.id});
                this.id++;
            },
            clearAlert(){
                this.$store.state.confirmDelete = true;
            },

        },
    };
</script>

<style scoped>
    
    
    ul{
        list-style-type: none;
        display: flex;   
    }

    ul li{
        margin: 0 1rem;
        
    }

    ul li:hover{
        cursor: pointer;
    }

    ul li a{
        font-size: 1.5rem;
        font-weight: bold;
    }

    @media (max-width: 800px) {
      ul li a{
        font-size: 1.2rem;
      }
    }
</style>