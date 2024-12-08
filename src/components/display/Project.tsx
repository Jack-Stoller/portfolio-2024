import { For, ParentComponent } from 'solid-js';
import { Chip } from '../input/Chip';

interface ProjectProps {
  title: string;
  date: string;
  skills: string[];
}

export const Project: ParentComponent<ProjectProps> = (props) => {
  return (
    <div class='mb-16'>
      <div class='flex gap-4 mb-4'>
        <h2 class='flex-1 text-2xl font-bold text-forest-800'>{props.title}</h2>
        <h4 class='flex-none w-36 text-forest-500 text-end'>{props.date}</h4>
      </div>

      <div class='flex flex-wrap mb-2'>
        <For each={props.skills}>{(skill) => <Chip>{skill}</Chip>}</For>
      </div>

      {props.children}
    </div>
  );
};
