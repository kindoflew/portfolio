<script>
  import { Route } from "tinro";
  import Home from "./routes/Home.svelte";
  import Portfolio from "./routes/Portfolio.svelte";
  import About from "./routes/About.svelte";
  import Contact from "./routes/Contact.svelte";
  import Header from "./components/Header.svelte";
  import Transition from "./components/Transition.svelte";
</script>

<div class="body-wrapper">
<Header />
<Transition>
  <main>
    <Route path="/"> <Home /> </Route>
    <Route path="/portfolio"> <Portfolio /> </Route>
    <Route path="/about"> <About /> </Route>
    <Route path="/contact"> <Contact /> </Route>
  </main>
</Transition>
</div>

<style>
  main {
    height: 100%;
  }

  .body-wrapper {
    transition: padding 0.3s ease;
    width: 75rem;
    padding: 0 5rem;
    height: 100%;
  }

  @media (max-width: 900px) {
    .body-wrapper {
      padding: 0 1.5rem;
    }
  }
</style>