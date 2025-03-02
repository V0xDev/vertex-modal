import { ComputedRef, ShallowRef, UnwrapNestedRefs } from "vue";

export type Modal = {
  id: string;
  zIndex: ShallowRef<number>;
  state: ShallowRef<boolean>;
  store: UnwrapNestedRefs<Record<string, unknown>>;
  setState: (value: boolean) => void;
  setIndex: (value: number) => void;
  setStoreValue(key: string, value: unknown): void;
  getStoreValue<T = null>(key: string, defaultValue?: T): ComputedRef<T>;
  getIndexOverlay: ComputedRef<number>;
  getIndexContent: ComputedRef<number>;
};

export interface InitializeModalsOptions {
  modals: string[];
  modalsDefaultIndex?: number;
}
