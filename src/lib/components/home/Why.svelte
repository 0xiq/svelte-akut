<script lang="ts">
	const statItems = [
		{ stat: '1200+', title: 'Fahrten' },
		{ stat: '1200+', title: 'Fahrten' },
		{ stat: '1200+', title: 'Fahrten' },
		{ stat: '1200+', title: 'Fahrten' },
		{ stat: '1200+', title: 'Fahrten' }
	];
</script>

<section class="section container">
	<h2>Warum wir?</h2>
	<div class="flex">
		<div class="left">
			<p>
				Ea fugiat minim veniam quis. In cupidatat laborum cillum culpa minim ut anim duis. Irure
				minim sit proident Lorem eiusmod proident consequat pariatur. In sunt sunt labore commodo
				anim commodo nisi sit cupidatat in adipisicing labore sit aliqua duis.
			</p>
			<p>
				Cillum amet sit consequat cillum sit minim enim sint cupidatat tempor culpa. Ea fugiat minim
				veniam quis. In cupidatat laborum cillum culpa minim ut anim duis. Irure minim sit proident
				Lorem eiusmod proident consequat pariatur.
			</p>
			<a class="btn" href="./about">Mehr erfahren</a>
		</div>
		<div class="right">
			{#each statItems as item}
				<div class="stats">
					<h4>{item.stat}</h4>
					<h5>{item.title}</h5>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	h2 {
		margin-bottom: 1rem;
	}

	.flex {
		display: flex;
		justify-content: space-between;
	}

	.left {
		p {
			max-width: 40ch;
			margin-bottom: 2rem;
		}
		.btn {
			padding: 1rem 1.5rem;
			background-color: $clr-red-500;
			border-radius: 25px;
		}
	}

	.right {
		.stats {
			margin-bottom: 1rem;
			display: flex;
			gap: 0.5rem;
			align-items: flex-end;
			h5 {
				color: $clr-blue-300;
			}
		}
	}
</style>
