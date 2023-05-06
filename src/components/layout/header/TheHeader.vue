<template>
    <header :class="{darkTheme: isDark}">
        <section>
            <a href="./">
              <img src="assets/icons/logo.svg" alt="logo" />
            </a> 
        </section>
        <section>
            <the-navigation></the-navigation>
        </section>
        <section>
            <p class="switchLabel lightLabel">Light</p>
            <label class="switch">
                <input type="checkbox" @click="toggleTheme" :checked=isChecked>
                <span class="slider round"></span>
            </label>
            <p class="switchLabel darkLabel">Dark</p>
        </section>
    </header>
</template>

<script>
    import TheNavigation from './TheNavigation.vue';
    export default {
        components: {
            TheNavigation,
        },
        computed:{
            isDark(){
                return this.$store.state.isDark;
            },
            isChecked(){
              if (this.$store.state.isDark){
                return "checked";
              }
              else{
                return;
              };
            },
        },
        methods:{
            toggleTheme(){
                this.$store.state.isDark = !this.$store.state.isDark;
                localStorage.setItem('isDark', JSON.stringify(this.$store.state.isDark));
            },
        },
        created(){
            this.$store.state.isDark = Boolean(JSON.parse(localStorage.getItem('isDark')));
        }
    };
</script>

<style scoped>
  .darkTheme{
        background-color: #434343;
        color: #EEEEEE;
   }
   
   header{
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        height: 6vh;
        min-height: 4rem;
        background-color: #DEDEDE;
        color: #303030;
    }

    header section{
        display: flex;
        align-items: center;
    }

    section:nth-child(1){
        height: 100%;
        width: 30%;
    }

    section:nth-child(3){
        display: flex;
        justify-content: right;
        width: 30%;
    }

    img{
        height: 2.5rem;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      margin: 0 1rem;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-transition: .4s;
      transition: .4s;
    }

    p{
      font-size: 1rem;
      font-weight: bold;
    }

    input + .slider {
      background-color: #303030;
    }

    input:checked + .slider {
      background-color: white;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider:before {
      background-color: #303030;
    }


    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
    .lightLabel{
      color: #DEDEDE;
    }

    .darkLabel{
      color: #434343;
    }

    @media (max-width: 800px) {
      .switchLabel{
        display: none;
      }
    }

</style>