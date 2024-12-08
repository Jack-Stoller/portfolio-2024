import { Component } from 'solid-js';
import { NavItem } from '../display/NavItem';

interface NavProps {
    class?: string;
}

export const Nav: Component<NavProps> = (props) => {
  return (
    <nav class={props.class}>
      <ul>
        <NavItem to='#about-me' active={true}>
          About Me
        </NavItem>
        <NavItem to='#work'>Work</NavItem>
        <NavItem to='#skills'>Skills</NavItem>
        <NavItem to='#education'>Education</NavItem>
        <NavItem to='#projects'>Projects</NavItem>
        <NavItem to='#contact'>Contact</NavItem>
      </ul>
    </nav>
  );
};
