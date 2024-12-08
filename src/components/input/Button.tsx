import { ParentComponent, splitProps } from 'solid-js';
import { JSX } from 'solid-js/h/jsx-runtime';
import { css } from '~/utils/css';

export const Button: ParentComponent<
  JSX.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <button
      {...(others as any)}
      class={css(
        `p-3 text-neutral-800 border-2 border-neutral-500 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-neutral-700 hover:bg-neutral-100`,
        local.class as string
      )}
    />
  );
};
