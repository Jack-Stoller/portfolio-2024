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
      <div class='grid lg:grid-cols-[24rem_minmax(0,1fr)] max-w-[1280px] mx-auto xl:border-x border-neutral-600'>
        <span></span>
        <aside class='border-b lg:border-b-0 lg:border-r border-neutral-600 py-4 px-16 lg:p-4 flex gap-16 justify-between lg:flex-col lg:fixed lg:h-dvh w-full lg:w-96'>
          <Header class='flex-none' />
          <Nav class='lg:flex-1' />
          <Footer class='flex-none hidden lg:flex' />
        </aside>

        <main class='px-12 lg:pt-[16rem] max-w-vw'>
          <AboutMeSection />
          <WorkSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
          <CreditsSection />
        </main>

        <Footer class='lg:hidden border-t border-neutral-600 p-8' />
      </div>
    </SectionObserver>
  );
}
