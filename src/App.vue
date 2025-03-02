<script setup lang="ts">
import VModal from "./components/VModal.vue";
import { MODAL1_KEY, MODAL2_KEY } from "./constants/modal";
import { getModalById } from "./utils/Modal";

const modal1 = getModalById(MODAL1_KEY);
const modal2 = getModalById(MODAL2_KEY);
</script>

<template>
  <button @click="modal1.setState(true)">Открыть модалку</button>
  <VModal :id="MODAL1_KEY">
    <button @click="modal2.setState(true)">Открыть модалку2</button>
  </VModal>
  <VModal :id="MODAL2_KEY">123</VModal>
</template>

<style lang="scss"></style>
