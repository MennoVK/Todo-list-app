<template>
    <section class="wrapper" >
        <section  class="todoSection">          
            <section v-auto-animate>
                <section  v-for="(item, idx) in items" :key=item class="todoItem alignTodoItem" :class="{darkTheme: isDark}">
                    <section class="icons">
                        <img src="assets/icons/check.svg" alt="check" @click=completeItem(idx) :class="{colorInvert: isDark}" />
                    </section>
                    <section>
                        <p>{{item}}</p>
                    </section>
                    <section class="icons">
                        <img src="assets/icons/exit.svg" alt="exit" @click="removeItem(idx)" :class="{colorInvert: isDark}" />
                    </section>
                </section>
            </section>    
            <section @click="showInput">
                <section v-if="!clicked" class="todoItem alignRest addItem" :class="{darkTheme: isDark}">
                    <img src="assets/icons/plus.svg" alt="plus" :class="{colorInvert: isDark}"/>
                    <p>Add Item</p>
                </section>
                <section v-else class="todoItem alignRest" :class="{darkTheme: isDark}">
                    <input type="text" @blur="hideInput" v-on:keyup.enter="submitItem" v-model.trim="inputText" ref="input" class="inputfield" :class="{darkTheme: isDark}" />
                </section>
            </section>
        </section> 
        <section class="completedSection">
            <section>
                <p  v-if="completedItems.length !== 0" class="todoItem alignRest" :class="{darkTheme: isDark}">Completed Items</p>
                <section class="completedList">
                        <p v-for="(completedItem, completedIndex) in completedItems" :key="completeItem" @click="removeCompleted(completedIndex)" class="completedItem completedItems" :class="{darkTheme: isDark}">{{completedItem}}</p>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                clicked: false,
                inputText: '',
                items: [],
                completedItem: '',
                completedItems: [],
            };
        },
        computed:{
            isDark(){
                return this.$store.state.isDark;
            }
        },
        methods:{
            showInput(){
                this.inputText = '';
                this.clicked = true;
                this.$nextTick(() => this.$refs.input.focus());   
            },
            hideInput(){
                this.clicked = false;
            },
            submitItem(){
                this.thrownError = false;
                if (this.inputText === ''){
                    alert("List item cannot be empty");
                }
                else{
                    this.items.push(this.inputText);
                    this.clicked = false;
                }
            },
            removeItem(idx){
                this.items.splice(idx, 1);
            },
            completeItem(idx){
                this.completedItem = this.items[idx];
                this.completedItems.push(this.completedItem);
                this.items.splice(idx, 1);
            },
            removeCompleted(completedIndex){
                this.completedItem = this.completedItems[completedIndex];
                this.items.push(this.completedItem);
                this.completedItems.splice(completedIndex, 1);
            },
        },
    };
</script>

<style scoped>       
    .colorInvert{
        filter: invert(100%);
    }
    
    .wrapper{
        height: calc(100% - 4rem);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .wrapper p{
        font-size: 1.2rem;
    }
    
    .todoSection{
        overflow-y: auto;
    }

    .todoItem{
        text-align: center;
        border-bottom: 2px solid #CCCCCC;
        display: flex;
        margin: 0 1rem;
        min-height: 3rem;
        height: 5vh;
        color: #303030;
    }

    .todoItem img {
        margin: auto 0.2rem;
        
    }

    .todoItem p:hover{
        cursor: default;
    }

    .todoItem img:hover, .addItem p:hover{
        cursor: pointer;
    }

    .alignTodoItem{
        justify-content: space-between;
        display: flex;
        align-items: center;
    }

    .alignRest{
        justify-content: center;
        display: flex;
        align-items: center;
    }

    .todoItem img{
        height: 1rem;
    }

    .icons{
        display: flex;
        width: 20%;
        justify-content: center; 
    }
    .inputfield{ 
        border: none;
        background-color: rgba(0, 0, 0, 0.3);
        font-size: 1rem;
        width: 60%;
        padding: 0.5rem;
        margin: 0.5rem;
        border-radius: 100px;
        text-align: center;
    }

    .inputfield:focus{ 
        outline: none;
    }

    .completedList{
        overflow-y: auto;
        max-height: 5rem;
    }

    .completedItems{
        display: flex;
        justify-content: center;
        border-bottom: 2px solid #CCCCCC;
        margin: 0 1rem;
    }
    
    .completedItem{
        text-decoration: line-through;
    }

    .completedItem:hover{
        cursor: pointer;
    }

    .completedItem{
        color:#303030;
    }

    .darkTheme{
        border-bottom: 2px solid #434343;
        color: #EEEEEE;
    }
    
    .showItem-enter-active,
    .showItem-leave-active {
        transition: all 0.5s ease;
    }

    .showItem-enter-from,
    .showItem-leave-to{
        transform: scale(0.8);
        opacity: 0;
    }    


</style>