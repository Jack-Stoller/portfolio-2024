import { onCleanup, onMount, ParentComponent } from 'solid-js';
import { SectionHeading } from './SectionHeading';
import { useSectionObservation } from '../layout/SectionObserver';

interface SectionProps {
  title: string;
  id: string;
}

export const Section: ParentComponent<SectionProps> = (props) => {
  const { observe, unobserve } = useSectionObservation();

  let ref;

  onMount(() => {
    observe(ref!);
  });

  onCleanup(() => {
    unobserve(ref!);
  });

  return (
    <section id={props.id} class='my-16' ref={ref}>
      <SectionHeading>{props.title}</SectionHeading>
      {props.children}
    </section>
  );
};
