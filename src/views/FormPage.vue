<template>

    <div class="cadastro">
       <h1>Cadastro</h1>

    <div class="label">
        <label >Nome</label>
    </div>
         <div>
            <InputText type="text" v-model="nome" autocomplete="off" />
         </div>

         <div class="label">
            <label >Sobrenome</label>
        </div>
             <div>
                <InputText type="text" v-model="sobrenome" autocomplete="off" />
             </div>

             <div class="label">
                <label >Telefone</label>
            </div>
                 <div>
                    <InputText type="text" v-model="telefone" autocomplete="off" />
                 </div>
            
                 <div class="label">
                    <label >Email</label>
                </div>
                     <div>
                        <InputText type="text" v-model="email" autocomplete="off" />
                     </div>

                     <div class="label">
                        <label >Senha</label>
                    </div>
                         <div>
                            <InputText type="password" v-model="senha" autocomplete="off" />
                         </div>     
                         <div v-if="showInvalidEmail">
                           Email existente !
                         </div>
                         <div v-if="showSuccessMessage">
                           Dados cadastrados com sucesso!
                         </div>

                 <div>
                  <button type="submit" id="botao" @click.prevent="fazerCadastro()">Cadastrar</button>
               </div> 
               <div>
                  <RouterLink to="/">voltar</RouterLink>
               </div> 

    </div>

</template>

<script>
import axios from 'axios';
import InputText from '@/components/InputText.vue';

    export default {
    name: 'FormPage',
    data(){

      return{ 
         showInvalidEmail:false,
         showSuccessMessage: false,
         nome:"",
         sobrenome: "",
         telefone: "",
         email: "",
         senha: ""
      }
   
    },
    components: { InputText },
    methods:{

      async fazerCadastro() {
  try {
    
    const emailExistente = await this.verificarEmailExistente();

    if (emailExistente) {
      this.showInvalidEmail=true;
      console.error('E-mail já cadastrado. Escolha outro e-mail.');
      return;
    }

   
    const response = await axios.post('http://localhost:3000/usuarios', {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      senha: this.senha,
    });

    this.showSuccessMessage = true;
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    console.log('Cadastro realizado:', response.data);
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
  }
},

async verificarEmailExistente() {
  try {
   
    const response = await axios.get(`http://localhost:3000/usuarios?email=${this.email}`);
    
    
    return response.data.length > 0;
  } catch (error) {
    console.error('Erro ao verificar e-mail existente:', error);
    return false;
  }
}


    }
}
</script>

<style scoped>
    .cadastro{
    display: flex;
    flex-direction: column;
    align-items: center;
    color:black;
    background: white;
    border-radius: 10px;
    padding: 15px;
    width: 500px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.363);
    margin: auto;
    }

    .cadastro div {
        padding: 3px;
    }

   .label{
    align-self: flex-start;
    margin-left: 50px;
    
   }

   #botao {
      background-color: rgb(1,110,150);
      border-radius:20px;
      border:1px solid #4e6096;
      display:inline-block;
      cursor:pointer;
      color:#ffffff;
      font-family:Arial;
      font-size:17px;
      text-decoration:none;
      text-shadow:0px 1px 0px #283966;
      width: 300px;
      height: 40px;
   }
   #botao:hover {
      background-color:#476e9e;
   }
   #botao:active {
      position:relative;
      top:1px;
   }



</style>