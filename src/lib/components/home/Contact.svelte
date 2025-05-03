<script lang="ts">
	import Form from '$lib/components/home/Form.svelte';
	export let form;
	export let enhance;
	export let errors;
	export let constraints;
	export let message;
</script>

<section id="kontakt" class="container section">
	<h2>Kontaktieren Sie uns</h2>
	<p class="text-big">
		Haben Sie Fragen oder benötigen Sie ein individuelles Angebot? Unser Team steht Ihnen gerne zur
		Verfügung.
	</p>
	<div class="panes">
		<div class="left">
			<h5>Senden Sie uns eine Nachricht</h5>
			<p class="text-body">Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.</p>
			<Form {form} {enhance} {errors} {constraints} {message} />
		</div>
		<div class="right">
			<h5>Kontaktinformationen</h5>
			<div class="contact">
				<p>Adresse</p>
				<p class="contact-text">
					AKuT GMBH <br />
					Musterstr. 2 <br />
					23413 Eschweiler
				</p>
			</div>
			<div class="contact">
				<p>Telefon</p>
				<p class="contact-text">035943563453</p>
			</div>
			<div class="contact">
				<p>E-Mail</p>
				<p class="contact-text">hey@akut.de</p>
			</div>

			<div class="divide"></div>

			<div class="hours">
				<p>Öffnungszeiten</p>
				<div class="hours-card">
					<p>Montag - Freitag:</p>
					<p>8:00 - 18:00 Uhr</p>
				</div>
				<div class="hours-card">
					<p>Samstag:</p>
					<p>9:00 - 13:00 Uhr</p>
				</div>
				<div class="hours-card">
					<p>Sonntag:</p>
					<p>Geschlossen</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.text-big {
		margin: 1rem 0;
	}
	.panes {
		display: flex;
		gap: 1rem;
		.left,
		.right {
			background-color: $clr-blue-500;
			flex: 1;
			color: $clr-blue-50;
			padding: 3.5rem 3rem;
			border-radius: 10px;
		}
    @include l {
      flex-direction: column;
    }
		.left {
			p {
				color: $clr-blue-200;
        margin-bottom: 1rem;
			}
		}
		.right {
			h5 {
				margin-bottom: 1rem;
			}
		}
	}
	.contact {
		.contact-text {
			color: $clr-blue-200;
			margin-bottom: 1rem;
		}
	}

	.divide {
		border: 1px solid $clr-blue-400;
		width: 100%;
		margin: 2rem 0;
	}
	.hours {
		margin-top: 1rem;
	}
	.hours-card {
		display: flex;
		justify-content: space-between;
    margin: 0.7rem 0;
    color: $clr-blue-200;
	}
</style>
