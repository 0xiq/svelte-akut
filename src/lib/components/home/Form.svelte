<script lang="ts">
	export let form;
	export let enhance;
	export let errors;
	export let constraints;
	export let message;
</script>

{#if $message}<h3>{$message}</h3>{/if}

<form method="POST" use:enhance>
	<label for="name">Name</label>
	<input
		type="text"
		name="name"
		placeholder="Ihr Name"
		aria-invalid={$errors.name ? 'true' : undefined}
		bind:value={$form.name}
		{...$constraints.name}
	/>
	{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}

	<label for="email">E-Mail</label>
	<input
		type="email"
		name="email"
		placeholder="Ihre E-Mail Adresse"
		aria-invalid={$errors.email ? 'true' : undefined}
		bind:value={$form.email}
		{...$constraints.email}
	/>
	{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}

	<label for="phone">Telefon (optional)</label>
	<input
		type="string"
		name="phone"
		placeholder="Ihre Telefonnummer"
		aria-invalid={$errors.phone ? 'true' : undefined}
		bind:value={$form.phone}
		{...$constraints.phone}
	/>
	{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}

	<label for="email">Nachricht</label>
	<input
    class="message"
		type="text"
		name="message"
		placeholder="Ihre Nachricht an uns"
		aria-invalid={$errors.message ? 'true' : undefined}
		bind:value={$form.message}
		{...$constraints.message}
	/>
	{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
  <p class="text-small">Ihre Daten werden vertraulich behandelt und nur zur Bearbeitung Ihrer Anfrage verwendet.</p>
	<div><button class="btn">Submit</button></div>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		label {
      margin-bottom: 0.3rem;
		}
		input {
			background-color: $clr-blue-700;
			color: $clr-blue-50;
			border: 1.5px solid $clr-blue-200;
			padding: 0.5rem 0.7rem;
			border-radius: 10px;
			margin-bottom: 1rem;
			&::placeholder {
        color: $clr-blue-400;
			}
      &:focus {
        outline: none;
			border: 1.5px solid $clr-blue-50;
      }
		}
    .message {
      padding: 0.5rem 0.7rem 5rem 0.7rem;
    }
    .text-small {
      color: $clr-blue-200;
      margin-bottom: 1rem;
    }
    button {
     background-color: $clr-red-500; 
      border-radius: 10px;
      width: 100%;
      padding: 0.75rem;
    }
	}
</style>
