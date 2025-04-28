<script lang="ts">
	import '$lib/scss/app.scss';
	import '$lib/scss/resets.scss';
  import logo from '$lib/assets/logo.webp?enhanced';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>


<Header {logo}/>
<slot />
<Footer {logo}/>
