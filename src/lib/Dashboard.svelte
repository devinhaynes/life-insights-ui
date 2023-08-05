<script lang="ts">
    import {auth} from '../stores/auth';
    import Card from './Card.svelte';
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
        <Card cols={12} rows={2} />
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
        max-width: 1200px;
        margin-inline: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .greeting {
        margin-block: 3rem;
    }

    .featured {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }

    .apps {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    @media (min-width: 1200px) {
        #Dashboard {
            margin-inline: auto;
        }
    }
</style>