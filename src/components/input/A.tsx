import { ParentComponent } from 'solid-js';

interface AProps {
  to: string;
  newWindow?: boolean;
}

export const A: ParentComponent<AProps> = (props) => {
  // If newWindow isn't given, try
  // to guess if it's an external link.
  const newWindow = () =>
    props.newWindow === undefined ?
    props.to.startsWith('http') :
    props.newWindow;

  return (
    <a
      href={props.to}
      target={newWindow() ? '_blank' : undefined}
      rel={newWindow() ? 'noopener noreferrer' : undefined}
      class='underline text-forest-700'
    >
      {props.children}
    </a>
  );
};
