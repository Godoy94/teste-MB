<template>
  <button class="register-button" @click="registerUser">Cadastrar</button>
</template>

<script>
export default {
  name: "RegisterButton",
  methods: {
    registerUser() {
      this.$emit("register");
    },
  },
};
</script>

<style scoped>
.register-button {
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

.register-button:hover {
  background-color: #ffd13c;
}
</style>
