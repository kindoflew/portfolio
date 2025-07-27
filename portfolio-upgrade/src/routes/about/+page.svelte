<script>
  const technology = [
    'JavaScript(ES6+)',
    'TypeScript',
    'Node.js',
    'React/Next',
    'Vue/Nuxt',
    'Svelte/kit',
    'Git/GitHub',
    'Sitecore',
    'Headless Wordpress',

  ];
</script>

<svelte:head>
  <title>Lewis D'Avanzo | About</title>
</svelte:head>

<h2>About</h2>

  <section>
    <div class="paragraph">
      <p>
        Hi! I'm a web developer based in Philadelphia. I have a BA in Jazz
        Performance and a Masters in Music Education. Currently, I'm working as a Seninor Front End Developer at One North Interactive. I also love open source and I've written, maintained, and/or contributed to a bunch of projects, including
        <a href="https://github.com/pmndrs/react-spring/tree/master/packages/parallax" target="_blank" rel="noopener noreferrer">
          @react-spring/parallax</a>.
      </p>
      <p>
        I like to put accessibility and responsive design at the front of my brain
        when I make stuff. The web is such a weird and wonderful place — everyone
        should be able to enjoy it!
      </p>
      <p>
        When I'm not coding I enjoy playing music, watching soccer, and falling
        down Wikipedia holes.
      </p>
    </div>
  
    <div class="cards">
      <div class="img-wrapper">
        <img
          src="portfolio-lew.jpg"
          alt="Lew sitting at the kitchen table with coffee and a donut."
        />
      </div>
    
      <div class="list-wrapper">
        <h3>Currently Using</h3>
        <ul>
          {#each technology as item}
          <li>{item}</li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

<style>
  section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
  }

  p {
    margin-top: 0;
    width: 90%;
  }

  p,
  li {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .img-wrapper {
    width: 17rem;
    margin-bottom: 2.5rem;
    border: var(--border);
    box-shadow: var(--box-shadow);
  }

  img {
    height: auto;
    width: 100%;
    display: block;
  }

  .list-wrapper {
    width: 17rem;
    border: var(--border);
    box-shadow: var(--box-shadow);
    padding-bottom: 0.5rem;
  }

  ul,
  h3 {
    margin-left: 1rem;
  }

  ul {
    list-style-type: square;
  }

  a {
    color: var(--light-purple);
    text-decoration: none;
  }

  a:visited {
    color: var(--light-purple);
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 750px) {
    section {
      flex-direction: column;
    }

    p {
      width: 100%;
    }

    .cards {
      margin-top: 2rem;
    }
  }
</style>
