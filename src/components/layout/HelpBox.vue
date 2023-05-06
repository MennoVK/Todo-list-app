<template>
    <article :class="{darkTheme: isDark}">
        <header>
            <h1>
                No lists yet
            </h1>
        </header>
        <section>
            <p>Make sure to create a list by clicking <i>"create new list"</i> at the top</p>
        </section>
    </article>
</template>

<script>
    export default {
        computed:{
            isDark(){
                return this.$store.state.isDark;
            },
        },
    }
</script>

<style scoped>
    .darkTheme{
        color: #EEEEEE;
        background-color: #3c3c3c;
    }

    .darkTheme header{
        background-color: #444444;
    }

    article {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) !important;
        height: 30%;
        width: 30%;
        min-width: 300px;
        min-height: 150px;
        max-width: 400px;
        max-height: 250px;
        border-radius: 10px;
        background-color: rgb(0, 0, 0, 0.04);
        animation: animation 0.5s ease-in;
    }
    header{
        background-color: rgb(0, 0, 0, 0.1);
        border-radius: 10px 10px 0 0;
        text-align: center;
    }
    header h1{
        font-size: 2rem;
        padding: 0.5rem;
    }
    section{
        margin: 1rem;
    }
    section p{
        font-size: 1.2rem;
    }
    
    @keyframes animation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>