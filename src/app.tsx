import { NavItem } from './components/display/navItem';
import { SectionHeading } from './components/display/SectionHeading';
import { Button } from './components/input/Button';
import { Chip } from './components/input/Chip';

import './index.css';

export default function App() {
  return (
    <div class='h-full grid grid-cols-page max-w-[1200px] mx-auto border-x border-forest-600'>
      <aside class='border-r border-forest-600 p-4 flex flex-col h-dvh sticky'>
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
              <h4 class='text-lg text-forest-500 float-right'>
                2023-{Math.min(2026, new Date().getFullYear())}
              </h4>

              <h2 class='text-2xl font-bold text-forest-800 mb-2'>
                University of Akron
              </h2>

              <h2 class='text-lg font-bold text-forest-500 leading-5 mb-2 max-w-80'>
                Bachelor of Science in Computer Information Systems,
                Cybersecurity
              </h2>

              <h3 class='font-bold text-forest-500 leading-5'>
                Minor in Computer Science
              </h3>
              <h3 class='font-bold text-forest-500 leading-5 mb-2'>
                Minor in Business Administration
              </h3>

              <p class='text-forest-800 text-sm'>
                Expected graduation in June 2026.
              </p>
            </div>
          </div>
        </section>

        <section id='Projects'>
          <SectionHeading>Projects</SectionHeading>

          <div>
            <div class='flex gap-4 mb-4'>
              <div>
                <h2 class='text-2xl font-bold text-forest-800 mb-2'>
                  Encryption Report
                </h2>
                <div class='flex flex-wrap mb-2'>
                  <Chip>three.js</Chip>
                  <Chip>Web Components</Chip>
                  <Chip>HTML</Chip>
                  <Chip>CSS</Chip>
                  <Chip>JavaScript</Chip>
                </div>
                <p class='text-forest-800 leading-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
              <div class='flex-none w-36'>
                <h4 class='text-forest-500 text-end mb-4'>February 2024</h4>
                <div>
                  <Button class='w-full'>View</Button>
                  <Button class='w-full'>Read More</Button>
                </div>
              </div>
            </div>

            <img
              src='/images/project-encryption.webp'
              alt='Encryption Report Screenshot'
              class='shadow'
            />
          </div>
        </section>
      </main>
    </div>
  );
}
