<script>
  import typewriter from "../utils/typewriter.js";

  let submitted = false;
  let error = false;

  function handleSubmit() {
    let data = new FormData(document.getElementById("contact-form"));
    fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        error = false;
        submitted = true;
      })
      .catch((e) => {
        error = true;
      });
  }
</script>

<svelte:head>
  <title>Lewis D'Avanzo | Contact</title>
</svelte:head>

<h2>Contact</h2>
{#if submitted}
  <div>
    <p in:typewriter>
      Thanks for reaching out! I'll get back to you as soon as I can!
    </p>
  </div>
{:else}
  {#if error}
    <p class="error">
      <em>Something went wrong! Please resubmit or try again later!</em>
    </p>
  {/if}
  <form
    name="contact"
    id="contact-form"
    action="/"
    on:submit|preventDefault={handleSubmit}
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <label style="display:none;"
      >For robots only:
      <input name="bot-field" />
    </label>
    <input type="hidden" name="form-name" value="contact" />
    <label for="name">Name: </label>
    <input type="text" id="name" name="name" required />

    <label for="email">E-mail: </label>
    <input type="email" id="email" name="email" required />

    <label for="message">Message: </label>
    <textarea id="message" name="message" required />
    <button type="submit">Submit</button>
  </form>
{/if}

<style>
  h2::after {
    width: 9.2rem;
  }

  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  form,
  div {
    border: 10px solid var(--light);
    background-color: var(--dark);
    box-shadow: var(--purple) 10px 10px 0;
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    max-width: 32rem;
    margin-bottom: 4rem;
  }

  input,
  textarea {
    background-color: var(--light);
    margin-bottom: 1rem;
  }

  textarea {
    height: 5rem;
    resize: none;
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
  }

  button {
    font-size: 1.2rem;
    margin: 1rem 0 0.5rem;
    padding: 1rem;
    border: 5px solid var(--light);
    color: var(--light);
    background-color: var(--dark);
    text-align: center;
    min-width: 30%;
    font-weight: bold;
    transition: all 0.3s ease-in;
  }

  button:hover {
    background-color: var(--light);
    color: var(--dark);
    cursor: pointer;
  }
</style>
