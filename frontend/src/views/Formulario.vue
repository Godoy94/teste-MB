<template>
  <span>
    Etapa
    <span class="steps">
      {{ etapaAtual }}
    </span>
    de 4
  </span>
  <Step1 v-if="etapaAtual === 1" @continue="goToNextStep" :formData="formData" />
  <Step2
    v-if="etapaAtual === 2"
    @back="goToPreviousStep"
    @continue="goToNextStep"
    :formData="formData"
  />
  <Step3
    v-if="etapaAtual === 3"
    @back="goToPreviousStep"
    @continue="goToNextStep"
    :formData="formData"
  />
  <Step4
    v-if="etapaAtual === 4"
    @back="goToPreviousStep"
    @returnToStep1="handleReturnToStep1"
    :formData="formData"
  />
</template>

<script>
import Step1 from "../components/steps/Step1.vue";
import Step2 from "../components/steps/Step2.vue";
import Step3 from "../components/steps/Step3.vue";
import Step4 from "../components/steps/Step4.vue";

export default {
  name: "Formulario",
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
  },
  data() {
    return {
      etapaAtual: 1,
      formData: {},
      showSteps: true,
    };
  },
  emits: ["returnToStep1"],
  methods: {
    goToNextStep(data) {
      this.formData = { ...this.formData, ...data };
      this.etapaAtual++;
    },
    goToPreviousStep(data) {
      this.formData = { ...this.formData, ...data };
      this.etapaAtual--;
    },
    handleReturnToStep1(formData) {
      this.formData = formData;
      this.etapaAtual = 1;
    },
  },
};
</script>

<style scoped></style>
