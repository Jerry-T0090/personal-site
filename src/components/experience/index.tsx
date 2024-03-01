import 'flowbite';
import { animate, scroll } from 'motion';
import { For, onMount } from 'solid-js';
import { experiences } from '~/data/experiences';


export let ExperienceContainer: HTMLDivElement | undefined;

const Timeline = () => {
  let containerRef: HTMLDivElement | undefined;
  let progressRef: HTMLDivElement | undefined;

  onMount(() => {
    scroll(animate(progressRef!, { scaleY: [0, 1] }), {
      container: containerRef,
      axis: 'y',
    });
  });
  return (
    <div ref={ExperienceContainer} class="mt-40">
      <h1 class="text-primary text-heading">EXPERIENCE</h1>
      <div class="flex">
        <div
          class="h-[600px] w-2 scale-x-0 bg-interesting self-center"
          ref={progressRef}
        />
        <div
          class="w-max snap-mandatory snap-y flex flex-col items-center h-[600px] px-2 gap-7 scroll-smooth overflow-y-scroll overflow-x-hidden no-scrollbar"
          ref={containerRef}
        >
          <For each={experiences}>
            {item => (
              <div class="scroll-ml-6 m-10 snap-center shrink-0 grow-0">
                <div class="flex items-baseline">
                  <h2 class="text-primary text-title">{item.title}, &nbsp</h2>
                  <span class="text-interesting text-paragraph ">
                    {item.org}
                  </span>
                </div>
                <div class="text-secondary">
                  <For each={item.description}>
                    {description => <li class="text-left">{description}</li>}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Timeline;