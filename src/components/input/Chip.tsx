import { ParentComponent, splitProps } from 'solid-js';
import { JSX } from 'solid-js/h/jsx-runtime';
import { css } from '~/utils/css';

export const Chip: ParentComponent<
  JSX.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <button
      {...(others as any)}
      class={css(
        `bg-forest-200 text-forest-700 border-2 border-forest-500 font-bold text-sm py-1 px-4 m-1 rounded-full shadow`,
        local.class as string
      )}
    />
  );
};
