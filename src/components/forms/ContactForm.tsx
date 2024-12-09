import { Component, createSignal } from 'solid-js';
import { Button } from '../input/Button';
import { Field } from '../input/Field';
import { sendEmail } from '~/utils/api';

export const ContactForm: Component = () => {
  const [loading, setLoading] = createSignal(false);
  const [successMessage, setSuccessMessage] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    setSuccessMessage(null);

    setLoading(true);
    sendEmail(data.email.toString(), data.message.toString())
      .then(() => {
        form.reset();
        setSuccessMessage('Message sent successfully!');
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form class='flex flex-col gap-4' onsubmit={handleSubmit}>
      <Field
        label='Email'
        name='email'
        placeholder='jdoe@example.com'
        type='email'
        required
        disabled={loading()}
      />
      <Field
        label='Message'
        name='message'
        placeholder='Your message here...'
        type='textarea'
        rows={3}
        required
        disabled={loading()}
      />

      {successMessage() && <p class='text-forest-500'>{successMessage()}</p>}
      {error() && <p class='text-red-600'>{error()}</p>}
      <Button class='w-full m-0' disabled={loading()}>
        {loading() ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
};
