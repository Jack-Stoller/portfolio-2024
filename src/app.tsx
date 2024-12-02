import { ImageCarouselClientComponent } from './components/display/ImageCarousel';
import { NavItem } from './components/display/navItem';
import { SectionHeading } from './components/display/SectionHeading';
import { Button } from './components/input/Button';
import { Chip } from './components/input/Chip';

import './index.css';

export default function App() {
  return (
    <div class='grid grid-cols-[400px_minmax(0,1fr)] max-w-[1200px] mx-auto border-x border-forest-600'>
      <img src='/images/background-pattern.svg' alt='' class='fixed inset-0 w-full h-full opacity-5 pointer-events-none' />

      <span></span>
      <aside class='border-r border-forest-600 p-4 flex flex-col h-dvh fixed w-[400px]'>
        <section class='flex-none text-center'>
          {/* <img
            class='inline-block mt-16 mb-6'
            src='/images/wave.webp'
            alt='Wave Emoji'
            width='110'
            height='110'
          />

          <h1 class='text-4xl font-black text-forest-700 mb-1'>Jack Stoller</h1>

          <h2 class='text-xl font-black text-forest-500'>
            Developer & Student
          </h2> */}
        </section>

        <nav class='flex-1 mt-32'>
          <ul>
            <NavItem to='#About_Me' active={true}>
              About Me
            </NavItem>
            <NavItem to='#Work'>Work</NavItem>
            <NavItem to='#Education'>Education</NavItem>
            <NavItem to='#Projects'>Projects</NavItem>
            <NavItem to='#Contact'>Contact</NavItem>
          </ul>
        </nav>

        <footer class='flex-none flex justify-between text-forest-500 text-sm p-2'>
          {/* <p>© {new Date().getFullYear()} Jack Stoller</p> */}
          <p>Published 2024-11-30</p>
        </footer>
      </aside>

      <main class='px-12 pt-[16rem]'>
        {/* <section id='About_Me' class='my-16'>
          <SectionHeading>About Me</SectionHeading>

          <div class='flex gap-12 align-middle'>
            <p class='indent-6 text-justify leading-5 text-forest-800'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <strong>incididunt ut</strong> labore et dolore
              magna aliqua. Ut enim ad minim veniam,{' '}
              <strong>quis nostrud</strong> exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute <strong>irure</strong>{' '}
              dolor in reprehenderit in voluptate velit esse{' '}
              <strong>cillum dolore</strong> eu fugiat nulla pariatur.
            </p>

            <img
              src='/images/code.webp'
              alt='Coding Illustration'
              width='150'
              height='150'
              class='flex-none self-center'
            />
          </div>
        </section> */}

        {/* <section id='Work' class='my-16'>
          <SectionHeading>Work</SectionHeading>

          <div class='flex gap-12 align-middle'>
            <div class='flex-none w-[256px]'>
              <img
                src='/images/pcs.webp'
                alt='Palitto Consulting Logo'
                width='256'
                height='68'
                class='mb-4 mt-4'
              />

              <h2 class='text-2xl font-bold text-forest-800 leading-5 mb-2'>
                Palitto Consulting Services
              </h2>

              <h3 class='text-lg font-bold text-forest-500 leading-5 mb-2 max-w-80'>
                Software Engineer
              </h3>

              <p class='text-forest-500'>
                Part-time, Feb 2021 to Present
              </p>
            </div>
            <ul class='flex-1 text-forest-800 list-disc leading-5'>
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

          <div class='flex flex-wrap mb-2'>
            <Chip>Typescript</Chip>
            <Chip>.NET</Chip>
            <Chip>HTML / CSS / Javascript</Chip>
            <Chip>React</Chip>
            <Chip>Solid.js</Chip>
            <Chip>Twilio</Chip>
            <Chip>SQL</Chip>
            <Chip>Azure</Chip>
          </div>
        </section>

        <section id='Education' class='my-16'>
          <SectionHeading>Education</SectionHeading>

          <div class='flex gap-12 align-middle'>
            <img
              src='/images/ua.webp'
              alt='University of Akron Logo'
              width='100'
              height='164'
              class='flex-none self-center'
            />

            <div class='flex-1'>
              <h5 class='text-lg text-forest-500 float-right'>
                2023-{Math.min(2026, new Date().getFullYear())}
              </h5>

              <h2 class='text-2xl font-bold text-forest-800 mb-2'>
                University of Akron
              </h2>

              <h3 class='text-lg font-bold text-forest-500 leading-5 mb-2 max-w-80'>
                Bachelor of Science in Computer Information Systems,
                Cybersecurity
              </h3>

              <h4 class='font-bold text-forest-500 leading-5'>
                Minor in Computer Science
              </h4>
              <h4 class='font-bold text-forest-500 leading-5 mb-2'>
                Minor in Business Administration
              </h4>

              <p class='text-forest-800 text-sm'>
                Expected graduation in June 2026.
              </p>
            </div>
          </div>
        </section> */}

        <section id='Projects'>
          <SectionHeading>Projects</SectionHeading>

          <div>
            <div class='flex gap-4 mb-4'>
              <div>
                <h2 class='text-2xl font-bold text-forest-800 mb-2'>
                  Map Utilities
                </h2>
                <div class='flex flex-wrap mb-2'>
                  <Chip>Go</Chip>
                  <Chip>Web Scraping</Chip>
                  <Chip>goroutines</Chip>
                  <Chip>Google Maps API</Chip>
                </div>
                <p class='text-forest-800 leading-4'>
                  These are a series of tools that I have created to generate extremely high resolution maps. The tools are written in Go with an emphasis on concurrency and parallelism. They can generate maps from a variety of sources such as Google Maps. These high resolution maps were used with a C02 laser to create detailed maps.
                </p>
              </div>
              <div class='flex-none w-36'>
                <h4 class='text-forest-500 text-end mb-4'>2024</h4>
                <div>
                  {/* <Button class='w-full'>Visit Project</Button> */}
                  {/* <Button class='w-full'>View Code</Button> */}
                </div>
              </div>
            </div>

            <ImageCarouselClientComponent
              images={[
                '/images/project-encryption.webp',
                '/images/project-encryption.webp',
                '/images/project-encryption.webp',
              ]}
            />
          </div>

          <div>
            <div class='flex gap-4 mb-4'>
              <div>
                <h2 class='text-2xl font-bold text-forest-800 mb-2'>
                  Big Data Analysis
                </h2>
                <div class='flex flex-wrap mb-2'>
                  <Chip>Go</Chip>
                  <Chip>goroutines</Chip>
                  <Chip>PostgresDB</Chip>
                  <Chip>Clickhouse</Chip>
                  <Chip>Oracle Cloud</Chip>
                </div>
                <p class='text-forest-800 leading-4'>
                  These are a series of tools that I have created to generate extremely high resolution maps. The tools are written in Go with an emphasis on concurrency and parallelism. They can generate maps from a variety of sources such as Google Maps. These high resolution maps were used with a C02 laser to create detailed maps.
                </p>
              </div>
              <div class='flex-none w-36'>
                <h4 class='text-forest-500 text-end mb-4'>2024</h4>
                <div>
                  {/* <Button class='w-full'>Visit Project</Button> */}
                  {/* <Button class='w-full'>View Code</Button> */}
                </div>
              </div>
            </div>

            <ImageCarouselClientComponent
              images={[
                '/images/project-encryption.webp',
                '/images/project-encryption.webp',
                '/images/project-encryption.webp',
              ]}
            />
          </div>

          <div>
            <div class='flex gap-4 mb-4'>
              <div>
                <h2 class='text-2xl font-bold text-forest-800 mb-2'>
                  SwimXO
                </h2>
                <div class='flex flex-wrap mb-2'>
                  <Chip>Firebase</Chip>
                  <Chip>React</Chip>
                  <Chip>Websockets</Chip>
                  <Chip>HTML / CSS / Javascript</Chip>
                </div>
                <p class='text-forest-800 leading-4'>
                  These are a series of tools that I have created to generate extremely high resolution maps. The tools are written in Go with an emphasis on concurrency and parallelism. They can generate maps from a variety of sources such as Google Maps. These high resolution maps were used with a C02 laser to create detailed maps.
                </p>
              </div>
              <div class='flex-none w-36'>
                <h4 class='text-forest-500 text-end mb-4'>2022</h4>
                <div>
                  {/* <Button class='w-full'>Visit Project</Button> */}
                  <Button class='w-full'>View Code</Button>
                </div>
              </div>
            </div>

            <ImageCarouselClientComponent
              images={[
                '/images/project-encryption.webp',
                '/images/project-encryption.webp',
                '/images/project-encryption.webp',
              ]}
            />
          </div>

          <div>
            <div class='flex gap-4 mb-4'>
              <div>
                <h2 class='text-2xl font-bold text-forest-800 mb-2'>
                  Encryption Report
                </h2>
                <div class='flex flex-wrap mb-2'>
                  <Chip>Three.js</Chip>
                  <Chip>Web Components</Chip>
                  <Chip>HTML / CSS / Javascript</Chip>
                </div>
                <p class='text-forest-800 leading-4'>
                  This is an interactive and visual report that examines the evolution of U.S. government regulation on data security, encryption and user privacy. It was originally created as a capstone project in one of my undergraduate courses.
                </p>
              </div>
              <div class='flex-none w-36'>
                <h4 class='text-forest-500 text-end mb-4'>May 2022</h4>
                <div>
                  <Button class='w-full'>Visit Project</Button>
                  <Button class='w-full'>View Code</Button>
                </div>
              </div>
            </div>

            <ImageCarouselClientComponent
              images={[
                '/images/project-encryption.webp',
                '/images/project-encryption.webp',
                '/images/project-encryption.webp',
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
