// import adapter from '@sveltejs/adapter-auto';

// import { vitePreprocess } from '@sveltejs/kit/vite';

// const config = {
//   kit: {
//     adapter: adapter(),
//   },
//   preprocess: vitePreprocess(),
// };
// export default config;

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    paths: {
      base:
        process.env.NODE_ENV === 'production'
          ? '/my-sveltekit-tailwindcss-portfolio'
          : '',
    },
  },
};

export default config;
