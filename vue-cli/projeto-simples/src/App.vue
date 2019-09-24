<template>
    <div id="app">
        
         {{ titulo }}
         
         <button @click="titulo += '#'" >teste</button>
         
         </div>    
</template>
<script>
export default {
    data: function() {
        return {
            titulo: 'Teste data usando Vue JS!!'
        }
    }


}
</script>
<style>
    #app {
        background: blueviolet;
        color: white;
    }

</style>
