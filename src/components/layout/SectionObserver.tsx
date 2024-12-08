import {
  Accessor,
  createContext,
  createSignal,
  ParentComponent,
  useContext,
} from 'solid-js';
import { clientOnly } from '@solidjs/start';

interface SectionObservationContext {
  observe: (element: HTMLElement) => void;
  unobserve: (element: HTMLElement) => void;
  visibleIds: Accessor<string[]>;
}

const SectionObservationContext = createContext<SectionObservationContext>({
  observe: () => {},
  unobserve: () => {},
  visibleIds: () => [],
});

export const useSectionObservation = () => {
  return useContext(SectionObservationContext);
};

const SectionObserverComponent: ParentComponent = (props) => {
  const [visibleIds, setVisibleIds] = createSignal<string[]>([]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log('Got entry', entry.target.id, entry);
      if (entry.isIntersecting) {
        const id = entry.target.id;
        setVisibleIds((prev) => [...prev, id]);
      } else {
        const id = entry.target.id;
        setVisibleIds((prev) => prev.filter((activeId) => activeId !== id));
      }
    });
  });

  const observe = (element: HTMLElement) => {
    observer.observe(element);
  };

  const unobserve = (element: HTMLElement) => {
    observer.unobserve(element);
  };

  return (
    <SectionObservationContext.Provider
      value={{
        observe,
        unobserve,
        visibleIds,
      }}
    >
      {props.children}
    </SectionObservationContext.Provider>
  );
};


export default SectionObserverComponent;
export const SectionObserver = clientOnly(
  () => import('./SectionObserver')
);
