import { MODAL1_KEY } from "@/constants/modal";
import {
  getModalById,
  initializeModals,
  type InitializeModalsOptions,
} from "@/utils/Modal";
import type { App, Plugin } from "vue";

export { default as VModal } from "@/components/VModal.vue";
export type { VModal as VModalType } from "@/components/VModal.types";

export * from "@/components/VModal.types";
export * from "@/utils/Modal";

export const VortexModal: Plugin = {
  install(_app: App, options: InitializeModalsOptions) {
    initializeModals(options);
  },
};
