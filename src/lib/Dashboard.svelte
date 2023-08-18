<script lang="ts">
    import {auth} from '../stores/auth';
    import Chart from 'chart.js/auto';
    import Card from './Card.svelte';
    import { config as featuredConfig } from '../data/featured.json';
    import { config as secondaryOneConfig } from '../data/secondaryOne.json';
    import { config as secondaryTwoConfig } from '../data/secondaryTwo.json';

    import { onMount } from "svelte";
    import Sidebar from './Sidebar.svelte';
    import { navigate } from 'svelte-routing';

    
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
        <div class="data">
            <div class="card featured">
                <canvas bind:this={featured} ></canvas>
            </div>
            <div class="card half">
                <canvas bind:this={secondaryOne} ></canvas>
            </div>
            <div class="card half">
                <canvas bind:this={secondaryTwo} ></canvas>
            </div>
            <div class="card insights">
                <ul>
                    <li class="positive">+4 miles running</li>
                    <li class="negative">+8 hours watching TV</li>
                    <li class="positive">All tasks completed</li>
                    <li class="positive">+3 hours family time</li>
                    <li class="negative">Over-budget: Food</li>
                </ul>
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
    }

    .greeting {
        margin-block: 2rem;

        & h1 {
            text-align: center;
        }
    }

    .data {
        display: grid;
        grid-template-areas: 
        "featured featured insights"
        "one two insights";
        grid-gap: 1rem;
    }

    .featured {
        /* grid-column-start: span 12; */
        grid-area: featured;
    }

    .half:nth-child(1) {
        /* grid-column-start: span 6; */
        grid-area: one
    }

    .half:nth-child(2) {
        /* grid-column-start: span 6; */
        grid-area: two
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

    .insights {
        grid-area: insights;
        align-self: flex-start;
        padding-block: 3rem;
        
        & li {
            padding: 1rem;
            border-bottom: 1px solid var(--light-gray);
        } 
    }

    .positive {
        color: var(--green);
    }

    .negative {
        color: var(--red);
    }
</style>