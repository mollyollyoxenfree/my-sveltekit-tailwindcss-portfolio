// import adapter from '@sveltejs/adapter-auto';

// import { vitePreprocess } from '@sveltejs/kit/vite';

// const config = {
//   kit: {
//     adapter: adapter(),
//   },
//   preprocess: vitePreprocess(),
// };
// export default config;
////////////////////////////////////////////////////

// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/kit/vite';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// Consult https://kit.svelte.dev/docs/integrations#preprocessors
// for more information about preprocessors
// preprocess: vitePreprocess(),

// kit: {
//   adapter: adapter({
//     fallback: '200.html', // may differ from host to host
//     }),
//     paths: {
//       base:
//         process.env.NODE_ENV === 'production'
//           ? '/my-sveltekit-tailwindcss-portfolio'
//           : '',
//     },
//   },
// };

// export default config;
/////////////////////////////////////////////////////
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html',
    }),
  },
};

config.paths = {
  base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
};

export default config;
