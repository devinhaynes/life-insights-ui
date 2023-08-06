<script lang="ts">
    import {auth} from '../stores/auth';
    import Chart from 'chart.js/auto';
    import Card from './Card.svelte';
    import { config as featuredConfig } from '../data/featured.json';
    import { config as secondaryOneConfig } from '../data/secondaryOne.json';
    import { config as secondaryTwoConfig } from '../data/secondaryTwo.json';

    import { onMount } from "svelte";
  import Sidebar from './Sidebar.svelte';

    
	let featured;
    let secondaryOne;
    let secondaryTwo;

	onMount(async () => {
        const featuredCtx = featured.getContext('2d');
        const secondaryOneCtx = secondaryOne.getContext('2d');
        const secondaryTwoCtx = secondaryTwo.getContext('2d');
        // @ts-ignore
        new Chart(featuredCtx, featuredConfig);
        // @ts-ignore
        new Chart(secondaryOneCtx, secondaryOneConfig);
        // @ts-ignore
        new Chart(secondaryTwoCtx, secondaryTwoConfig)
	});

</script>

<div id="Dashboard">
    <Sidebar />
    <div class="content">
            <div class="top">
        <div class="greeting">
            {#if $auth}
                <h1>Dashboard</h1>
            {/if}
        </div>
    </div>
    <div class="featured">
        <div class="card">
            <canvas bind:this={featured} ></canvas>
        </div>
    </div>
    <div class="secondary">
        <div class="card">
            <canvas bind:this={secondaryOne} ></canvas>
        </div>
        <div class="card">
            <canvas bind:this={secondaryTwo} ></canvas>
        </div>
    </div>
    </div>
</div>

<style>
    #Dashboard {
        display: flex;
        gap: 2rem;
    }

    .content {
        padding-bottom: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        width: 100%;
    }

    .greeting {
        margin-block: 2rem;

        & h1 {
            text-align: center;
        }
    }

    .featured {
        min-height: calc(var(--base-card-size) * 2);

        & canvas {
            width: 1000px;
        }
    }

    .secondary {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
        min-height: calc(var(--base-card-size) * 2);
    }

    .card {
        min-width: var(--base-card-size);
        min-height: var(--base-card-size);
        border-radius: var(--border-radius);
        padding: 1rem;
        box-shadow: var(--box-shadow);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>