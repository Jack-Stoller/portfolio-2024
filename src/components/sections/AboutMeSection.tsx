import { P } from '../display/P';
import { Section } from '../display/Section';

export const AboutMeSection = () => {
  return (
    <Section title='About Me' id='about-me'>
      <div class='flex flex-col sm:flex-row gap-12 align-middle'>
        <P>
          I’m a software engineer that loves building{' '}
          <strong>simple solutions</strong> for{' '}
          <strong>complex problems</strong>. I’m driven by curiosity and a
          desire for continuous learning. I want to develop highly scalable and
          secure applications. I have been working as a{' '}
          <strong>software engineer</strong> for a consulting company for the
          past four years. I’m currently studying <strong>cybersecurity</strong>{' '}
          in an effort to develop more secure applications and from a passion
          for <strong>cryptography</strong>. My other interests include{' '}
          <strong>distributed systems</strong>,{' '}
          <strong>high-performance computing</strong>, and new web technologies.
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
