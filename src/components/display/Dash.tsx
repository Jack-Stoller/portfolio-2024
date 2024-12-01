import { Component } from 'solid-js';

import styles from './Dash.module.css';

export const Dash: Component = () => {
  return (
    <svg
      class={styles.Dash}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 1'
      preserveAspectRatio='none'
    >
      <line x1='0' y1='0.5' x2='100' y2='0.5' />
    </svg>
  );
};
