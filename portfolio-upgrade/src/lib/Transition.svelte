<script>
    import { page } from "$app/state";
  import { fade } from "svelte/transition";
  
</script>

{#key page.url.pathname}
  <div in:fade={{ duration: 300 }}>
    <slot></slot>
  </div>
{/key}