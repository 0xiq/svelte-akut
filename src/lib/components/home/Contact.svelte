<script lang="ts">
  import Form from "$lib/components/home/Form.svelte";
	export let form;
	export let enhance;
	export let errors;
	export let constraints;
	export let message;
</script>

<section class="container section">
	<h2>Kontaktieren Sie uns</h2>
	<p>
		Haben Sie Fragen oder benötigen Sie ein individuelles Angebot? Unser Team steht Ihnen gerne zur
		Verfügung.
	</p>
	<div class="panes">
		<div class="left">
			<h5>Senden Sie uns eine Nachricht</h5>
			<p>Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.</p>
      <Form {form} {enhance} {errors} {constraints} {message}/>
		</div>
		<div class="right">
			<h5>Kontaktinformationen</h5>
		</div>
	</div>
</section>

<style lang="scss">
	.panes {
		display: flex;
		gap: 1rem;
		.left,
		.right {
			background-color: $clr-blue-500;
			flex: 1;
			color: $clr-blue-50;
			padding: 1rem;
			border-radius: 10px;
		}
	}
</style>
