<script>
    import Card from "./Card.svelte";

    let expanded = false;
</script>

<div class={`Sidebar ${expanded ? 'expanded' : ''}`}>
    <div class="expand">
        <button on:click={() => expanded = !expanded}>
            <span>
                {#if expanded}
                Collapse
                {:else}
                Expand
                {/if}
            </span>
             <i class={`fa-solid ${expanded ? 'fa-caret-left' : 'fa-caret-right'}`}></i>
            </button>
    </div>
    <div class="expandable">
        <!-- Finances -->
        <i class="fa-solid fa-dollar-sign" />
        <span data-visible={expanded}>Finances</span>
    </div>
    <div class="expandable">
        <!-- Spriritual -->
        <i class="fa-solid fa-spa" />
        <span data-visible={expanded}>Sprirituality</span>
    </div>
    <div class="expandable">
        <!-- Fitness -->
        <i class="fa-solid fa-person-running" />
        <span data-visible={expanded}>Fitness</span>
    </div>
    <div class="expandable">
        <!-- Relationships -->
        <i class="fa-solid fa-people-group" />
        <span data-visible={expanded}>Relationships</span>
    </div>
    <div class="expandable">
        <!-- Career -->
        <i class="fa-solid fa-briefcase" />
        <span data-visible={expanded}>Career</span>
    </div>
    <div class="expandable">
        <!-- Romance -->
        <i class="fa-solid fa-heart" />
        <span data-visible={expanded}>Romance</span>
    </div>
    <div class="expandable">
        <!-- Personal Development -->
        <i class="fa-solid fa-trophy" />
        <span data-visible={expanded}>Personal Development</span>
    </div>
    <div class="expandable">
        <!-- Fun & Recreation -->
        <i class="fa-solid fa-umbrella-beach" />
        <span data-visible={expanded}>Fun & Recreation</span>
    </div>
    
    
    
    
</div>

<style>
    .Sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .125);
        background-color: white;
        padding-bottom: 3rem;
        transition: all 250ms;

        & i {
            font-size: 2rem;
            width: 40px;
            display: flex;
            place-content: center;
        }
    }

    .Sidebar.expanded {
        align-items: flex-start;
    }

    .expand {
        border-bottom: 1px solid var(--light-gray);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;

        & button {
            background-color: var(--primary-color);
            display: flex;
            align-items: center;
            gap: .25rem;

        }

        & i {
            font-size: 1rem;
            width: fit-content;
        }
    }

    .expandable {
        display: flex;
        align-items: center;
        gap: .5rem;
        padding-inline: 1rem;

        & span {
            font-size: 1.5rem;
            /* font-weight: bold; */
        }
    }

    [data-visible='false'] {
        display: none;
    }

    [data-visible='true'] {
        display: block
    }
</style>