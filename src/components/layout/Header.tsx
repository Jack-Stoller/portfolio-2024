import { Component } from 'solid-js';
import { css } from '~/utils/css';

interface HeaderProps {
  class?: string;
}

export const Header: Component<HeaderProps> = (props) => {
  return (
    <header class={css('text-center', props.class)}>
      <img
        class='inline-block md:hidden lg:inline-block lg:mt-16 mb-6'
        src='/images/wave.webp'
        alt='Wave Emoji'
        width='110'
        height='110'
      />

      <h1 class='text-2xl lg:text-4xl font-black lg:mb-1 lg:mt-8'>Jack Stoller</h1>

      <h2 class='inline-block text-md lg:text-xl'>Developer & Student</h2>
    </header>
  );
};
