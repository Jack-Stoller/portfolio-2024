import { Section } from '../display/Section';
import { A } from '../input/A';

export const CreditsSection = () => {
  return (
    <Section title='Credits' id='credits'>
      <p class='text-sm text-neutral-500 text-justify'>
        This website was built from scratch using{' '}
        <A to='https://start.solidjs.com/'>Solid Start</A>,{' '}
        <A to='https://solidjs.com/'>SolidJS</A>,{' '}
        <A to='https://tailwindcss.com/'>Tailwind CSS</A>, and{' '}
        <A to='https://www.typescriptlang.org'>TypeScript</A> in{' '}
        <A to='https://code.visualstudio.com/'>Visual Studio Code</A>. The
        source code is available on <A to='#'>GitHub</A>. The layout is inspired
        by <A to='https://brittanychiang.com/'>Brittany Chiang's website</A>.
        Brand graphics were sourced from their respective websites. Additional
        graphics were created using{' '}
        <A to='https://affinity.serif.com/en-us/designer/'>Affinity Designer</A>
        .
      </p>
    </Section>
  );
};
