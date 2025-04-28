<script lang="ts">
	import TablerChevronRight from '~icons/tabler/chevron-right';
	let itemExpanded = false;
	const items = [
		{ label: 'Warentransport' },
		{ label: 'Warentransport' },
		{ label: 'Warentransport' },
		{ label: 'Warentransport' },
		{ label: 'Warentransport' },
		{ label: 'Warentransport' }
	];
	const itemsMore = [
		{ label: 'Warentransport' },
		{ label: 'Warentransport' },
		{ label: 'Warentransport' },
		{ label: 'Warentransport' },
		{ label: 'Warentransport' },
		{ label: 'Warentransport' }
	];
</script>

<section class="section">
	<div class="container">
		<h2>Unsere Dienstleistungen</h2>
		<p class="text-big">
			Wir bieten eine umfassende Palette an Transportlösungen, die auf Ihre individuellen
			Bedürfnisse zugeschnitten sind.
		</p>
		<div class="services">
			{#each items as item}
				<button class="service text-big">
					{item.label}
					<TablerChevronRight class="icon" />
				</button>
			{/each}
			{#if itemExpanded}
				{#each itemsMore as item}
					<button class="service text-big">
						{item.label}
						<TablerChevronRight class="icon" />
					</button>
				{/each}
			{/if}
		</div>
		<button class="btn" on:click={() => (itemExpanded = !itemExpanded)}>Mehr anzeigen</button>
	</div>
</section>

<style lang="scss">
	section {
		margin-inline: auto;
		max-width: 97dvw;
		color: $clr-blue-50;
		background-color: $clr-blue-500;
		border-radius: 10px;
	}
	.container {
		padding: 4rem 0;
		p {
			max-width: 75ch;
			margin-top: 0.5rem;
			margin-bottom: 2rem;
			color: $clr-blue-100;
		}
	}
	.services {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5rem;
    margin-bottom: 1rem;
		.service {
			display: flex;
      justify-content: space-between;
			background-color: $clr-blue-50;
			color: $clr-blue-900;
			padding: 1rem 1.5rem;
			border-radius: 10px;
			transition: all 0.15s ease-in;
			&:hover {
				background-color: white;
			}
		}
	}
	.btn {
		background-color: $clr-red-500;
		padding: 0.75rem 2rem;
		border-radius: 25px;
		text-transform: uppercase;
	}
</style>
