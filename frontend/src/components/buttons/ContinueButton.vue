<template>
  <button class="continue-button" @click="goToNextStep">Continuar</button>
</template>

<script>
export default {
  name: "ContinueButton",
  methods: {
    goToNextStep() {
      this.$emit("continue");
    },
  },
};
</script>

<style scoped>
.continue-button {
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

.continue-button:hover {
  background-color: #ffd13c;
}
</style>
