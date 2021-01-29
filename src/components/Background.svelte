<script>
</script>

<div class="background">
  <div class="green stripe" />
  <div class="yellow stripe" />
  <div class="orange stripe" />
  <div class="red stripe" />
</div>

<style>
  .background {
    /* color: var(--light); */
    position: fixed;
    z-index: -1;
    bottom: 0;
    top: 6rem;
    right: 0;
    left: 0;
    display: flex;
    height: 85vh;
    /* width: 100vw; */
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }

  .stripe {
    height: 2.5rem;
    width: 100%; 
  }

  .green {
    background-color: #79740e;
  }
  .orange {
    background-color: #af3a03;
  }
  .yellow {
    background-color: #b57614;
  }
  .red {
    background-color: #9d0006;
  }
</style>