<script>
  import Layout from "./Layout.svelte";
</script>

<Layout />

<style global>
    :root {
    --light: #fbf1c7;
    --dark: #282828;
    --purple:#8f3f71;
    --light-purple: #d3869b;
    --red: #fb4934;
    --border: 0.625rem solid var(--light);
    --box-shadow: var(--purple) 0.625rem 0.625rem 0;
    --font: "Ubuntu Mono", monospace;
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
    content: "";
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
</style>
