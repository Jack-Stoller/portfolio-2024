import Flickity from 'flickity';
import { Component, For, onMount } from 'solid-js';
import { clientOnly } from '@solidjs/start';
import 'flickity/css/flickity.css';
import './ImageCarousel.css';

interface ImageCarouselProps {
  images: string[];
  options?: Flickity.Options;
  width?: number;
  height?: number;
}

const ImageCarousel: Component<ImageCarouselProps> = (props) => {
  let carouselRef;

  onMount(async () => {
    // Initialize Flickity when the component mounts
    // This will run on the client
    const Flickity = (await import('flickity')).default; // Dynamically import Flickity to avoid SSR issues
    new Flickity(carouselRef!, {
      cellAlign: 'center',
      contain: true,
      selectedAttraction: 0.03,
      friction: 0.35,
      ...(props.options ?? {}),
    });
  });

  return (
    <div
      ref={carouselRef}
      style={{
        width: '100%',
      }}
    >
      <For each={props.images}>
        {(src) => (
          <div class='mr-4'>
            <img
              src={src}
              alt=''
              width={props.width}
              height={props.height}
              class='rounded-lg'
            />
          </div>
        )}
      </For>
    </div>
  );
};

export default ImageCarousel;
export const ImageCarouselClientComponent = clientOnly(
  () => import('./ImageCarousel')
);
