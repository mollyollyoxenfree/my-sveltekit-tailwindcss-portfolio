import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"><div class="bg-slate-500 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-between gap-4 items-center" data-svelte-h="svelte-152p291"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Jobify",
      icon: "fa-solid fa-briefcase",
      href: "https://jobify-tracker.onrender.com/"
    },
    {
      name: "Face Trace",
      icon: "fa-solid fa-magnifying-glass",
      href: "https://smart-brain-app-2023.herokuapp.com/"
    },
    {
      name: "Landing Page",
      icon: "fa-solid fa-chart-line",
      href: "https://mollyollyoxenfree.github.io/startup-of-the-year/"
    }
  ];
  let benefits = [
    {
      name: "a self taught developer",
      description: "I taught myself to code using online resources and immediately fell in love with the creativity and problem-solving that is involved in developing innovative web applications. I began my journey with HTML, CSS, and JavaScript and continued to expand my knowledge base to include JavaScript frameworks, backend programming, design, and much more."
    },
    {
      name: "a product design fanatic",
      description: "I love learning new design concepts and enabling users with amazing online experiences."
    },
    {
      name: "an excellent communicator",
      description: "Being able to communicate effectively helps me develop relationships and ensures my productivity in the workplace."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-2jawwm"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6lx">Hi! I&#39;m <span class="poppins text-violet-400">Molly</span> Smith <br> Full Stack <span class="poppins text-violet-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-violet-400">favorite tech</span> includes JavaScript, React, Node.js + Express.js &amp; MongoDB!</p> <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="https://www.linkedin.com/in/molly-smith-0875b967" target="_blank"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></a></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "images/profile.png", 0)} alt="Profile" class="object-cover z-[2] max-h-[70vh]"></div></section> <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-15uaz07"><h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3lx sm:text-4xl md:text-5lx">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-c3xafr">The Jobify App has everything you need to stay organized when searching for a job. The application was created with 
                    <strong class="text-violet-400">Node.js + Express.js, React, Axios, &amp; MongoDB</strong>.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-e5dh45">Experience the magic of Face Trace by simply uploading an image URL, then watch in amazement as it recognizes and detects faces in a flash! 
                    <strong class="text-violet-400">Node.js + Express.js, React, &amp; PostgreSQL</strong> 
                    were used when building this application.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1gbb98d">Explore this captivating landing page crafted for a dynamic business startup. 
                    <strong class="text-violet-400">HTML &amp; CSS</strong> 
                    were used in creating this page that integrates seamlessly with Mailchimp to facilitate email sign-ups.</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1pml0k1"><h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">About</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-rcpqeb">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-700 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <p class="mx-auto" data-svelte-h="svelte-g5q3n9">So why not invest?</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
