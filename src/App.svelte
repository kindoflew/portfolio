<script>
  import Layout from "./Layout.svelte";
</script>

<Layout />

<style global>
    :root {
    --light: #fbf1c7;
    --dark: #282828;
    --highlight: #eaa81b;
    --purple:#8f3f71;
    --red: #9d0006;
    --border: 10px solid var(--light);
    --box-shadow: var(--purple) 10px 10px 0;
    --font: "Ubuntu Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  body {
    color: var(--light);
    overflow-y: scroll;
    display: flex;
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

  h2::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 11.5rem;
    height: 1rem;
    top: 28px;
    left: 10px;
    background-color: var(--purple);
    z-index: -1;
  }

  p, label {
    font-size: 1.2rem;
  }
</style>
