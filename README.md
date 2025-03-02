# 🚀 Vortex-Modal на Vue3 + TS + Vite

[![Vue](https://img.shields.io/badge/Vue-3.5+-%2342b883?logo=vuedotjs)](https://vuejs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-%233178c6?logo=typescript)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/Vite-6%2B-%23646cff?logo=vite)](https://vitejs.dev/) [![Sass](https://img.shields.io/badge/Sass-1.8%2B-%23646cff?logo=sass)](https://sass-scss.ru/)

**Создавайте и управляйте модальными окнами легко и просто!**
Плагин модального окна для Vue.js с поддержкой TypeScript и SCSS.

![Изображение](/public/сut_logo.png "Логотип Vortex")

### ✨ Описание

> 🌀**Vortex-Modal** — это плагин который подходит как для pet-проектов так и для продакшена, он предоставляет все необходимые инструменты для создания простых модальных окн. Основная цель Vortex-Modal — обеспечить быструю интеграцию и полный доступ к создаваемым модальным окнам.

---

## 🚀 Быстрый старт

1. **Создание root элемента для модалок**:

   ```html
   <!-- //index.html -->

   <!DOCTYPE html>
   <html lang="">
     <head>
       <meta charset="UTF-8" />
       <link rel="icon" href="/favicon.ico" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Vite App</title>
     </head>
     <body>
       <div id="app"></div>
       <script type="module" src="/src/main.ts"></script>
     </body>

     <!-- root element -->
     <div id="ui-modals"></div>
   </html>
   ```

2. **Добавление всех модалок в фаил с константами**

   ```ts
   // constants.ts
   const MODAL1_KEY = "MODAL1_KEY";
   const MODAL2_KEY = "MODAL2_KEY";

   export { MODAL1_KEY, MODAL2_KEY };
   ```

3. **Установка плагина и стилей**

   ```ts
   import { createApp } from "vue";
   import App from "./App.vue";

   import { MODAL1_KEY, MODAL2_KEY } from "@/constants/modal";
   import { InitializeModalsOptions } from "@/utils/Modal.types";

   import "@/assets/modal.scss";
   import { VortexModal } from "@/index";

   const modalsOptions: InitializeModalsOptions = {
     modals: [MODAL1_KEY, MODAL2_KEY],
   };

   createApp(App).use(VortexModal, modalsOptions).mount("#app");
   ```

---

## 🎮 Как использовать

```ts
   <script setup lang="ts">
   import VModal from "./components/VModal.vue";
   import { MODAL1_KEY } from "./constants/modal";
   import { getModalById } from "./utils/Modal";

   const modal = getModalById(MODAL1_KEY);

   const openModal = () => {
      modal.setState(true)
   }
   </script>

   <template>
      <button @click="openModal">Открыть модалку</button>
      <VModal :id="MODAL1_KEY">Модальное окно 1</VModal>
   </template>
```

---

## 💡 Вопросы или предложения?

Оставляйте их в Issues.

---

## 📜 Лицензия

Проект распространяется под лицензией [MIT](https://opensource.org/license/MIT).
