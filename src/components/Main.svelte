<script>
  import Step from "./Step.svelte";

let steps = [
    {name: 'Jobify', icon: 'fa-solid fa-briefcase', href: 'https://jobify-tracker.onrender.com/'},
    {name: 'Face Trace', icon: 'fa-solid fa-magnifying-glass', href: 'https://smart-brain-app-2023.herokuapp.com/'},
    {name: 'Landing Page', icon: 'fa-solid fa-chart-line', href: 'https://mollyollyoxenfree.github.io/startup-of-the-year/'},
];

let benefits = [
    {name: 'a self taught developer', description: 'I taught myself to code using online resources and immediately fell in love with the creativity and problem-solving that is involved in developing innovative web applications. I began my journey with HTML, CSS, and JavaScript and continued to expand my knowledge base to include JavaScript frameworks, backend programming, design, and much more.'},
    {name: 'a product design fanatic', description: 'I love learning new design concepts and enabling users with amazing online experiences.'},
    {name: 'an excellent communicator', description: 'Being able to communicate effectively helps me develop relationships and ensures my productivity in the workplace.'},
];

</script>

<style global>
  @import 'tailwindcss/base.css';
  @import 'tailwindcss/components.css';
  @import 'tailwindcss/utilities.css';
</style>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6lx">
                Hi! I'm <span class="poppins text-violet-400">Molly</span> Smith <br/> Full Stack <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400">favorite tech</span> includes JavaScript, React, Node.js + Express.js & MongoDB!
            </p>
            <a 
            class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" 
            href="https://www.linkedin.com/in/molly-smith-0875b967" 
            target="_blank">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200">
            </div>
            <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/profile.png"} alt="Profile" class="object-cover z-[2] max-h-[70vh]" />
        </div>
    </section>


    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3lx sm:text-4xl md:text-5lx">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
            
        </div>
      
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>The Jobify App has everything you need to stay organized when searching for a job. The application was created with 
                    <strong class="text-violet-400">Node.js + Express.js, React, Axios, & MongoDB</strong>.
                    </p>
            </Step>

            <Step step={steps[1]}>
                <p>Experience the magic of Face Trace by simply uploading an image URL, then watch in amazement as it recognizes and detects faces in a flash! 
                    <strong class="text-violet-400">Node.js + Express.js, React, & PostgreSQL </strong> 
                    were used when building this application.
                    </p>
            </Step>

            <Step step={steps[2]}>
                <p>Explore this captivating landing page crafted for a dynamic business startup. 
                    <strong class="text-violet-400">HTML & CSS </strong> 
                    were used in creating this page that integrates seamlessly with Mailchimp to facilitate email sign-ups.
                    </p>
            </Step>
        </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 
        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
        <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">About</span> me.</h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
            <div class="flex gap-6 sm:gap-8">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-700 font-semibold">
                    0{index+1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl">
                        {benefit.name}
                    </h3>
                    <p>{benefit.description}</p>
                </div>
                </div>
            {/each}
            </div>
            <p class="mx-auto">So why not invest?</p>
        </section>
</main>