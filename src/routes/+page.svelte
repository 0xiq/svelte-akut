<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	export let data;
  const { form, enhance, errors, constraints, message} = superForm(data.form);

	import Hero from '$lib/components/home/Hero.svelte';
	import About from '$lib/components/home/About.svelte';
	import Service from '$lib/components/home/Service.svelte';
	import Why from '$lib/components/home/Why.svelte';
	import Values from '$lib/components/home/Values.svelte';
	import Contact from '$lib/components/home/Contact.svelte';
</script>

<Hero />
<About />
<Service />
<Why />
<Values />
<Contact {form} {enhance} {errors} {constraints} {message}/>
<section class="section"></section>
