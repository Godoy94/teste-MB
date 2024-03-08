<template>
  <h1>{{ pessoaTitle }}</h1>
  <div class="container">
    <label>Nome</label>
    <input type="text" v-model="nome" />

    <div v-if="isPessoaFisica">
      <label>CPF</label>
      <input type="text" v-model="cpf" />

      <label>Data de nascimento</label>
      <input type="text" v-model="dataNascimento" />
    </div>

    <div v-else>
      <label>CNPJ</label>
      <input type="text" v-model="cnpj" />

      <label>Data de abertura</label>
      <input type="text" v-model="dataAbertura" />
    </div>

    <label>Telefone</label>
    <input type="text" v-model="telefone" />
  </div>

  <div class="footer">
    <BackButton @back="goToPreviousStep" />
    <ContinueButton
      @continue="goToNextStep"
      :class="{ disabled: !isStepValid }"
      :disabled="!isStepValid"
    />
  </div>
</template>

<script>
import BackButton from "../buttons/BackButton.vue";
import ContinueButton from "../buttons/ContinueButton.vue";

export default {
  name: "Step2",
  components: {
    BackButton,
    ContinueButton,
  },
  props: {
    formData: Object,
  },
  data() {
    const { nome, cpf, cnpj, dataNascimento, dataAbertura, telefone } =
      this.formData || {};
    return {
      nome: nome || "",
      cpf: cpf || "",
      cnpj: cnpj || "",
      dataNascimento: dataNascimento || "",
      dataAbertura: dataAbertura || "",
      telefone: telefone || "",
      currentStep: 1,
    };
  },
  computed: {
    isPessoaFisica() {
      return this.formData.tipoPessoa === "PF";
    },
    pessoaTitle() {
      return this.isPessoaFisica ? "Pessoa Física" : "Pessoa Jurídica";
    },
    isStepValid() {
      const {
        nome,
        cpf,
        cnpj,
        dataNascimento,
        dataAbertura,
        telefone,
        isPessoaFisica,
      } = this;
      if (isPessoaFisica) {
        return (
          nome.trim() !== "" &&
          cpf.trim() !== "" &&
          dataNascimento.trim() !== "" &&
          telefone.trim() !== ""
        );
      } else {
        return (
          nome.trim() !== "" &&
          cnpj.trim() !== "" &&
          dataAbertura.trim() !== "" &&
          telefone.trim() !== ""
        );
      }
    },
  },
  emits: ["back", "continue"],
  methods: {
    goToPreviousStep() {
      const { nome, cpf, cnpj, dataNascimento, dataAbertura, telefone } = this;
      this.$emit("back", { nome, cpf, cnpj, dataNascimento, dataAbertura, telefone });
    },
    goToNextStep() {
      const { nome, cpf, cnpj, dataNascimento, dataAbertura, telefone } = this;
      this.$emit("continue", { nome, cpf, cnpj, dataNascimento, dataAbertura, telefone });
    },
  },
};
</script>

<style scoped></style>
