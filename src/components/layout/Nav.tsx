import { Component, createSignal, onMount } from 'solid-js';
import { NavItem } from '../display/NavItem';
import { useSectionObservation } from './SectionObserver';
import { useUrlFragment } from '~/utils/useFragment';

interface NavProps {
  class?: string;
}

export const Nav: Component<NavProps> = (props) => {
  const { visibleIds: activeIds } = useSectionObservation();
  const fragment = useUrlFragment();

  // The section is active if:
  // 1. There is a fragment and the fragment is visible
  // 2. There is no fragment and the section is the first visible section
  const activeSection = () => {
    if (activeIds().includes(fragment())) return fragment();

    const orderedSections = [
      'about-me',
      'work',
      'skills',
      'education',
      'projects',
      'contact',
    ];
    return orderedSections.find((id) => activeIds().includes(id));
  };

  const sectionActive = (id: string) => activeSection() === id;

  return (
    <nav class={props.class}>
      <ul>
        <NavItem to='#about-me' active={sectionActive('about-me')}>
          About Me
        </NavItem>
        <NavItem to='#work' active={sectionActive('work')}>
          Work
        </NavItem>
        <NavItem to='#skills' active={sectionActive('skills')}>
          Skills
        </NavItem>
        <NavItem to='#education' active={sectionActive('education')}>
          Education
        </NavItem>
        <NavItem to='#projects' active={sectionActive('projects')}>
          Projects
        </NavItem>
        <NavItem to='#contact' active={sectionActive('contact')}>
          Contact
        </NavItem>
      </ul>
    </nav>
  );
};
