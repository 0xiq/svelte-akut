<script lang="ts">
	const navItems = [
		{ href: './home', label: 'Home' },
		{ href: './dienstleistungen', label: 'Dienstleistungen' },
		{ href: './about', label: 'About' },
		{ href: './kontakt', label: 'Kontakt' },
		{ href: './impressum', label: 'Impressum' }
	];

	export let logo;
</script>

<footer>
	<div class="left">
		<div>
			<enhanced:img src={logo} alt="logo"> </enhanced:img>
		</div>
		<p>
			Seit über 20 Jahren Ihr zuverlässiger Partner für sichere und effiziente Transportlösungen in
			ganz Deutschland und Europa.
		</p>
	</div>

	<nav>
		<p class="title">Schnelllinks</p>
		{#each navItems as item}
			<a href="item.href">{item.label}</a>
		{/each}
	</nav>

	<div class="contact">
		<p class="title">Kontakt</p>
		<p>
			AKuT GmbH <br />
			Musterstr. 23 <br />
			12345 Eschweiler
		</p>
		<p>0240388383</p>
		<p>akut@akut.de</p>
	</div>
</footer>

<style lang="scss">
	footer {
		background-color: $clr-blue-500;
		color: $clr-blue-200;
		display: flex;
    justify-content: space-between;
    padding: 2rem;
    @include m {
      flex-direction: column;
      gap: 1.5rem;
    }
	}

	.left {
		flex: 2;
		img {
			width: 100px;
			height: auto;
		}
    p {
      padding-left: 0.3rem;
      max-width: 65ch;
    }
	}

	nav,
	.contact {
		padding-top: 0.3rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		.title {
			color: $clr-blue-50;
		}
    a {
      transition: 0.2s ease all;
      &:hover {
        color: $clr-red-600;
      }
    }
	}
</style>
