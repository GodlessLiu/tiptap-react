import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import { fileURLToPath } from 'url';
import Icons from 'unplugin-icons/vite';
export default ({ mode }: { mode: string }) => {
  const isProduction = mode === 'production';
  return defineConfig({
    plugins: [
      react(),
      isProduction &&
        dts({
          tsconfigPath: './tsconfig.json',
          entryRoot: './src',
          outDir: './dist',
          insertTypesEntry: true,
        }),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    ],
    define: {
      'process.env': process.env,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      lib: {
        entry: path.resolve(__dirname, 'src/index.tsx'),
        name: 'RichTextEditor',
        formats: ['es', 'iife'],
        fileName: (format) => `rich-text-editor.${format}.js`,
      },
      minify: isProduction,
      rollupOptions: {
        external: ['react'],
        output: {
          globals: {
            react: 'react',
          },
          exports: 'named',
        },
      },
      sourcemap: true,
    },
  });
};
