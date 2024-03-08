<template>
  <Formulario />
</template>

<script>
import Formulario from "./views/Formulario.vue";

export default {
  name: "App",
  components: {
    Formulario,
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  margin-top: 30px;
}

.container {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 500px;
  width: 250px;
}

.row {
  display: flex;
  margin-top: 10px;
  width: 250px;
}

.footer {
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.steps {
  color: #ffa507;
  font-weight: bold;
}

label {
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  width: 250px;
  display: inline-block;
  text-align: left;
}

input[type="text"] {
  width: 250px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid;
}
</style>
