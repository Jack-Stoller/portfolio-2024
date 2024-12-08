import { ImageCarouselClientComponent } from './components/display/ImageCarousel';
import { NavItem } from './components/display/NavItem';
import { SectionHeading } from './components/display/SectionHeading';
import { A } from './components/input/A';
import { Button } from './components/input/Button';
import { Chip } from './components/input/Chip';
import { Field } from './components/input/Field';

import './index.css';

export default function App() {
  return (
    <div class='grid grid-cols-[400px_minmax(0,1fr)] max-w-[1200px] mx-auto border-x border-neutral-600'>
      <span></span>
      <aside class='border-r border-neutral-600 p-4 flex flex-col h-dvh fixed w-[400px]'>
        <section class='flex-none text-center'>
          <img
            class='inline-block mt-16 mb-6'
            src='/images/wave.webp'
            alt='Wave Emoji'
            width='110'
            height='110'
          />

          <h1 class='text-4xl font-black mb-1 mt-8'>Jack Stoller</h1>

          <h2 class='text-xl'>Developer & Student</h2>
        </section>

        <nav class='flex-1 mt-16'>
          <ul>
            <NavItem to='#About_Me' active={true}>
              About Me
            </NavItem>
            <NavItem to='#Work'>Work</NavItem>
            <NavItem to='#Skills'>Skills</NavItem>
            <NavItem to='#Education'>Education</NavItem>
            <NavItem to='#Projects'>Projects</NavItem>
            <NavItem to='#Contact'>Contact</NavItem>
          </ul>
        </nav>

        <footer class='flex-none flex justify-between text-neutral-500 text-sm p-2'>
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

        <section id='Skills' class='my-16  scroll-mt-16'>
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
            <h2 class='text-2xl font-bold text-forest-800 leading-5 mb-4'>
              Other
            </h2>

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
        </section>

        <section id='Education' class='my-16'>
          <SectionHeading>Education</SectionHeading>

          <div class='flex gap-12 align-middle'>
            <img
              src='/images/ua.svg'
              alt='University of Akron Logo'
              width='212'
              height='92'
              class='flex-none self-center opacity-75'
            />

            <div class='flex-1'>
              <h5 class='text-lg text-neutral-500 float-right'>
                2023-2026
              </h5>

              <h2 class='text-2xl font-bold text-neutral-800 mb-2'>
                University of Akron
              </h2>

              <h3 class='text-lg font-bold text-forest-500 leading-5 mb-2 max-w-80'>
                Bachelor of Science in Computer Information Systems,
                Cybersecurity
              </h3>

              <h4 class='font-bold text-neutral-500 leading-5'>
                Minor in Computer Science
              </h4>
              <h4 class='font-bold text-neutral-500 leading-5 mb-2'>
                Minor in Business Administration
              </h4>

              <p class='text-neutral-800 text-sm'>
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
                ClickHouse Data Analysis
              </h2>
              <h4 class='flex-none w-36 text-forest-500 text-end'>
                February 2024
              </h4>
            </div>

            <div>
              <div class='flex flex-wrap mb-2'>
                <Chip>Go</Chip>
                <Chip>Postgres</Chip>
                <Chip>ClickHouse</Chip>
                <Chip>Oracle Cloud</Chip>
                <Chip>goroutines</Chip>
                <Chip>Grafana</Chip>
              </div>
              <div class='flex gap-4'>
                <img
                  src='/images/projects/clickhouse-logo.svg'
                  alt='ClickHouse Data Analysis'
                  width='180'
                  height='156'
                  class='flex-none m-8 opacity-75'
                />
                <p class='text-forest-800 leading-5 indent-6 text-justify'>
                  This project initially started as a traditional Postgres
                  database, but moved to Clickup to leverage it's column based
                  database solution to store and analyze billions of records.
                  The records were pull from a public API using a Go worker and
                  then inserted into ClickHouse in batches. The worker was
                  designed to be able to scale both vertically and horizontally.
                  It featured multi phase data deduplication and batched
                  database updates. The data was then analyzed with optimized
                  ClickHouse queries and visualized using Grafana. The project
                  was hosted on Oracle Cloud.
                </p>
              </div>
            </div>
          </div>

          <div class='mb-16'>
            <div class='flex gap-4 mb-4'>
              <h2 class='flex-1 text-2xl font-bold text-forest-800'>SwimXO</h2>
              <h4 class='flex-none w-36 text-neutral-500 text-end'>
                February 2024
              </h4>
            </div>

            <div class='mb-4'>
              <div class='flex flex-wrap mb-2'>
                <Chip>Firebase</Chip>
                <Chip>React</Chip>
                <Chip>Websockets</Chip>
                <Chip>HTML / CSS / Javascript</Chip>
              </div>
              <div class='flex gap-4'>
                <p class='flex-1 text-forest-800 leading-5 indent-6 text-justify'>
                  SwimXO is a management system for swim instructors. It tracks
                  student progress, schedules, courses, and payments. It uses
                  Firebase as a backend for authentication and data storage.
                  Websockets are used to provide real-time updates to the
                  interface as changes are made. The code for this project is
                  available on{' '}
                  <A to='#'>
                    GitHub
                  </A>
                  .
                </p>
                <img
                  src='/images/projects/swimxo-logo.svg'
                  alt='ClickHouse Data Analysis'
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
            <div class='mb-4'>
              <h2 class='text-2xl font-bold text-forest-800 mb-2'>
                Encryption Report
              </h2>
              <div class='flex flex-wrap mb-2'>
                <Chip>Three.js</Chip>
                <Chip>Web Components</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
                <Chip>JavaScript</Chip>
              </div>
              <p class='text-forest-800 leading-5 indent-6 text-justify'>
                An interactive and visual report that examines the evolution of
                U.S. government regulation on data security, encryption and user
                privacy. It was originally created as a capstone project in one
                of my undergraduate courses.  The code for this project is
                available on <A to='#'>GitHub</A>.
                A live version of the report can be viewed <A to='#'>here</A>.
              </p>
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
            <div class='flex-1'>
              <h2 class='text-2xl font-bold text-forest-800 mb-2'>
                Get in Touch
              </h2>

              <p class='text-forest-800 text-justify indent-6'>
                I'm always looking for new opportunities and challenges. If you
                have a project you'd like to discuss, or just want to say hi,
                feel free to get in touch. Use the form, or send me an email at{' '}
                <A to='mailto:me@jackstoller.com'>
                  me@jackstoller.com
                </A>{' '}
                directly.
              </p>

              <div class='flex gap-4 mt-8 opacity-50'>
                <A
                  to='https://www.linkedin.com/in/jack-stoller/'
                >
                  <img
                    src='/images/socials/linkedin.webp'
                    alt='LinkedIn Logo'
                    width='32'
                    height='32'
                  />
                </A>

                <A
                  to='https://github.com/Jack-Stoller/'
                >
                  <img
                    src='/images/socials/github.svg'
                    alt='Github Logo'
                    width='32'
                    height='32'
                  />
                </A>

                <A
                  to='https://www.instagram.com/jack.stoller.23/'
                >
                  <img
                    src='/images/socials/instagram.svg'
                    alt='Instagram Logo'
                    width='32'
                    height='32'
                  />
                </A>
              </div>
            </div>

            <div class='flex-1'>
              <form class='flex flex-col gap-4'>
                <Field
                  label='Email'
                  name='email'
                  placeholder='jdoe@example.com'
                  type='email'
                  required
                />
                <Field
                  label='Message'
                  name='message'
                  placeholder='Your message here...'
                  type='textarea'
                  rows={3}
                  required
                />

                <Button class='w-full m-0'>Send</Button>
              </form>
            </div>
          </div>
        </section>

        <section id='Credits' class='my-16'>
          <SectionHeading>Credits</SectionHeading>

          <p class='text-sm text-neutral-500 text-justify'>
            This website was built from scratch using{' '}
            <A to='https://start.solidjs.com/'>
              Solid Start
            </A>
            ,{' '}
            <A to='https://solidjs.com/'>
              SolidJS
            </A>
            ,{' '}
            <A to='https://tailwindcss.com/'>
              Tailwind CSS
            </A>
            , and{' '}
            <A to='https://www.typescriptlang.org'>
              TypeScript
            </A>{' '}
            in{' '}
            <A to='https://code.visualstudio.com/'>
              Visual Studio Code
            </A>
            . The source code is available on{' '}
            <A to='#'>
              GitHub
            </A>
            . The layout is inspired by{' '}
            <A to='https://brittanychiang.com/'>
              Brittany Chiang's website
            </A>
            . Graphics for brands were taken from their respective websites.
            Other graphics were created with{' '}
            <A to='https://affinity.serif.com/en-us/designer/'>
              Affinity Designer
            </A>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
