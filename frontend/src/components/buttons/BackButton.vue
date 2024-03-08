<template>
  <button class="back-button" @click="goToPreviousStep">Voltar</button>
</template>

<script>
export default {
  name: "BackButton",
  methods: {
    goToPreviousStep() {
      this.$emit("back");
    },
  },
};
</script>

<style scoped>
.back-button {
  background-color: #ffffff;
  color: #ffd13c;
  border: 1px solid #ffd13c !important;
  border-radius: 3px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 250px;
  height: 35px;
  margin-right: 10px;
}

.back-button:hover {
  background-color: #ffd13c;
  color: #ffffff;
}
</style>
