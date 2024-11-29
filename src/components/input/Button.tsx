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
        `bg-forest-300 hover:bg-forest-400 text-forest-800 border-2 border-forest-500 font-bold py-2 px-4 m-1 rounded shadow-hard`,
        local.class as string
      )}
    />
  );
};
