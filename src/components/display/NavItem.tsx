import { ParentComponent } from 'solid-js';
import { css } from '~/utils/css';
import { Dash } from './Dash';

import styles from './NavItem.module.css';

interface NavItemProps {
  to: string;
  active?: boolean;
}

export const NavItem: ParentComponent<NavItemProps> = (props) => {
  return (
    <li
      class={css(
        styles.NavItem,
        'text-forest-500 font-bold text-sm my-4 hover:opacity-100 transition-opacity',
        !props.active && 'opacity-50'
      )}
    >
      <a href={props.to}>
        <Dash />
        {props.children}
        <Dash />
      </a>
    </li>
  );
};
