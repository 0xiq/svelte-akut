<script lang="ts">
	import TablerChevronRight from '~icons/tabler/chevron-right';
	let itemExpanded = false;
	const items = [
		{ label: 'Transparente Sendungsverfolgung' },
		{ label: 'Logistikberatung für Unternehmen' },
		{ label: 'Sendungen mit Empfangsbestätigung' },
		{ label: 'Neutraler und Nachnahme-Sendungsservice' },
		{ label: 'Beschaffungslogistik' },
		{ label: '24-Stunden-Service' }
	];
	const itemsMore = [
		{ label: 'Sonder-Transporte' },
		{ label: 'Eil-Transporte' },
		{ label: 'Express- und Direkttransporte' },
		{ label: 'On Board Service' },
		{ label: 'Gefahrguttransporte' },
		{ label: 'Autotransporte' },
		{ label: 'Komplettladungen' },
		{ label: 'Individuelle Transportanfragen' }
	];
</script>

<section class="section" id="dienstleistungen">
	<div class="container">
		<h2>Unsere Dienstleistungen</h2>
		<p class="text-big">
			Wir bieten eine umfassende Palette an Transportlösungen, die auf Ihre individuellen
			Bedürfnisse zugeschnitten sind.
		</p>
		<div class="services">
			{#each items as item}
				<div class="service text-big">
					{item.label}
				</div>
			{/each}
			{#if itemExpanded}
				{#each itemsMore as item}
					<button class="service text-big">
						{item.label}
						<TablerChevronRight />
					</button>
				{/each}
			{/if}
		</div>
		{#if !itemExpanded}
			<div class="button">
				<button class="btn" on:click={() => (itemExpanded = !itemExpanded)}>Mehr anzeigen</button>
			</div>
		{/if}
		{#if itemExpanded}
			<div class="button">
				<a class="btn" href="./kontakt">Jetzt Kontaktieren</a>
			</div>
		{/if}
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
			padding: 2rem 1.5rem;
			border-radius: 10px;
			transition: all 0.15s ease-in;
			&:hover {
				background-color: white;
			}
		}
		@include m {
			display: flex;
			flex-direction: column;
		}
	}
	.btn {
		background-color: $clr-red-500;
		padding: 0.75rem 2rem;
		border-radius: 25px;
		text-transform: uppercase;
		margin-inline: auto;
	}
	.button {
		text-align: center;
		margin-top: 2rem;
	}
</style>
