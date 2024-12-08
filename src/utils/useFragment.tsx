import { createSignal, onCleanup } from 'solid-js';

export function useUrlFragment() {
  const getHash = () => window.location.hash.slice(1);

  const [fragment, setFragment] = createSignal(getHash());

  const updateFragment = () => setFragment(getHash());

  // Add event listener for hash changes
  window.addEventListener('hashchange', updateFragment);

  // Cleanup on component unmount
  onCleanup(() => {
    window.removeEventListener('hashchange', updateFragment);
  });

  return fragment;
}
