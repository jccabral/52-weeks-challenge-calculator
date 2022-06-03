<script>
  import { fade } from "svelte/transition";
  import { totalPerMonth, total } from "../store";
  import { toCurrencyFormat } from "../to-currency-format";
</script>

{#if $total > 0}
  <div transition:fade={{ duration: 120 }} class="per-week">
    <header>
      <h3>Monto por semana</h3>
    </header>

    {#each $totalPerMonth as amount, i}
      <span>
        <p>Semana {i + 1}</p>
        <p>{toCurrencyFormat(amount)}</p>
      </span>
    {/each}
  </div>
{/if}

<style>
  .per-week {
    padding: 0 2em;
    height: inherit;
    background: var(--dark);
    overflow: auto;
  }

  .per-week span {
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.4em 0;
  }

  h3 {
    margin: 1.2em 0em;
  }
</style>
