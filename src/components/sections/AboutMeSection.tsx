import { P } from '../display/P';
import { Section } from '../display/Section';

export const AboutMeSection = () => {
  return (
    <Section title='About Me' id='about-me'>
      <div class='flex flex-col sm:flex-row gap-12 align-middle'>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <strong>incididunt ut</strong> labore et dolore magna
          aliqua. Ut enim ad minim veniam, <strong>quis nostrud</strong>{' '}
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute <strong>irure</strong> dolor in reprehenderit in voluptate
          velit esse <strong>cillum dolore</strong> eu fugiat nulla pariatur.
        </P>

        <img
          src='/images/code.webp'
          alt='Coding Illustration'
          width='150'
          height='150'
          class='flex-none self-center'
        />
      </div>
    </Section>
  );
};
