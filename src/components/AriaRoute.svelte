<script>
  import { router } from "tinro";
  import { tick } from "svelte";

  let promise = getCurrentTitle();
  router.subscribe((_) => (promise = getCurrentTitle()));

  async function getCurrentTitle() {
    await tick();
    let title = document.querySelector("h2");
    let current = "Lewis D'Avanzo Home";

    if (title) {
      current = title.textContent;
    } 

    return current;
  }
</script>

<div aria-live="polite" aria-atomic="true">
  {#await promise}
    <p />
  {:then current}
    <p>Navigated to {current} page</p>
  {/await}
</div>

<style>
  div {
    position: absolute;
    top: 0;
    width: 1;
    height: 1;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
