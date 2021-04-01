<script>
  import PortfolioCard from "../components/PortfolioCard.svelte";

  const projects = [
    {
      title: "svelte-parallax",
      url: "https://svelte.dev/repl/917289a96f564f3788dcb6400f44a8bc?version=3.37.0",
      code: "https://github.com/kindoflew/svelte-parallax",
      description: "A Svelte component that I published on npm.",
      img: "svelte-parallax.png",
    },
    {
      title: "Winter Eyes, LLC",
      url: "https://www.wintereyesnj.com",
      code: "https://github.com/kindoflew/winter-eyes-nj",
      description: "A website for a local property management company.",
      img: "wintereyes.png",
    },
    {
      title: "Pokedex",
      url: "https://polkadex.netlify.app",
      code: "https://github.com/kindoflew/pokedex",
      description: "A Pokedex built with Svelte, PokeAPI, and vanilla CSS.",
      img: "pokedex.png",
    },
    {
      title: "Crypto.quote()",
      url: "https://crypto-quote.netlify.app",
      code: "https://github.com/kindoflew/crypto-quote",
      description: "A cryptogram spin on the random quote fetch app.",
      img: "cryptoquote.png",
    },
    {
      title: "CeeLo",
      url: "https://codepen.io/kindoflew/full/QWNRjgM",
      code: "https://codepen.io/kindoflew/pen/QWNRjgM",
      description: "A simple dice game. My first JavaScript project.",
      img: "ceelo.png",
    },
  ];
</script>

<svelte:head>
  <title>Lewis D'Avanzo | Portfolio</title>
</svelte:head>

<h2>Portfolio</h2>
<div class="grid-container">
  {#each projects as project, index (index)}
    <PortfolioCard {project} />
  {/each}
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 2.5rem 2.5rem;
    margin-bottom: 4rem;
  }
</style>
