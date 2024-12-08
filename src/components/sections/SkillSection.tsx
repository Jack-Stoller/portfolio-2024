import { P } from '../display/P';
import { Section } from '../display/Section';

export const SkillsSection = () => {
  return (
    <Section title='Skills' id='skills'>
      <P class='mb-4'>
        I'm always looking to learn a new language or framework and enjoy the
        process of discovering how different technologies solve problems in
        their own ways. Here are some of the ones that I am most familiar with
        and have developed the most projects with.
      </P>

      <div class='mb-8'>
        <h2 class='text-2xl font-bold text-forest-800 leading-5 mb-4'>
          Languages
        </h2>

        <div class='flex gap-4'>
          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/javascript.svg'
              alt='JavaScript Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>JavaScript</figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/typescript.svg'
              alt='TypeScript Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>TypeScript</figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/csharp.svg'
              alt='C# Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>C#</figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/go.svg'
              alt='Go Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>Go</figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/python.svg'
              alt='Python Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>Python</figcaption>
          </figure>
        </div>

        <p class='text-forest-500 mt-1'>Also: Rust, C++, HTML, CSS, SQL</p>
      </div>

      <div class='mb-8'>
        <h2 class='text-2xl font-bold text-forest-800 leading-5 mb-4'>
          Frameworks
        </h2>

        <div class='flex gap-4'>
          <figure class='flex-1 text-center'>
            <img
              class='m-auto'
              src='/images/skills/solid.svg'
              alt='SolidJS Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>SolidJS</figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/react.svg'
              alt='ReactJS Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>ReactJS</figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/dotnet.svg'
              alt='.NET Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>.NET</figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/azure-functions.svg'
              alt='Azure Functions Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>
              Azure Functions
            </figcaption>
          </figure>
        </div>

        <p class='text-forest-500 mt-1'>Also: Angular, Solid Start, Jest</p>
      </div>

      <div class='mb-8'>
        <h2 class='text-2xl font-bold text-forest-800 leading-5 mb-4'>Other</h2>

        <div class='flex gap-4'>
          <figure class='flex-1 text-center'>
            <img
              class='m-auto'
              src='/images/skills/azure.svg'
              alt='Azure Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>Azure</figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/cloudflare.svg'
              alt='Cloudflare Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>
              Cloudflare (Pages)
            </figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/postman.svg'
              alt='Postman Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>Postman</figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/twilio.svg'
              alt='Twilio Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>Twilio</figcaption>
          </figure>

          <figure class='flex-1 text-center'>
            <img
              class='m-auto opacity-75'
              src='/images/skills/git.svg'
              alt='Git Logo'
              width='75'
              height='75'
            />
            <figcaption class='text-forest-500 mt-1'>Git</figcaption>
          </figure>
        </div>

        <p class='text-forest-500 mt-1'>
          Also: GCP, Firebase, GitHub, Azure SQL, Microsoft EntraID
        </p>
      </div>
    </Section>
  );
};
