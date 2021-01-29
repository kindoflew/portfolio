<script>
</script>

<svelte:head>
  <title>Lewis D'Avanzo | About</title>
</svelte:head>

<h2>About</h2>

  <section>
    <div class="paragraph">
      <p>
        Hi! I'm a front-end web developer based in New Jersey. I have a BA in Jazz
        Performance and a Masters in Music Education. After the pandemic started I
        began teaching myself how to code and less than a year later I'm making
        web apps with modern JavaScript and contributing to open-source projects
        on GitHub! (I'm <em>technically</em> a 
        <a href="https://github.com/sveltejs/svelte/commit/bf3535317038886b00e274b5225942a810f35158">Svelte contributor</a>.)
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
          alt="Lewis sitting at the kitchen table with coffee and a donut."
        />
      </div>
    
      <div class="list-wrapper">
        <h3>Currently Using</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript(ES6)</li>
          <li>Node.js/npm</li>
          <li>git</li>
          <li>Svelte</li>
        </ul>
      </div>
    </div>
  </section>

<style>
  h2::after {
    width: 6.5rem;
  }

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
    border: 10px solid var(--light);
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
    color: #d3869b;
    text-decoration: none;
  }

  a:visited {
    color: #d3869b;
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
