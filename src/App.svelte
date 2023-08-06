<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Navbar from './lib/Navbar.svelte';
    import Dashboard from "./lib/Dashboard.svelte";
    import Landing from "./lib/Landing.svelte";

    export let url = "/";
</script>

<Router {url}>
   <Navbar />
    <main>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/"><Landing /></Route>
    </main> 
</Router>


<style>
    main {
        display: flex;
        place-content: center;
        flex-grow: 1;
    }
</style>
