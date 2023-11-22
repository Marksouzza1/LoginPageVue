<template>

    <form class="loginBox">
        
        <div><h1>Login</h1>
         
        </div>
        <div>
            <label for="email">Email</label>
        </div>
        <div>
            <InputText type="text" v-model="email" autocomplete="off"/>
        </div>

        <div>
            <label for="senha">Senha</label>
        </div> 
        <div>
            <InputText type="password" v-model="senha"/>
        </div>
        
        <div>
            <button class="botao" @click.prevent="fazerLogin()">logar</button>
        </div>
           
        <div>
            <router-link to="formPage"><button type="submit" class="botao">Cadastro</button></router-link>          
        </div>

        <div v-if="showSucessLogin">
            voce esta logado
        </div>

        <div v-if="showInvalidUser">
            Dados invalidos!
        </div>
    
    </form>



</template>

<script>
import axios from 'axios';
import InputText from '@/components/InputText.vue';


    export default {
    name: 'LoginPage',

    data() {
        return{
            showSucessLogin:false,
            showInvalidUser:false,
            email:'',
            senha:''
        }
    },
    components: { InputText, 
    
    
    },
    methods:{

        async fazerLogin() {
      try {
       
        const response = await axios.post('http://localhost:3000/usuarios', {
          email: this.email,
          senha: this.senha,
        });

       this.showSucessLogin = true
        console.log('Login bem-sucedido:', response.data);
      } catch (error) {
        this.showInvalidUser=true
        console.error('Erro no login:', error);
      }
    },

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