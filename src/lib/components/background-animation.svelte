<script>
	import { onMount } from 'svelte';

	let characters = ['💲', '🤑', '💰'];

	let confetti = new Array(150).fill()
		.map((_, i) => {
			return {
				character: characters[i % characters.length],
				x: Math.random() * 100,
				y: -40 - Math.random() * 100,
				r: 0.6 + Math.random() * 1
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			confetti = confetti.map(emoji => {
				emoji.y += 0.7 * emoji.r;
				if (emoji.y > 120) emoji.y = -20;
				return emoji;
			});
		}

		loop();

		return () => cancelAnimationFrame(frame);
	});
</script>

<div>
  {#each confetti as c}
	  <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span>
  {/each}
</div>

<style>
	span {
		overflow: hidden;
		position: absolute;
		font-size: 5vw;
		user-select: none;
	}
</style>