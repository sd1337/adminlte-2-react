import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/AdminLTE.tsx'),
      name: 'AdminLTE2React',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
          'react', 'react-dom','react-dom/server', 'jquery',
        "@fortawesome/fontawesome-common-types",
        "@fortawesome/fontawesome-svg-core",
"@fortawesome/free-brands-svg-icons",
"@fortawesome/free-regular-svg-icons",
"@fortawesome/free-solid-svg-icons",
"@fortawesome/react-fontawesome",
          "react-ionicons",
          "react-dates",
          'react-datetime',
          "react-bootstrap",
          'moment',
          'jquery-sparkline',
          'jquery-ui',
          'react-draggable',
          'rc-slider',
          // 'rc-trigger',
          'rc-tooltip',
          'select2/dist/js/select2',
          'select2/dist/css/select2.css',
          'bootstrap',
          'react-bootstrap'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          jquery: '$',
        },
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
