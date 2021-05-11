<script>
  import typewriter from "../utils/typewriter.js";
  import Footer from "../components/Footer.svelte";

  let blink = false;
  // typewriter only works on elements with one child text node
  // so i have two <p>s so i can style the second line without a <span>
  let line1 = true;
  let line2 = false;

  function nextLine() {
    line1 = false;
    line2 = true;
  }

  function introEnd() {
    blink = true;
  }
</script>

<svelte:head>
  <title>Lewis D'Avanzo | Web Developer</title>
</svelte:head>

<div class="flex-container">
  <div class="hero-text">
    <p 
      in:typewriter 
      on:introend={nextLine} 
      class:cursor={line1}
    >
      front-end web developer
    </p>
    <p
      in:typewriter={{ delay: 1840 }}
      on:introend={introEnd}
      class:blink
      class:cursor={line2}
      class="comment"
    >
      // i like to make stuff
    </p>
  </div>
</div>

<Footer />

<style>
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40vh;
  }

  .hero-text {
    height: 7rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 3rem;
    margin: 0;
    position: relative;
  }

  .comment {
    font-style: italic;
    color: #928374;
  }

  .cursor::after {
    content: "|";
    color: var(--light-purple);
    font-style: normal;
  }

  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--light-purple);
    }
  }

  .blink::after {
    animation: 1s blink step-end infinite;
  }

  @media (max-width: 800px) {
    .flex-container {
      height: 25vh;
      justify-content: flex-start;
    }
  }

  @media (max-width: 620px) {
    .hero-text {
      height: 4rem;
      margin-bottom: 0;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (max-width: 430px) {
    p {
      font-size: 1.7rem;
    }
  }
</style>