<template>
    
    <input class="textInput"  v-model="valor"  autocomplete="off"  required>
</template>

<script>
export default{ 
    name:'inputText',
    data(){
        return{
            valor:''
        }
    }
}
</script>


<style>
.textInput{
    width: 400px;
    height: 30px;
    border-radius: 5px;
    border-style: solid;
}

</style>