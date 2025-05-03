<script lang="ts">
	import TablerMenu2 from '~icons/tabler/menu-2';
	import TablerX from '~icons/tabler/x';
	export let logo;

	const navItems = [
		{ href: './', label: 'Home' },
		{ href: '#dienstleistungen', label: 'Dienstleistungen' },
		{ href: '.#warum-wir', label: 'About' },
		{ href: '.#kontakt', label: 'Kontakt' },
		{ href: './impressum', label: 'Impressum' }
	];

	let navOpen = false;
	let scrollY = 0;
	let prev = 0;
	let hidden = false;

	$: {
		hidden = scrollY > prev && scrollY > 50;
		prev = scrollY;
	}
</script>

<svelte:window bind:scrollY />

<header class:hidden aria-hidden={hidden}>
	<div class="container">
		<div>
			<enhanced:img src={logo} alt="logo"> </enhanced:img>
		</div>
		<button class="mobileOpen" on:click={() => (navOpen = !navOpen)}>
			<TablerMenu2 />
		</button>
		<nav class="desktopNav">
			{#each navItems as item}
				<a href={item.href}>
					{item.label}
				</a>
			{/each}
		</nav>
	</div>
</header>

<section id="mobileNav" class="mobileNav" class:show={navOpen} aria-hidden={!navOpen}>
	<button class="mobileClose" on:click={() => (navOpen = !navOpen)}>
		<TablerX />
	</button>
	<nav>
		{#each navItems as item}
			<a href={item.href}>
				{item.label}
			</a>
		{/each}
	</nav>
</section>

{#if navOpen}
	<button class="mobileOverlay" on:click={() => (navOpen = !navOpen)} aria-hidden="true"></button>
{/if}

<style lang="scss">
	header {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 40;
		background-color: $clr-blue-700;
		transition: all 0.3s ease;
		&.hidden {
			transform: translateY(-100%);
		}
		.container {
			padding: 1rem 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			margin-inline: auto;
		}

		img {
			width: 100px;
			height: auto;
		}
		.desktopNav {
			display: flex;
			gap: 1rem;
			@include m {
				display: none;
			}
		}
	}

	a {
		color: $clr-blue-50;
		transition: all ease-in 0.15s;
		&:hover {
			color: $clr-red-500;
		}
	}

	.mobileClose,
	.mobileOpen {
		color: $clr-blue-50;
		transition: all 0.1s ease;
		font-size: $text-big;
		&:hover {
			color: red;
			transform: scale(1.1);
		}
	}

	.mobileOpen {
		display: none;
		@include m {
			display: block;
		}
	}

	.mobileClose {
		align-self: flex-end;
	}

	.mobileNav {
		background-color: $clr-blue-700;
		position: fixed;
		top: 0;
		z-index: 100;
		right: -100%;
		height: 100dvh;
		width: 60dvw;
		padding: 1.5rem;

		display: none;
		flex-direction: column;
		gap: 1rem;

		transition: all 0.2s ease;
		&.show {
			right: 0;
		}
		nav {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			a {
				background-color: $clr-blue-600;
				padding: 1rem;
			}
		}
    @include m {
      display: flex;
    }
	}

	.mobileOverlay {
    display: none;
    cursor: default;
		position: fixed;
		top: 0;
		z-index: 90;
		background-color: $clr-overlay;
		width: 100dvw;
		height: 100dvh;
    @include m {
      display: block;
    }
	}
</style>
