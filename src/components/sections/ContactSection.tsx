import { Section } from '../display/Section';
import { A } from '../input/A';
import { Button } from '../input/Button';
import { Field } from '../input/Field';

export const ContactSection = () => {
  return (
    <Section title='Contact' id='contact'>
      <div class='flex gap-12 align-middle'>
        <div class='flex-1'>
          <h2 class='text-2xl font-bold text-forest-800 mb-2'>Get in Touch</h2>

          <p class='text-forest-800 text-justify indent-6'>
            I'm always looking for new opportunities and challenges. If you have
            a project you'd like to discuss, or just want to say hi, feel free
            to get in touch. Use the form, or send me an email at{' '}
            <A to='mailto:me@jackstoller.com'>me@jackstoller.com</A> directly.
          </p>

          <div class='flex gap-4 mt-8 opacity-50'>
            <A to='https://www.linkedin.com/in/jack-stoller/'>
              <img
                src='/images/socials/linkedin.webp'
                alt='LinkedIn Logo'
                width='32'
                height='32'
              />
            </A>

            <A to='https://github.com/Jack-Stoller/'>
              <img
                src='/images/socials/github.svg'
                alt='Github Logo'
                width='32'
                height='32'
              />
            </A>

            <A to='https://www.instagram.com/jack.stoller.23/'>
              <img
                src='/images/socials/instagram.svg'
                alt='Instagram Logo'
                width='32'
                height='32'
              />
            </A>
          </div>
        </div>

        <div class='flex-1'>
          <form class='flex flex-col gap-4'>
            <Field
              label='Email'
              name='email'
              placeholder='jdoe@example.com'
              type='email'
              required
            />
            <Field
              label='Message'
              name='message'
              placeholder='Your message here...'
              type='textarea'
              rows={3}
              required
            />

            <Button class='w-full m-0'>Send</Button>
          </form>
        </div>
      </div>
    </Section>
  );
};
