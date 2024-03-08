<template>
  <h1>Seja Bem-vindo(a)</h1>
  <div class="container">
    <label>Endereço de e-mail</label>
    <input type="text" v-model="email" />

    <div class="row">
      <input
        type="radio"
        id="pf"
        name="tipoPessoa"
        value="PF"
        v-model="tipoPessoa"
        :checked="tipoPessoa === 'PF'"
        @click="selectTipoPessoa('PF')"
      />
      <label for="pf">Pessoa Física</label>
      <input
        type="radio"
        id="pj"
        name="tipoPessoa"
        value="PJ"
        v-model="tipoPessoa"
        :checked="tipoPessoa === 'PJ'"
        @click="selectTipoPessoa('PJ')"
      />
      <label for="pj">Pessoa Jurídica</label>
    </div>
  </div>

  <div class="footer">
    <ContinueButton
      @click="goToNextStep"
      :class="{ disabled: !isStepValid }"
      :disabled="!isStepValid"
    />
  </div>
</template>

<script>
import ContinueButton from "../buttons/ContinueButton.vue";

export default {
  name: "Step1",
  components: {
    ContinueButton,
  },
  props: {
    formData: Object,
  },
  data() {
    const { email, tipoPessoa } = this.formData || {};
    return {
      email: email || "",
      tipoPessoa: tipoPessoa || "",
      currentStep: 1,
    };
  },
  emits: ["continue"],
  computed: {
    isStepValid() {
      const { email, tipoPessoa } = this;
      return email.trim() !== "" && tipoPessoa.trim() !== "";
    },
  },
  methods: {
    goToNextStep() {
      const { email, tipoPessoa } = this;
      this.$emit("continue", { email, tipoPessoa });
    },
    selectTipoPessoa(tipo) {
      this.tipoPessoa = this.tipoPessoa === tipo ? "" : tipo;
    },
  },
};
</script>

<style scoped></style>
