<script>
  import BackgroundAnimation from "./lib/components/background-animation.svelte";
  import Header from './lib/components/header.svelte';
  import AmountList from './lib/components/amount-list.svelte';
</script>

<main>
  <BackgroundAnimation />

  <div class="front-layout">
    <Header />
    <AmountList />
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;600;800&display=swap");
  
  :root {
    --dark: rgba(20, 20, 20, 0.85);
    --blue: #283593;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :global(body) {
    background: var(--blue);
    margin: 0;
    color: white;
    font-family: "Nunito", sans-serif;
  }

  :global(.diffused-bg) {
    background: rgba(40, 53, 147, 1);
    box-shadow: 0px 0px 10px 12px rgba(40, 53, 147, 1);
    border-radius: 0.2em;
  }

  main {
    overflow: hidden;
    position: relative;
    min-height: 100vh;
  }

  .front-layout {
    position: relative;
    z-index: 99999;
    margin: auto;
  }
</style>
