import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "vortex-modal",
      fileName: (format) => `vortex-modal.${format}.js`,
      cssFileName: "style",
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  publicDir: false,
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: [
          "mixed-decls",
          "color-functions",
          "global-builtin",
          "import",
        ],
        additionalData: `
          @use "sass:map";
          @use "@/assets/modal.scss" as *;
        `,
      },
    },
  },
});
