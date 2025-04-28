<script lang="ts">
	import HeroImage from '$lib/assets/hero.jpeg?enhanced';
	import TablerChevronDown from '~icons/tabler/chevron-down';
</script>

<section>
	<div class="img-container">
		<div class="img-overlay"></div>
		<enhanced:img src={HeroImage} alt="Autobahn bei Nacht" />
	</div>
	<div class="container">
		<div class="container-inner">
			<h1>Ihre Wahre <br /> Unser Versprechen</h1>
			<div class="buttons">
				<a class="btn contact" href="kontakt">Beratung anfordern</a>
				<a class="btn dienstleistungen" href="./dienstleistungen">Dienstleistungen ansehen ></a>
			</div>
		</div>
		<button class="scroll text-big" on:click={() => document.getElementById('about')?.scrollIntoView()}>
			<TablerChevronDown />
		</button>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		min-height: 810px;
		overflow: hidden;
		z-index: 0;
	}
	.img-container {
		z-index: -1;
		position: absolute;
		overflow: hidden;
		height: 100%;
		width: 100%;
		.img-overlay,
		img {
			position: absolute;
			object-fit: cover;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		img {
			z-index: -2;
		}
		.img-overlay {
			background-color: $clr-overlay;
		}
	}
	.container {
		min-height: 810px;
		color: $clr-blue-50;
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		.container-inner {
			margin-bottom: 4rem;
		}
		.buttons {
			margin-top: 1rem;
			display: flex;
			gap: 1rem;
			> * {
				padding: 1rem 2rem;
				border-radius: 25px;
			}
			.contact {
				background-color: $clr-red-500;
			}
			.dienstleistungen {
				text-decoration: underline;
			}
		}
		.scroll {
			transition: all 0.2s ease;
			margin-bottom: 1rem;
			&:hover {
				color: $clr-red-500;
				transform: scale(1.1);
			}
		}
	}
</style>
