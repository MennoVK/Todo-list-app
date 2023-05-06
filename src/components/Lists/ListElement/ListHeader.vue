<template>
    <header :class="[{colorwheelactive: getColor}, this.colorSelected]">
        <section v-if="!getColor">
            <input type="text" placeholder="Enter name" v-if="!listNameIsSet" v-on:keyup.enter="submitHeader" v-model="headerName" :class="{inputEmpty: !headerName}" />
        </section>
        <section v-if="getColor">
            <pickable-colors @color-selected="this.colorSelected = $event" @reset-header="colorPicker"></pickable-colors>
        </section>
        <section class="icons">
            <img src="assets/icons/colorwheel.svg" alt="colorwheel" @click="colorPicker" />
            <img src="assets/icons/exit.svg" alt="exit" v-if="!getColor" @click="removeList" />
        </section>
    </header>
</template>

<script>
    import PickableColors from './listheaderelements/PickableColors.vue';
    export default {
        components:{
            PickableColors,
        },
        data(){
            return{
                listNameIsSet: false,
                headerName: '',
                colorSelected: '',
                colorsVisible: false,
            };
        },       
        computed:{
            getColor(){
                return this.colorsVisible;
            },
        },
        props:[
            'passedIndex'
        ],
        methods:{
            colorPicker(){
                this.colorsVisible = !this.colorsVisible;
            },
            submitHeader(event){
                event.target.blur();
            },
            removeList(){
                this.$store.state.allLists.splice(this.passedIndex, 1);
            },
        },
        created(){
            this.randomNumber = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
            this.colorSelected = 'block' + this.randomNumber;
        },
    };
</script>

<style scoped>     
    header{
        border-radius: 1.5rem 1.5rem 0 0;
        height: 4rem;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
    }

    section{ 
        margin: auto 0;
    }

    section input{
        color: #303030
    }

    input{ 
        border: none;
        background-color: rgba(0, 0, 0, 0);
        font-size: 1.5rem;
        font-weight: bold;
        width: 95%;
        padding: 0.5rem;
        border-radius: 100px;
    }

    input::placeholder{
        text-align: center;
    }

    input:focus{
        outline: none;
        background-color: rgba(0, 0, 0, 0.100);
    }

    input:focus::placeholder{
        color: rgba(0, 0, 0, 0)
    }

    .inputEmpty{
        background-color: rgba(0, 0, 0, 0.100);
    }

    header h1{
        font-size: 1.5rem;
    }

    .icons{
        display: flex;
    }

    img{
        height: 2rem;
    }

    input:hover, img:hover{
        cursor: pointer;
    }

    .colorwheelactive{
        display: flex;
        justify-content: right;
    }

    .block1{
        background-color: hsl(45, 90%, 80%);
    }
    .block2{
        background-color: hsl(90, 90%, 80%);
    }
    .block3{
        background-color: hsl(135, 90%, 80%);
    }
    .block4{
        background-color: hsl(180, 90%, 80%);
    }
    .block5{
        background-color: hsl(225, 90%, 80%);
    }
    .block6{
        background-color: hsl(270, 90%, 80%);
    }
    .block7{
        background-color: hsl(315, 90%, 80%);;
    }
    .block8{
        background-color: hsl(360, 90%, 80%);;
    }
</style>