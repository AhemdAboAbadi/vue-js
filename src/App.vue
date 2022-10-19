<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handelClick">click me</button>
  <p> Welcome ...</p>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" />
  </div>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "Hello World :)",
      header: "Sign up for the Giveway",
      text: "hello from GSG",
      showModal: false,
    };
  },
  methods: {
    handelClick() {
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add("red");
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
</style>
