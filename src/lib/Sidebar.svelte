<script>
    import Card from "./Card.svelte";
</script>

<div class="Sidebar">
    <div>
        <!-- Finances -->
        <i class="fa-solid fa-dollar-sign" />
    </div>
    <div>
        <!-- Spriritual -->
        <i class="fa-solid fa-spa" />
    </div>
    <div>
        <!-- Fitness -->
        <i class="fa-solid fa-person-running" />
    </div>
    <div>
        <!-- Relationships -->
        <i class="fa-solid fa-people-group" />
    </div>
    <div>
        <!-- Career -->
        <i class="fa-solid fa-briefcase" />
    </div>
    <div>
        <!-- Romance -->
        <i class="fa-solid fa-heart" />
    </div>
    <div>
        <!-- Personal Development -->
        <i class="fa-solid fa-trophy" />
    </div>
    <div>
        <!-- Fun & Recreation -->
        <i class="fa-solid fa-umbrella-beach" />
    </div>
    
    
    
    
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