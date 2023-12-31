import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import inject from '@rollup/plugin-inject';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/AdminLTE.tsx'),
      name: 'AdminLTE2React',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        "@fortawesome/fontawesome-common-types",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/react-fontawesome",
        'bootstrap',
        'datatable.net-bs',
        'datatables.net-select-bs',
        'fullcalendar',
        'jquery',
        // 'jquery-sparkline',
        'jquery-ui',
        'moment',
        'react',
        'react/jsx-runtime',
        'react-bootstrap',
        'react-dates',
        'react-datetime',
        'react-dom',
        'react-ionicons',
        'select2',
        'select2/dist/js/select2',
        'select2/dist/css/select2.css',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          jquery: 'jQuery',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    inject({
      jQuery: "jquery",
      "window.jQuery": "jquery",
      $: "jquery"
  })
  ],
});
