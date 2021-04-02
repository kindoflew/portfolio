<script>
  import { router } from "tinro";

  $: current = $router.path === '/' ? "Lewis D'Avanzo home" : $router.path.slice(1);
</script>

<div aria-live="polite" aria-atomic="true">
  {#key current}
    <p>Navigated to {current} page</p>
  {/key}
</div>

<style>
  div, p {
    position: absolute;
    top: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
