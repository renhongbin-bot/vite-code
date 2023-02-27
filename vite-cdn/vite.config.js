import { defineConfig } from "vite";
import viteCDNPlugin from "vite-plugin-cdn-import";
export default defineConfig({
  plugins: [
    viteCDNPlugin({
      modules: [
        {
          name: "lodash",
          var: "_",
          path: "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js",
        },
      ],
    }),
  ],
});
