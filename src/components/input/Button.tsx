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
        `bg-forest-300 text-forest-800 border-2 border-forest-500 font-bold text-sm py-1.5 px-4 m-2 rounded shadow-hard`,
        local.class as string
      )}
    />
  );
};
