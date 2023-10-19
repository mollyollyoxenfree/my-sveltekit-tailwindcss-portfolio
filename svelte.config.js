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
//   preprocess: vitePreprocess(),

//   kit: {
//     adapter: adapter({
//       fallback: 'index.html',
//     }),
//     paths: {
// base:
//   process.env.NODE_ENV === 'production'
//     ? '/my-sveltekit-tailwindcss-portfolio'
//     : '',
//     },
//   },
// };

// export default config;
/////////////////////////////////////////////////////
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      // base: dev ? '' : process.env.BASE_PATH,
      base:
        process.env.NODE_ENV === 'production'
          ? 'my-sveltekit-tailwindcss-portfolio'
          : '',
    },
  },
};

export default config;
//////////////////////////////////////////////////////////////
// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/kit/vite';

// const dev = precess.argv.includes('dev');

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   preprocess: vitePreprocess(),

//   kit: {
//     adapter: adapter(),
//     paths: {
//       base: dev ? '' : <process className="env BASE_PATH"></process>,
//     },
//   },
// };

// export default config;
