<script lang="ts">
  import typewriter from "$lib/typewriter";
  import { fade } from "svelte/transition";

  let submitted = false;
  let error = false;

  function handleSubmit() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    let data = new FormData(form as HTMLFormElement);
    fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      //@ts-expect-error
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
  <div in:fade>
    <p in:typewriter class="success">
      Thanks for reaching out! I'll get back to you as soon as I can!
    </p>
  </div>
{:else}
  {#if error}
    <p class="error">
      <em>Something went wrong! Please resubmit or try again later!</em>
    </p>
  {/if}
  {/* @ts-ignore */ null}
  <form
    name="contact"
    id="contact-form"
    action="/"
    on:submit|preventDefault={handleSubmit}
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <label style="display:none;">For robots only:<input name="bot-field" /></label>
    
    <input type="hidden" name="form-name" value="contact" />
    <label for="name">Name: </label>
    <input type="text" id="name" name="name" autocomplete="name" required />

    <label for="email">E-mail: </label>
    <input type="email" id="email" name="email" autocomplete="email" required />

    <label for="message">Message: </label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Submit</button>
  </form>
{/if}

<style>
  form,
  div {
    background-color: var(--dark);
    border: var(--border);
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    max-width: 32rem;
    margin-bottom: 4rem;
  }

  div {
    height: 22.25rem;
  }

  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    padding: 0.4em;
    margin: 0 0 1em 0;
    background-color: var(--light);
    border: 1px solid #ccc;
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

  button:focus {
    outline: 3px dashed var(--light-purple);
  }

  .success {
    font-size: 1.5rem;
    line-height: 1.1;
    margin-top: 6rem;
  }

  .error {
    color: var(--red);
  }
</style>
