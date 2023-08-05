<script lang="ts">
    import {signIn, signOut} from '../auth';
    import {auth} from '../stores/auth';
</script>

<div>
    {#if $auth}
    <button on:click={signOut}>Sign Out</button>
    {:else}
    <button on:click={signIn}>Sign in</button>
    {/if}
</div>

<style>
</style>
