import { createApp } from "vue";
import App from "./App.vue";
import { VortexModal } from "@/index";
import { MODAL1_KEY, MODAL2_KEY } from "@/constants/modal";
import { InitializeModalsOptions } from "@/utils/Modal.types";
// import "@/assets/modal.scss";

const modalsOptions: InitializeModalsOptions = {
  modals: [MODAL1_KEY, MODAL2_KEY],
};

createApp(App).use(VortexModal, modalsOptions).mount("#app");
