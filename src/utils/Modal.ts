import { InitializeModalsOptions, Modal } from "@/utils/Modal.types";
import {
  computed,
  reactive,
  shallowRef,
  type ComputedRef,
  type UnwrapNestedRefs,
} from "vue";

const modals = new Map<string, Modal>();
const modalsRootName = shallowRef<string>("ui-modals");
const modalZIndex = shallowRef<number>(0);

export function initializeModals({
  modalsDefaultIndex = 100,
  ...options
}: Partial<InitializeModalsOptions> = {}) {
  let modalsContainer = document.getElementById(modalsRootName.value);

  if (!modalsContainer) {
    console.warn("[vortex-modal] root element is not defined!!");
    return;
  }

  modalZIndex.value = modalsDefaultIndex;

  options.modals.forEach((modalId) => {
    createModal(modalId);
  });
}

export function createModal(id: string) {
  const state = shallowRef(false);
  const store: UnwrapNestedRefs<Record<string, unknown>> = reactive({});
  const zIndex = shallowRef((modalZIndex.value += 5));

  const setState = (_state: boolean) => {
    state.value = _state;
  };

  const setStoreValue = (key: string, val: unknown) => {
    Reflect.set(store, key, val);
  };

  const getStoreValue = <T = null>(key: string, defaultValue?: T) => {
    return computed(() => store[key] ?? defaultValue) as ComputedRef<T>;
  };

  const setIndex = (_state: number) => {
    zIndex.value = _state;
  };

  const getIndexOverlay = computed(() => zIndex.value);

  const getIndexContent = computed(() => {
    const result = zIndex.value + 1;
    return result;
  });

  const modal: Modal = {
    id,
    zIndex,
    store,
    state,
    setState,
    setStoreValue,
    getStoreValue,
    setIndex,
    getIndexOverlay,
    getIndexContent,
  };

  modals.set(id, modal);

  return modal;
}

export function getModalById(id: string): never | Modal {
  const modal = modals.get(id);
  if (!modal) {
    throw new Error(`[provide/inject] no modal with id: ${id}`);
  }
  return modal;
}

export function useModals() {
  const getContainerName = computed(() => `#${modalsRootName.value}`);
  const getNextModalIndex = computed(() => (modalZIndex.value += 5));

  return { getContainerName, getNextModalIndex };
}
