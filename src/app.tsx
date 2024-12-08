import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Nav } from './components/layout/Nav';
import { SectionObserver } from './components/layout/SectionObserver';
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
    <SectionObserver>
      <div class='grid grid-cols-[400px_minmax(0,1fr)] max-w-[1200px] mx-auto border-x border-neutral-600'>
        <span></span>
        <aside class='border-r border-neutral-600 p-4 flex flex-col h-dvh fixed w-[400px]'>
          <Header class='flex-none' />
          <Nav class='flex-1 mt-16' />
          <Footer class='flex-none' />
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
    </SectionObserver>
  );
}
