import { Section } from '../display/Section';
import { Socials } from '../display/Socials';
import { ContactForm } from '../forms/ContactForm';
import { A } from '../input/A';
import { Button } from '../input/Button';
import { Field } from '../input/Field';

export const ContactSection = () => {
  return (
    <Section title='Contact' id='contact'>
      <div class='flex flex-col sm:flex-row gap-12 align-middle'>
        <div class='flex-1'>
          <h2 class='text-2xl font-bold text-forest-800 mb-2'>Get in Touch</h2>

          <p class='text-forest-800 text-justify indent-6'>
            I'm always looking for new opportunities and challenges. If you have
            a project you'd like to discuss, or just want to say hi, feel free
            to get in touch. Use the form, or send me an email at{' '}
            <A to='mailto:me@jackstoller.com'>me@jackstoller.com</A> directly.
          </p>

          <Socials class='hidden sm:flex mt-8' />
        </div>

        <div class='flex-1'>
          <ContactForm />
        </div>

        <Socials class='flex sm:hidden' />
      </div>
    </Section>
  );
};
