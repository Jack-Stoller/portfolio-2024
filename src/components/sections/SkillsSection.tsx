import { P } from '../display/P';
import { Section } from '../display/Section';
import { Skill } from '../display/Skill';

export const SkillsSection = () => {
  return (
    <Section title='Skills' id='skills'>
      <P class='mb-4'>
        I'm always looking to learn a new language or framework. I enjoy the
        process of discovering how different technologies solve problems in
        their own ways. Every project I take on is just an excuse to learn a new
        language, framework or tool. These are some of the technologies I
        am most familiar with.
      </P>

      <div class='mb-8'>
        <h2 class='text-2xl font-bold text-neutral-800 leading-5 mb-4'>
          Languages
        </h2>

        <div class='flex gap-4 flex-wrap justify-between'>
          <Skill label='JavaScript' src='/images/skills/javascript.svg' />
          <Skill label='TypeScript' src='/images/skills/typescript.svg' />
          <Skill label='C#' src='/images/skills/csharp.svg' />
          <Skill label='Go' src='/images/skills/go.svg' />
          <Skill label='Python' src='/images/skills/python.svg' />
        </div>

        <p class='text-neutral-500 mt-1'>Also: Rust, C++, HTML, CSS, SQL</p>
      </div>

      <div class='mb-8'>
        <h2 class='text-2xl font-bold text-neutral-800 leading-5 mb-4'>
          Frameworks
        </h2>

        <div class='flex gap-4 flex-wrap justify-between'>
          <Skill
            label='SolidJS'
            src='/images/skills/solid.svg'
            iconClass='opacity-100'
          />

          <Skill label='ReactJS' src='/images/skills/react.svg' />

          <Skill label='.NET' src='/images/skills/dotnet.svg' />

          <Skill
            label='Azure Functions'
            src='/images/skills/azure-functions.svg'
          />
        </div>

        <p class='text-neutral-500 mt-1'>Also: Angular, Solid Start, Jest</p>
      </div>

      <div class='mb-8'>
        <h2 class='text-2xl font-bold text-neutral-800 leading-5 mb-4'>
          Other
        </h2>

        <div class='flex gap-4 flex-wrap justify-between'>
          <Skill
            label='Azure'
            src='/images/skills/azure.svg'
            iconClass='opacity-100'
          />

          <Skill
            label='Cloudflare (Pages)'
            src='/images/skills/cloudflare.svg'
          />

          <Skill label='Postman' src='/images/skills/postman.svg' />

          <Skill label='Twilio' src='/images/skills/twilio.svg' />

          <Skill label='Git' src='/images/skills/git.svg' />
        </div>

        <p class='text-neutral-500 mt-1'>
          Also: GCP, Firebase, GitHub, Azure SQL, Microsoft EntraID
        </p>
      </div>
    </Section>
  );
};
