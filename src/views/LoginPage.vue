<template>

    <div class="loginBox">
        <div><h1>Login</h1>
            
        </div>
        <div>
            <label for="email">Email</label>
        </div>
        <div>
            <InputText v-model="email"/>
        </div>

        <div>
            <label for="">Senha</label>
        </div> 
        <div>
            <InputText/>
        </div>
        
        <div>
            <button class="botao">logar</button>
        </div>
           
        <div>
            <router-link to="formPage"><button type="submit" class="botao">Cadastro</button></router-link>          
        </div>


        </div>



</template>

<script>
import InputText from '@/components/InputText.vue';


    export default {
    name: 'LoginPage',

    data() {
        return{
            email:''
        }
    },
    components: { InputText, 
    
    
    }
}
</script>

<style scoped>


.loginBox{
    
    display: flex;
    flex-direction: column;
    color:black;
    background: white;
    border-radius: 10px;
    padding: 15px;
    width: 500px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.363);
    align-items: center;
    margin-top: 200px;
    margin-left: 950px;
    
}

.botao {
    background-color: rgb(1,110,150);
    border-radius:20px;
    border:1px solid #4e6096;
    margin-top: 5px;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:17px;
    text-decoration:none;
    text-shadow:0px 1px 0px #283966;
    width: 300px;
    height: 30px;
}

.botao:hover {
	background-color:#476e9e;
}
.botao:active {
	position:relative;
	top:1px;
}




</style>