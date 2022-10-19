<template>
  <div class="backdrop">
    <div class="modal" :class="{sale :  theme === 'sale'}">
      <p>{{ header }}</p>
      <h1>{{ text }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  position: fixed;
  width: 400px;
  border-radius: 10px;
  background: white;
  padding: 20px;
  margin: 100px auto;
}
.modal h1 {
  color: red;
}
</style>
