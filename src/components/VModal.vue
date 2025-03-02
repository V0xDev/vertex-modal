<script setup lang="ts">
import { getModalById, useModals } from "@/utils/Modal";
import type { VModal } from "./VModal.types";
import { onMounted } from "vue";

const { maxWidth = "300px", ...props } = defineProps<VModal>();

const { state, setState, getIndexContent, getIndexOverlay } = getModalById(
  props.id
);

const { getContainerName } = useModals();
</script>

<template>
  <Teleport :to="getContainerName">
    <div
      :tt="getIndexOverlay"
      class="ui-modal"
      :class="{
        '--open': state,
        '--set-size': maxWidth,
        '--rounded': isRounded,
      }"
    >
      <div
        class="ui-modal__overlay"
        :class="{ '--active': state }"
        :style="{ zIndex: getIndexOverlay }"
        @click.stop="setState(false)"
      />

      <div
        class="ui-modal__content"
        :class="{ '--center': state }"
        :style="{ zIndex: getIndexContent }"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.ui-modal {
  position: relative;

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $modalBackgroundColor;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;

    &.--active {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &__content {
    background-color: $contentBackgroundColor;
    position: fixed;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    &.--center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.--rounded &__content {
    border-radius: $baseContentRounded;
  }

  &.--open &__content {
    opacity: 1;
    visibility: visible;
  }

  &.--set-size &__content {
    width: v-bind(maxWidth);
  }
}
</style>
