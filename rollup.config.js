import { terser } from "rollup-plugin-terser";

export default {
    input: "./dist/server.js",
    output: {
        file: "./dist/server.min.js",
    },
    plugins: [terser()],
};