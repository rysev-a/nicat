import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const fileRegex = /\.(nicat)$/;

function niCatPlugin() {
  return {
    name: "transform-file",
    transform(src: string, id: string) {
      if (fileRegex.test(id)) {
        return {
          code: `export const template = {data: ${JSON.stringify(src)}}; `,
          map: null,
        };
      }
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), tsconfigPaths(), niCatPlugin()],
});
