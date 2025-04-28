import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { userSchema } from '$lib/schema';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';

// this block just creates the form and fills it with valus from lib/schema
export const load = async () => {
  const form = await superValidate(zod(userSchema));
  return { form };
};

// this block get's executed once the form is submitted
export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(userSchema));
    console.log(form);

    if (!form.valid) {
      // Return { form } and things will just work.
      console.log("Unvalid");
      return fail(400, { form });
    }

    console.log('Form submitted:', form.data);

    // Return the form with a status message
    return message(form, 'Form posted successfully!');
  }
};
