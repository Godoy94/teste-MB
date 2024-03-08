<template>
  <h1>Senha de acesso</h1>
  <div class="container">
    <label>Sua senha</label>
    <input type="text" v-model="senha" />
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
  name: "Step3",
  components: {
    BackButton,
    ContinueButton,
  },
  props: {
    formData: Object,
  },
  data() {
    const { senha } = this.formData || {};
    return {
      senha: senha || "",
      currentStep: 1,
    };
  },
  emits: ["back", "continue"],
  computed: {
    isStepValid() {
      return this.senha.trim() !== "";
    },
  },
  methods: {
    goToPreviousStep() {
      const { senha } = this;
      this.$emit("back", { senha });
    },
    goToNextStep() {
      const { senha } = this;
      this.$emit("continue", { senha });
    },
  },
};
</script>

<style scoped></style>
