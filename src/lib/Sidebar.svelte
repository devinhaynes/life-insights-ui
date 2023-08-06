<script>
    import Card from "./Card.svelte";
</script>

<div class="Sidebar">
    <Card icon="fa-house" />
    <Card icon="fa-dollar-sign" />
    <Card icon="fa-spa" />
    <Card icon="fa-person-running" />
    <Card icon="fa-people-group" />
</div>

<style>
    .Sidebar {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .125);
    }
</style>