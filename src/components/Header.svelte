<script>
  import { active } from "tinro";

  let paths = [
    { path: "/portfolio", text: "Portfolio" },
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
  ];
</script>

<header>
  <h1><a href="/">Lewis D'Avanzo</a></h1>
  <nav>
    <ul>
      {#each paths as { path, text }, index (index)}
        <li><a href={path} use:active>{text}</a></li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 3rem 0 6rem;
  }

  h1 {
    font-size: 3.5rem;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 0.9;
  }

  nav {
    margin: 1rem 0;
    width: 25rem;
    display: flex;
    align-items: stretch;
  }

  ul {
    list-style: none;
    font-size: 1.5rem;
    margin: 0;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    position: relative;
  }

  a {
    color: var(--light);
    text-decoration: none;
    letter-spacing: 1px;
  }

  a:hover {
    text-decoration: underline;
  }

  a[href="/"] {
    display: inline-block;
    width: 15rem;
  }

  a[href="/"]:hover {
    text-decoration: none;
  }

  a:visited {
    color: var(--light);
  }

  @media (max-width: 800px) {
    header {
      flex-direction: column;
      align-items: flex-start;
    }

    nav {
      width: 100%;
      margin-top: 2rem;
    }
  }
</style>