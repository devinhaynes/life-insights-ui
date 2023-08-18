<script lang="ts">
    import {auth} from '../stores/auth';
    import {signIn, signOut} from '../auth';

    // icons
    import profileIcon from '../assets/profile.svg';

    let dropdownActive = false;

    function handleSignOut() {
        dropdownActive = false;
        signOut();
    }

    function handleSignIn() {
        dropdownActive = false;
        signIn();
    }
</script>

<div class="navbar">
    <div data-active={dropdownActive} class="dropdown">
        <ul>
            <li><button>Profile Settings</button></li>
            <li>
                {#if $auth}
                    <button on:click={handleSignOut}>Sign Out</button>
                {:else}
                    <button on:click={handleSignIn}>Sign in</button>
                {/if}
            </li>
        </ul>
    </div>
    <div class="actions">
        <button>
            <i class="fa-solid fa-message"></i>
        </button>
        <button on:click={() => dropdownActive = !dropdownActive} class="profile">
            {#if $auth && $auth.photoURL}
                <img class="profile__img" src={$auth.photoURL} alt="User">
            {:else}
                <!-- <img class="profile__img" src={profileIcon} alt="Default User"> -->
                <i class="fa-solid fa-user"></i>
            {/if}
        </button>
    </div>
</div>

<style>
    .navbar {
        width: 100vw;
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: flex-end;
        padding: .5rem 1rem;
        box-shadow: 2px 0 4px rgba(0, 0, 0, .125);
        position: relative;

        & button {
            background-color: white;
        }

        & i {
            color: var(--primary);
            font-size: 2rem;
        }
    }

    .actions {
        display: flex;
        gap: 1rem;
    }

    .profile {
        height: 50px;
        aspect-ratio: 1;
        background-color: unset;
        padding: unset;
        border-radius: 50%;
        border: 2px solid var(--primary);
    }

    .profile__img {
        max-height: 100%;
        border-radius: 50%;
    }

    .dropdown {
        position: absolute;
        top: calc(100% + 1rem);
        right: 1rem;
        box-shadow: var(--box-shadow);
        padding: 1rem;
        border-radius: var(--border-radius);

        & ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-end;
        }

        & li {
            width: 100%;
        }

        & button {
            border-bottom: 1px solid var(--light-gray);
            border-radius: 0;
            width: 100%;
            text-align: right;
        }
    }

    [data-active="false"] {
        display: none;
    }

    [data-active="true"] {
        display: block;
    }
</style>