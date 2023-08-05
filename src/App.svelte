<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import Auth from './lib/Auth.svelte';
    import Navbar from './lib/Navbar.svelte';
    import Dashboard from "./lib/Dashboard.svelte";

    export let url = "/";
</script>

<Router {url}>
   <Navbar />
    <main>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/"><Auth /></Route>
    </main> 
</Router>


<style>
    main {
        display: flex;
        place-content: center;
        flex-grow: 1;
    }
</style>
