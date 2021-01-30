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
    --border: 10px solid var(--light);
    --box-shadow: var(--purple) 10px 10px 0;
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
    margin-bottom: 5rem;
    position: relative;
  }

  h2::after,
  .active::after {
    content: "";
    position: absolute;
    display: inline-block;
    height: 1rem;
    background-color: var(--purple);
    z-index: -1;
  }

  h2::after {
    top: 28px;
    left: 10px;
  }

  .active::after {
    width: 100%;
    top: 15px;
    left: 10px;
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
