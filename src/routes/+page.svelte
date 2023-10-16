<script>
    import Main from "../components/Main.svelte";

    /** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'nodejs18.x'
};

</script>

<Main />