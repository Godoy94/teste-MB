<template>
  <h1>Revise seus dados</h1>

  <div class="container">
    <label>Endereço de e-mail</label>
    <input type="text" v-model="formData.email" />

    <label>Nome</label>
    <input type="text" v-model="formData.nome" />

    <div v-if="isPessoaFisica">
      <label>CPF</label>
      <input type="text" v-model="formData.cpf" />

      <label>Data de nascimento</label>
      <input type="text" v-model="formData.dataNascimento" />
    </div>

    <div v-else>
      <label>CNPJ</label>
      <input type="text" v-model="formData.cnpj" />

      <label>Data de abertura</label>
      <input type="text" v-model="formData.dataAbertura" />
    </div>

    <label>Telefone</label>
    <input type="text" v-model="formData.telefone" />

    <label>Senha</label>
    <input type="text" v-model="formData.senha" />
  </div>

  <div class="footer">
    <BackButton @back="goToPreviousStep" />
    <RegisterButton
      @click="register"
      :class="{ disabled: !isStepValid }"
      :disabled="!isStepValid"
    />
  </div>

  <div v-if="showDialog" class="dialog-background">
    <div class="dialog">
      <h3>Registro bem sucedido</h3>
      <button @click="handleOk">OK</button>
    </div>
  </div>
</template>

<script>
import BackButton from "../buttons/BackButton.vue";
import RegisterButton from "../buttons/RegisterButton.vue";

export default {
  name: "Step4",

  components: {
    BackButton,
    RegisterButton,
  },
  props: {
    formData: Object,
  },
  data() {
    return {
      currentStep: 1,
      showDialog: false,
    };
  },
  emits: ["back", "returnToStep1"],
  computed: {
    isStepValid() {
      const { formData } = this;
      const {
        email,
        nome,
        cpf,
        dataNascimento,
        cnpj,
        dataAbertura,
        telefone,
        senha,
        tipoPessoa,
      } = formData || {};

      if (this.isPessoaFisica) {
        return (
          email.trim() !== "" &&
          nome.trim() !== "" &&
          cpf.trim() !== "" &&
          dataNascimento.trim() !== "" &&
          telefone.trim() !== "" &&
          senha.trim() !== ""
        );
      } else {
        return (
          email.trim() !== "" &&
          nome.trim() !== "" &&
          cnpj.trim() !== "" &&
          dataAbertura.trim() !== "" &&
          telefone.trim() !== "" &&
          senha.trim() !== ""
        );
      }
    },
    isPessoaFisica() {
      return this.formData && this.formData.tipoPessoa === "PF";
    },
  },
  methods: {
    goToPreviousStep() {
      this.$emit("back");
    },
    handleReturnToStep1() {
      const emptyFormData = {
        email: "",
        nome: "",
        cpf: "",
        dataNascimento: "",
        telefone: "",
        senha: "",
      };
      this.$emit("returnToStep1", emptyFormData);
    },
    formatFormData(formData) {
      const { tipoPessoa } = formData || {};
      let formattedData = {
        email: formData.email,
        nome: formData.nome,
        telefone: formData.telefone,
        senha: formData.senha,
        tipoPessoa,
      };

      if (tipoPessoa === "PF") {
        formattedData = {
          ...formattedData,
          cpf: formData.cpf,
          dataNascimento: formData.dataNascimento,
        };
      } else if (tipoPessoa === "PJ") {
        formattedData = {
          ...formattedData,
          cnpj: formData.cnpj,
          dataAbertura: formData.dataAbertura,
        };
      }

      return formattedData;
    },
    async register() {
      const formattedData = this.formatFormData(this.formData);
      console.log(formattedData);
      try {
        const response = await fetch("http://localhost:3000/registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        });

        if (response.status === 200) {
          this.showDialog = true;
        }
      } catch (error) {
        console.error("Erro ao enviar a solicitação:", error);
      }
    },
    resetForm() {
      const { formData } = this;
      formData.email = "";
      formData.nome = "";
      formData.cpf = "";
      formData.dataNascimento = "";
      formData.cnpj = "";
      formData.dataAbertura = "";
      formData.telefone = "";
      formData.senha = "";
      this.$emit("returnToStep1", formData);
    },
    handleOk() {
      this.resetForm();
      this.$emit("returnToStep1");
    },
  },
};
</script>

<style scoped>
.dialog-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
}

button {
  background-color: #ffa507;
  color: #ffffff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 250px;
  height: 35px;
  border-radius: 3px;
  transition: background-color 0.5s ease;
}

button:hover {
  background-color: #ffd13c;
}
</style>
