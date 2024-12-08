import { ParentComponent } from 'solid-js';
import { SectionHeading } from './SectionHeading';

interface SectionProps {
  title: string;
  id: string;
}

export const Section: ParentComponent<SectionProps> = (props) => {
  return (
    <section id={props.id} class='my-16'>
      <SectionHeading>{props.title}</SectionHeading>
      {props.children}
    </section>
  );
};
