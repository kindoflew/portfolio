<script>
  import Header from '$lib/Header.svelte';
  import Transition from '$lib/Transition.svelte';

  export let children;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
  />
</svelte:head>

<div class="body-wrapper">
  <Header />
  <main>
    <Transition>
      {@render children()}
    </Transition>
  </main>
</div>

<style>
  main {
    height: 100%;
  }

  .body-wrapper {
    transition: padding 0.3s ease;
    width: 75rem;
    padding: 0 5rem;
    height: 100%;
  }

  @media (max-width: 900px) {
    .body-wrapper {
      padding: 0 1.5rem;
    }
  }
  :global {
    :root {
      --light: #fbf1c7;
      --dark: #282828;
      --purple: #8f3f71;
      --light-purple: #d3869b;
      --red: #fb4934;
      --border: 0.625rem solid var(--light);
      --box-shadow: var(--purple) 0.625rem 0.625rem 0;
      --font: 'Ubuntu Mono', monospace;
    }

    body {
      color: var(--light);
      overflow-y: scroll;
      display: flex;
      min-height: 100vh;
      width: 100%;
      justify-content: center;
      background-color: var(--dark);
      font-family: var(--font);
      margin: 0px;
    }

    h2 {
      font-size: 2.5rem;
      margin-top: 0;
      margin-bottom: 5rem;
      display: inline-block;
      position: relative;
    }

    h2::after,
    .active::after {
      content: '';
      position: absolute;
      left: 0.625rem;
      display: inline-block;
      width: 100%;
      height: 1rem;
      background-color: var(--purple);
      z-index: -1;
    }

    h2::after {
      top: 1.75rem;
    }

    .active::after {
      top: 0.9375rem;
    }

    p,
    label {
      font-size: 1.2rem;
    }

    button:focus,
    input:focus,
    textarea:focus,
    a:focus {
      outline: 3px dashed var(--light-purple);
    }

    button:focus:not(:focus-visible),
    a:focus:not(:focus-visible) {
      outline: none;
    }

    @media (min-width: 1500px) {
      html {
        font-size: 1.3em;
      }
    }
  }
</style>
