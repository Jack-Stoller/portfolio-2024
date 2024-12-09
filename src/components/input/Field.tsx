import { Component } from 'solid-js';
import { JSX } from 'solid-js/h/jsx-runtime';
import { Dynamic } from 'solid-js/web';

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  disabled?: boolean;
} & ({
  type: 'textarea';
  rows?: number;
} | {
    type: Exclude<string, 'textarea'>;
});

export const Field: Component<FieldProps> = (props) => {
  return (
    <label class='text-forest-800'>
      {props.label}
      <Dynamic
        component={props.type === 'textarea' ? 'textarea' : 'input'}
        {...props}
        type={props.type === 'textarea' ? undefined : props.type}
        class='w-full p-3 text-neutral-800 border-b-2 border-neutral-500 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-neutral-700 focus:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed'
      />
    </label>
  );
};
