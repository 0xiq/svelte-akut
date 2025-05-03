<script lang="ts">
	import TablerShield from '~icons/tabler/shield';
	import TablerLock from '~icons/tabler/lock';
	import TablerBrandZapier from '~icons/tabler/brand-zapier';
	const valueItems = [
		{
			title: 'Zuverlässigkeit',
			text: 'Wir stehen zu unserem Wort und liefern immer pünktlich und zuverlässig.'
		},
		{
			title: 'Sicherheit',
			text: 'Ihre Fracht ist bei uns in sicheren Händen. Wir garantieren höchste Sicherheitsstandards für Ihre wertvollen Güter.'
		},
		{
			title: 'Effizienz',
			text: 'Unsere optimierten Prozesse sparen Ihnen Zeit und Kosten bei jedem Transport.'
		}
	];
</script>

<section class="section container">
	<h2>Unsere Werte</h2>
	<p class="text-big">
		Unsere Kunden vertrauen uns aus gutem Grund. Erfahren Sie was uns auszeichnet
	</p>
	<div class="items">
		{#each valueItems as item}
			<div class="item">
				<div class="icon">
					<TablerShield />
				</div>
				<h5>{item.title}</h5>
				<p>{item.text}</p>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.items {
		display: flex;
		gap: 1rem;
		justify-content: space-evenly;
		.item {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			flex-direction: column;
			background-color: $clr-blue-500;
			color: $clr-blue-50;
			padding: 3rem 2rem;
			border-radius: 10px;
      text-align: center;
		}
    .icon {
      font-size: 2rem;
      color: $clr-red-500;
    }
	}
</style>
