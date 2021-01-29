<script>
  import typewriter from "../utils/typewriter.js";
  import Footer from "../components/Footer.svelte";

  let blink = false;
  // typewriter only works on elements with one child text node
  // so i move the "cursor" to the end of the second line after the
  // first finishes its animation
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

<div>
  <p 
    in:typewriter 
    on:introend={nextLine} 
    class:blink 
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

<Footer />

<style>
  div {
    margin: 8rem 0 8rem;
    height: 8rem;
  }

  p {
    font-size: 3rem;
    margin: 0;
    opacity: 1;
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
    position: absolute;
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

  @media (max-width: 620px) {
    div {
      height: 6rem;
      margin: 6rem 0 10rem;
    }
    p {
      width: 100%;
      font-size: 2rem;
    }
  }
</style>
