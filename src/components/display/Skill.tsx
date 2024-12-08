import { Component } from 'solid-js';
import { css } from '~/utils/css';

interface SkillProps {
  label: string;
  src: string;
  iconClass?: string;
}

export const Skill: Component<SkillProps> = (props) => {
  return (
    <figure class='flex-none w-16 m-auto text-center'>
      <img
        class={css('m-auto opacity-75', props.iconClass)}
        src={props.src}
        alt={`${props.label} Logo`}
        width='64'
        height='64'
      />
      <figcaption class='text-neutral-500 mt-1'>{props.label}</figcaption>
    </figure>
  );
};
