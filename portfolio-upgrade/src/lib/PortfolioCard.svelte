<script>
  export let project;
  let { title, url, code, description, img } = project;
</script>

<div class="card">
  <div class="img-wrapper">
    <img src={img} alt="Screenshot of {title}" />
  </div>
  <div class="content">
    <h3>{title}</h3>
    <p>{description}</p>
    <div class="links">
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label="{title}">Site</a>
      <a href={code} target="_blank" rel="noopener noreferrer" aria-label="Source code for {title}">Code</a>
    </div>
  </div>
</div>

<style>
  .card {
    border: var(--border);
    background-color: var(--dark);
    box-shadow: var(--box-shadow);
    position: relative;
  }

  .content {
    padding: 1rem;
    min-height: 10rem;
  }

  .img-wrapper {
    overflow: hidden;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 161px;
    object-fit: cover;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 1.3rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 2.5rem;
  }

  .links {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }

  a {
    padding: 0.7rem;
    border: 5px solid var(--light);
    color: var(--light);
    flex: 0;
    text-align: center;
    min-width: 30%;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease-in;
  }

  a:hover {
    text-decoration: none;
    color: var(--dark);
    background-color: var(--light);
  }
</style>
