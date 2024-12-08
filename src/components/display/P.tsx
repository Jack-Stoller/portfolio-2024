import { ParentComponent } from 'solid-js';
import { css } from '~/utils/css';

interface PProps {
  class?: string;
}

export const P: ParentComponent<PProps> = (props) => {
  return (
    <p
      class={css(
        'indent-6 text-justify leading-5 text-neutral-800',
        props.class
      )}
    >
      {props.children}
    </p>
  );
};
