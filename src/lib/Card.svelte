<script lang="ts">
    export let cols = 1;
    export let rows = 1;

    // import icon from '../assets/svelte.svg';
    export let icon;
</script>

<div class="card" data-cols={cols} data-rows={rows}>
    <!-- <img src={icon} alt="icon"> -->
    <i class={`fa-solid ${icon}`}></i>
</div>

<style>
    .card {
        box-shadow: var(--box-shadow);
        background-color: white;
        padding: 1rem;
        aspect-ratio: 1;
        display: grid;
        place-content: center;
        border-radius: 1rem;

        & img {
            max-height: 100px;
        }

        & i {
            font-size: 2rem;
        }
    }
</style>