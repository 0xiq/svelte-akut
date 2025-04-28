<script lang="ts">
	const valueItems = [
		{ title: 'Title', text: 'Value text hello', icon: 'icon.png' },
		{ title: 'Title', text: 'Value text hello', icon: 'icon.png' },
		{ title: 'Title', text: 'Value text hello', icon: 'icon.png' }
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
				<p>{item.icon}</p>
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
		}
	}
</style>
