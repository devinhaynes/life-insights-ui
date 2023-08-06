<script lang="ts">
    import {auth} from '../stores/auth';
    import {signIn, signOut} from '../auth';

    // icons
    import profileIcon from '../assets/profile.svg';

    let dropdownActive = false;
</script>

<div class="navbar">
        <button on:click={() => dropdownActive = !dropdownActive} class="profile">
            {#if $auth && $auth.photoURL}
                <img class="profile__img" src={$auth.photoURL} alt="User">
            {:else}
                <img class="profile__img" src={profileIcon} alt="Default User">
            {/if}
        </button>
        <div data-active={dropdownActive} class="dropdown">
            <ul>
                <li>
                    {#if $auth}
                        <button on:click={signOut}>Sign Out</button>
                    {:else}
                        <button on:click={signIn}>Sign in</button>
                    {/if}
                </li>
            </ul>
        </div>
</div>

<style>
    .navbar {
        width: 100vw;
        display: flex;
        gap: 1rem;
        align-items: center;
        padding: .5rem 1rem;
    }

    .profile {
        max-height: 50px;
        aspect-ratio: 1;
        background-color: unset;
        padding: unset;
        
    }

    .profile__img {
        max-height: 100%;
        border-radius: 50%;
    }

    [data-active="false"] {
        display: none;
    }

    [data-active="true"] {
        display: block;
    }
</style>