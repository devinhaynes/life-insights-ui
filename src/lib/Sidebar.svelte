<script>
    import Card from "./Card.svelte";
</script>

<div class="Sidebar">
    <i class="fa-solid fa-house" />
    <i class="fa-solid fa-dollar-sign" />
    <i class="fa-solid fa-spa" />
    <i class="fa-solid fa-person-running" />
    <i class="fa-solid fa-people-group" />
</div>

<style>
    .Sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 2rem 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .125);
        background-color: white;

        & i {
            font-size: 2rem;
        }
    }
</style>