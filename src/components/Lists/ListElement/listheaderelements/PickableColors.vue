<template>
    <article class="row topSection">
        <section @click="returnColor(1)" class="block1"></section>
        <section @click="returnColor(2)" class="block2"></section>
        <section @click="returnColor(3)" class="block3"></section>
        <section @click="returnColor(4)" class="block4"></section>
    </article>
    <article class="row bottomSection">
        <section @click="returnColor(5)" class="block5"></section>
        <section @click="returnColor(6)" class="block6"></section>
        <section @click="returnColor(7)" class="block7"></section>
        <section @click="returnColor(8)" class="block8"></section>
    </article>
</template>

<script>
    export default {
        data(){
            return{
                colorSent: '',
            };
        },
        methods:{
            returnColor(blockNumber){
                this.colorSent= 'block' + blockNumber;
                this.$emit('color-selected', this.colorSent);
                this.$emit('reset-header');
            },
        },
        emits:[
            'color-selected',
            'reset-header',
        ],
    };
</script>

<style scoped>
    
    .row{
        display: flex;
    }
    .row section{
        width: 20px;
        height: 20px;
        margin: 5px;
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
    
    .block1:hover,
    .block2:hover,
    .block3:hover,
    .block4:hover,
    .block5:hover,
    .block6:hover,
    .block7:hover,
    .block8:hover{
        cursor: pointer;
    }

</style>