<script lang="ts">
    import {auth} from '../stores/auth';
    import Chart from 'chart.js/auto';
    import Card from './Card.svelte';
    import { config as featuredConfig } from '../data/featured.json';
    import { config as secondaryOneConfig } from '../data/secondaryOne.json';
    import { config as secondaryTwoConfig } from '../data/secondaryTwo.json';

    import { onMount } from "svelte";

    
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
    <div class="top">
        <div class="greeting">
            {#if $auth}
                <h1>Hey {$auth.displayName}</h1>
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
    <div class="apps">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
</div>

<style>
    #Dashboard {
        max-width: var(--max-width);
        margin-inline: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .greeting {
        margin-block: 3rem;
    }

    .featured {
        min-height: calc(var(--base-card-size) * 2);
    }

    .secondary {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        min-height: calc(var(--base-card-size) * 2);
    }

    /* .card {
        width: 100%;
        height: 100%;
        min-width: var(--base-card-size);
        min-height: var(--base-card-size);
        background-color: red;
        border-radius: var(--border-radius);
        padding: 1rem;

        & img {
            /* width: 100%;
            max-height: 100%; 
            object-fit: contain;
        }
    } */

    .apps {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }

    @media (min-width: 1200px) {
        #Dashboard {
            margin-inline: auto;
        }
    }
</style>