import { createSignal } from 'solid-js';
import { ImageCarouselClientComponent } from './components/display/ImageCarousel';
import { NavItem } from './components/display/NavItem';
import { SectionHeading } from './components/display/SectionHeading';
import { Button } from './components/input/Button';
import { Chip } from './components/input/Chip';

import './index.css';

export default function App() {
  const [expended, setExpended] = createSignal(false);

  return (
    <div class='grid grid-cols-[400px_minmax(0,1fr)] max-w-[1200px] mx-auto border-x border-forest-600'>
      <img
        src='/images/background-pattern.svg'
        alt=''
        class='fixed inset-0 w-full h-full opacity-5 pointer-events-none'
      />

      <span></span>
      <aside class='border-r border-forest-600 p-4 flex flex-col h-dvh fixed w-[400px]'>
        <section class='flex-none text-center'>
          <img
            class='inline-block mt-16 mb-6'
            src='/images/wave.webp'
            alt='Wave Emoji'
            width='110'
            height='110'
          />

          <h1 class='text-4xl font-black text-forest-700 mb-1'>Jack Stoller</h1>

          <h2 class='text-xl font-black text-forest-500'>
            Developer & Student
          </h2>
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
          <p>© {new Date().getFullYear()} Jack Stoller</p>
          <p>Published 2024-11-30</p>
        </footer>
      </aside>

      <main class='px-12 pt-[16rem]'>
        <section id='About_Me' class='my-16'>
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
        </section>

        <section id='Work' class='my-16'>
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

              <p class='text-forest-500'>Part-time, Feb 2021 to Present</p>
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
          {/* 
          <div class='flex flex-wrap mb-2'>
            <Chip>TypeScript</Chip>
            <Chip>.NET</Chip>
            <Chip>HTML / CSS / Javascript</Chip>
            <Chip>ReactJS</Chip>
            <Chip>SolidJS</Chip>
            <Chip>Twilio</Chip>
            <Chip>SQL</Chip>
            <Chip>Azure</Chip>
          </div> */}
        </section>

        <section id='Skills' class='my-16'>
          <SectionHeading>Skills</SectionHeading>

          <p class='text-forest-800 text-justify indent-6 mb-4'>
            I'm always looking to learn a new language or framework and enjoy
            the process of discovering how different technologies solve problems
            in their own ways. Here are some of the ones that I am most familiar
            with and have developed the most projects with.
          </p>

          <div class='mb-8'>
            <h2 class='text-2xl font-bold text-forest-800 leading-5 mb-4'>
              Languages
            </h2>

            <div class='flex gap-4'>
              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/javascript.webp'
                  alt='JavaScript Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>JavaScript</figcaption>
              </figure>

              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/typescript.webp'
                  alt='TypeScript Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>TypeScript</figcaption>
              </figure>

              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/csharp.webp'
                  alt='C# Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>C#</figcaption>
              </figure>

              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/go.webp'
                  alt='Go Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>Go</figcaption>
              </figure>

              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/python.webp'
                  alt='Python Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>Python</figcaption>
              </figure>
{/* 
              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/rust.webp'
                  alt='Rust Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>Rust</figcaption>
              </figure> */}
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
                  src='/images/skills/solid.webp'
                  alt='SolidJS Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>SolidJS</figcaption>
              </figure>

              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/react.webp'
                  alt='ReactJS Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>ReactJS</figcaption>
              </figure>

              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/dotnet.webp'
                  alt='.NET Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>.NET</figcaption>
              </figure>

              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/azure-functions.webp'
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
            <h2 class='text-2xl font-bold text-forest-800 leading-5 mb-4'>
              Other
            </h2>

            <div class='flex gap-4'>
              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/azure.webp'
                  alt='Azure Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>Azure</figcaption>
              </figure>

              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/cloudflare.webp'
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
                  class='m-auto'
                  src='/images/skills/postman.webp'
                  alt='Postman Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>Postman</figcaption>
              </figure>

              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/twilio.webp'
                  alt='Twilio Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>
                  Twilio
                </figcaption>
              </figure>

              <figure class='flex-1 text-center'>
                <img
                  class='m-auto'
                  src='/images/skills/git.webp'
                  alt='Git Logo'
                  width='75'
                  height='75'
                />
                <figcaption class='text-forest-500 mt-1'>
                  Git
                </figcaption>
              </figure>
            </div>

            <p class='text-forest-500 mt-1'>
              Also: GCP, Firebase, GitHub, Azure SQL, Microsoft EntraID
            </p>
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
        </section>

        <section id='Projects' class='my-16'>
          <SectionHeading>Projects</SectionHeading>

          <div class='mb-16'>
            <div class='flex gap-4 mb-4'>
              <h2 class='flex-1 text-2xl font-bold text-forest-800'>
                Map Utilities
              </h2>
              <h4 class='flex-none w-36 text-forest-500 text-end'>
                February 2024
              </h4>
            </div>

            <div class='flex flex-wrap mb-2'>
              <Chip class='flex-none'>Go</Chip>
              <Chip class='flex-none'>Web Scraping</Chip>
              <Chip class='flex-none'>goroutines</Chip>
              <Chip class='flex-none'>Google Maps API</Chip>
            </div>

            <p class='text-forest-800 leading-5 indent-6 text-justify mb-4'>
              A suite of map generation tools in Go. They could create maps from
              a variety of sources such as Google Maps and worked by fetching
              the individual titles in parallel, caching them locally before
              stitching them together. With these tools I was able to generate
              many extremely detailed maps. So large in-fact most high end
              systems couldn't even open them due to memory constrains and had
              to be downsized. These maps were then used with a CO2 laser to
              produce detailed, intricate physical copies.
            </p>

            <ImageCarouselClientComponent
              images={[
                '/images/projects/map-utilities-01.webp',
                '/images/projects/map-utilities-02.webp',
                '/images/projects/map-utilities-03.webp',
                '/images/projects/map-utilities-04.webp',
              ]}
            />
          </div>

          <div class='mb-16'>
            <div class='flex gap-4 mb-4'>
              <h2 class='flex-1 text-2xl font-bold text-forest-800'>
                Clickhouse Data Analysis
              </h2>
              <h4 class='flex-none w-36 text-forest-500 text-end'>
                February 2024
              </h4>
            </div>

            <div>
              <div class='flex flex-wrap mb-2'>
                <Chip>Go</Chip>
                <Chip>Postgres</Chip>
                <Chip>Clickhouse</Chip>
                <Chip>Oracle Cloud</Chip>
                <Chip>goroutines</Chip>
                <Chip>Grafana</Chip>
              </div>
              <div class='flex gap-4'>
                <img
                  src='/images/projects/clickhouse-logo.svg'
                  alt='Clickhouse Data Analysis'
                  width='180'
                  height='156'
                  class='flex-none m-8'
                />
                <p class='text-forest-800 leading-5 indent-6 text-justify'>
                  This project initially started as a traditional Postgres
                  database, but moved to Clickup to leverage it's column based
                  database solution to store and analyze billions of records.
                  The records were pull from a public API using a Go worker and
                  then inserted into Clickhouse in batches. The worker was
                  designed to be able to scale both vertically and horizontally.
                  It featured multi phase data deduplication and batched
                  database updates. The data was then analyzed with optimized
                  Clickhouse queries and visualized using Grafana. The project
                  was hosted on Oracle Cloud.
                </p>
              </div>
            </div>
          </div>

          <div class='mb-16'>
            <div class='flex gap-4 mb-4'>
              <h2 class='flex-1 text-2xl font-bold text-forest-800'>SwimXO</h2>
              <h4 class='flex-none w-36 text-forest-500 text-end'>
                February 2024
              </h4>
            </div>

            <div class='mb-4'>
              <div class='flex content-end mb-2'>
                <div class='flex-1 flex flex-wrap'>
                  <Chip>Firebase</Chip>
                  <Chip>React</Chip>
                  <Chip>Websockets</Chip>
                  <Chip>HTML / CSS / Javascript</Chip>
                </div>

                <div class='flex-none w-36'>
                  <Button class='w-full m-0'>View Code</Button>
                </div>
              </div>
              <div class='flex gap-4'>
                <p class='flex-1 text-forest-800 leading-5 indent-6 text-justify'>
                  SwimXO is a management system for swim instructors. It tracks
                  student progress, schedules, courses, and payments. It uses
                  Firebase as a backend for authentication and data storage.
                  Websockets are used to provide real-time updates to the
                  interface as changes are made.
                </p>
                <img
                  src='/images/projects/swimxo-logo.svg'
                  alt='Clickhouse Data Analysis'
                  width='180'
                  height='150'
                  class='flex-none m-8'
                />
              </div>
            </div>

            <ImageCarouselClientComponent
              images={[
                '/images/projects/swimxo-01.webp',
                '/images/projects/swimxo-02.webp',
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
                <p class='text-forest-800 leading-5 indent-6 text-justify'>
                  An interactive and visual report that examines the evolution
                  of U.S. government regulation on data security, encryption and
                  user privacy. It was originally created as a capstone project
                  in one of my undergraduate courses.
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
                '/images/projects/encryption-01.webp',
                '/images/projects/encryption-02.webp',
                '/images/projects/encryption-03.webp',
                '/images/projects/encryption-04.webp',
              ]}
            />
          </div>
        </section>

        <section id='Contact' class='my-16'>
          <SectionHeading>Contact</SectionHeading>

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
        </section>

        <section id='Credits' class='my-16'>
          <SectionHeading>Credits</SectionHeading>

          <p class='text-sm text-forest-500 text-justify'>
            This website was built from scratch using{' '}
            <a
              class='underline text-forest-700'
              href='https://start.solidjs.com//'
            >
              Solid Start
            </a>
            ,{' '}
            <a class='underline text-forest-700' href='https://solidjs.com/'>
              SolidJS
            </a>
            ,
            <a
              class='underline text-forest-700'
              href='https://tailwindcss.com/'
            >
              Tailwind CSS
            </a>
            , and{' '}
            <a
              class='underline text-forest-700'
              href='https://www.typescriptlang.org'
            >
              TypeScript
            </a>{' '}
            in{' '}
            <a
              class='underline text-forest-700'
              href='https://code.visualstudio.com/'
            >
              Visual Studio Code
            </a>
            . The source code is available on{' '}
            <a class='underline text-forest-700' href='#'>
              GitHub
            </a>
            . The layout is inspired by{' '}
            <a
              class='underline text-forest-700'
              href='https://brittanychiang.com/'
            >
              Brittany Chiang's website
            </a>
            . Graphics for brands were taken from their respective websites.
            Other graphics were created with{' '}
            <a
              class='underline text-forest-700'
              href='https://affinity.serif.com/en-us/designer/'
            >
              Affinity Designer
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
