import { Section } from '../display/Section';

export const WorkSection = () => {
  return (
    <Section title='Work' id='work'>
      <div class='flex flex-col sm:flex-row gap-4 sm:gap-12 align-middle'>
        <div class='flex-none w-[298px]'>
          <img
            src='/images/pcs.svg'
            alt='Palitto Consulting Logo'
            width='298'
            height='97'
            class='my-4 opacity-75'
          />

          <h2 class='text-2xl font-bold text-neutral-800 leading-5 mb-2'>
            Palitto Consulting Services
          </h2>

          <h3 class='text-lg font-bold text-forest-500 leading-5 mb-2 max-w-80'>
            Software Engineer
          </h3>

          <p class='text-neutral-500'>Part-time, Feb 2021 to Present</p>
        </div>
        <ul class='flex-1 text-neutral-800 list-disc leading-5 pl-4'>
          <li class='my-2'>
            Design and develop numerous business-grade applications,
            integrations, and solutions for small and medium sized companies
            across the country
          </li>
          <li class='my-2'>
            Collaborate with coworkers to architect the simplest solutions for
            complex problems in cloud, hybrid and on-premise environments
          </li>
          <li class='my-2'>
            Ensure compliance with industry standards and best practices
            including HIPAA, PCI, and ISO standards
          </li>
          <li class='my-2'>
            Review projects from and mentor new coworkers and interns.
          </li>
        </ul>
      </div>
    </Section>
  );
};
