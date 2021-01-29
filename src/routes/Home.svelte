<script>
  import typewriter from "../utils/typewriter.js";
  // import Footer from "../components/Footer.svelte";

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

<!-- <Footer /> -->

<style>
  p {
    font-size: 3rem;
    margin: 8rem 0 0;
    opacity: 1;
    position: relative;
  }

  .comment {
    font-style: italic;
    color: #928374;
    margin-top: 0;
  }

  .cursor::after {
    content: "|";
    color: #d3869b;
    font-style: normal;
    position: absolute;
  }

  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #d3869b;
    }
  }

  .blink::after {
    animation: 1s blink step-end infinite;
  }

  @media (max-width: 620px) {
    p {
      width: 100%;
      font-size: 2rem;
    }
  }
</style>
