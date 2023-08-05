<script lang="ts">

    import {auth} from '../stores/auth';

    // icons
    import profileIcon from '../assets/profile.svg';
</script>

<div class="navbar">
        <div class="profile">
            {#if $auth && $auth.photoURL}
                <img class="profile__img" src={$auth.photoURL} alt="User">
            {:else}
                <img class="profile__img" src={profileIcon} alt="Default User">
            {/if}
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
        
    }

    .profile__img {
        max-height: 100%;
        border-radius: 50%;
    }

    .greeting {
        font-size: 2.5rem;
    }
</style>