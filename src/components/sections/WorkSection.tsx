import { Section } from '../display/Section';

export const WorkSection = () => {
  return (
    <Section title='Work' id='work'>
      <div class='flex gap-12 align-middle'>
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
        <ul class='flex-1 text-neutral-800 list-disc leading-5'>
          <li class='my-2'>
            Design and develop numerous business grade applications,
            integrations and solutions for small and medium sized companies
            across the country
          </li>
          <li class='my-2'>
            Work with many teams to build solutions deployed in cloud, on
            premise, and in hybrid environments
          </li>
          <li class='my-2'>
            Prioritize and handle over 5 large projects at a time while also
            taking classes full time
          </li>
          <li class='my-2'>
            Mentor and review projects of other new coworkers or interns
          </li>
        </ul>
      </div>
    </Section>
  );
};
