import { writable, derived } from 'svelte/store'

export const totalPerMonth = writable([]);
export const total = derived(
  totalPerMonth,
  $totalPerMonth => $totalPerMonth.reduce((acc, val) => (acc += val), 0)
);

export function updateTotalPerMonth({ target }) {
  const calculateTotal = () => [
    ...new Array(52).fill().map((_, i) => (i + 1) * target.value),
  ]

  totalPerMonth.update(calculateTotal)
}