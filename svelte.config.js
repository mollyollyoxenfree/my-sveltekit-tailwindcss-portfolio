// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/kit/vite';

// const dev = process.argv.includes('dev');

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   preprocess: vitePreprocess(),
//   kit: {
//     adapter: adapter(),
//     paths: {
//       // base: dev ? '' : process.env.BASE_PATH,
//       base:
//         process.env.NODE_ENV === 'production'
//           ? '/my-sveltekit-tailwindcss-portfolio'
//           : '',
//     },
//   },
// };

// export default config;
//////////////////////////////////////////////////////////////
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/my-sveltekit-tailwindcss-portfolio',
    },
  },
};

export default config;
