<script lang="ts">
    export let cols = 1;
    export let rows = 1;

    import icon from '../assets/svelte.svg';
</script>

<div class="card" data-cols={cols} data-rows={rows}>
    <img src={icon} alt="icon">
</div>

<style>
    .card {
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, .5);
        background-color: white;
        width: 150px;
        aspect-ratio: 1;
        display: grid;
        place-content: center;
        border-radius: 1rem;
        grid-column-start: 1;
        grid-row-start: 1;
        grid-column-end: span attr(data-cols);
        grid-row-end: span attr(data-rows);

        & img {
            max-height: 100px;
        }
    }
</style>