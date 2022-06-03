<script>
  import { toCurrencyFormat } from "../to-currency-format";
  import { total, updateTotalPerMonth } from "../store";
</script>

<header>
  <h1 class="diffused-bg">Reto de las 52 Semanas</h1>
</header>

<div class="total">
  <p class="diffused-bg">Esto es lo que habras ahorrado al final del reto</p>
  <p class="diffused-bg">{toCurrencyFormat($total)}</p>
</div>

<div class="input">
  <input
    type="text"
    name="amount"
    placeholder="Monto que vas a guardar"
    on:input={updateTotalPerMonth}
  />
</div>

<style>
  header {
    margin: 2em 0;
    display: flex;
    justify-content: center;
  }

  .input {
    display: flex;
    justify-content: center;
    margin: 2.4em 0em;
  }

  input {
    height: 4rem;
    width: 20rem;
    border: none;
    padding: 0 2em;
    font-size: 18px;
    background: var(--dark);
    font-family: "Nunito", sans-serif;
    color: #fafafa;
    outline: none;
  }

  input::placeholder {
    color: rgba(250, 250, 250, 0.5);
    font-size: 18px;
  }

  .total {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
  }

  .total :nth-child(2) {
    margin:  0.6em 0;
    font-size: 2rem;
    font-weight: 800;
  }
</style>
