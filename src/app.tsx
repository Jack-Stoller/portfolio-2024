import { NavItem } from './components/display/NavItem';
import { AboutMeSection } from './components/sections/AboutMeSection';
import { ContactSection } from './components/sections/ContactSection';
import { CreditsSection } from './components/sections/CreditsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillSection';
import { WorkSection } from './components/sections/WorkSection';

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
        <AboutMeSection />
        <WorkSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
        <CreditsSection />
      </main>
    </div>
  );
}
