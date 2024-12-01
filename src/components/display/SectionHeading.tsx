import { ParentComponent } from 'solid-js';

import styles from './SectionHeading.module.css';
import { Dash } from './Dash';
import { css } from '~/utils/css';

export const SectionHeading: ParentComponent = (props) => {
  return (
    <h1 class={css(styles.SectionHeading, 'text-2xl font-bold text-forest-500 mb-4')}>
      <Dash />
      <span class='text-6xl opacity-25 select-none'>#</span>
      {props.children}
      <Dash />
    </h1>
  );
};
