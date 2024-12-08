import { ParentComponent, splitProps } from 'solid-js';
import { JSX } from 'solid-js/h/jsx-runtime';
import { css } from '~/utils/css';

export const Chip: ParentComponent<
  JSX.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <span
      {...(others as any)}
      class={css(
        `flex-none h-min bg-transparent text-forest-700 border-2 border-forest-500 font-bold text-xs py-1 px-4 m-1 rounded-full`,
        local.class as string
      )}
    />
  );
};
