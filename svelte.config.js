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

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html', // may differ from host to host
    }),
    paths: {
      base:
        process.env.NODE_ENV === 'production'
          ? '/mollyollyoxenfree/my-sveltekit-tailwindcss-portfolio/'
          : '',
    },
  },
};

export default config;
/////////////////////////////////////////////////////
// import adapter from '@sveltejs/adapter-static';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapter({
//       fallback: '200.html',
//     }),
//   },
// };

// config.paths = {
//   base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
// };

// export default config;
