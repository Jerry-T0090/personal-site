import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@suid/material';
import { animate, scroll } from 'motion';
import { For, onMount } from 'solid-js';
import { projects } from '~/data/projects';
import Footer from '../footer';
import ProjectCard from './projectCard';

export let ProjectContainer: HTMLDivElement | undefined;

const Projects = () => {
  let containerRef: HTMLDivElement | undefined;
  let progressRef: HTMLDivElement | undefined;
  onMount(() => {
    scroll(animate(progressRef!, { scaleX: [0, 1] }), {
      container: containerRef,
      axis: 'x',
    });
  });

  const handleScroll = (e: WheelEvent) => {
    if (
      !(
        containerRef?.scrollLeft === containerRef?.scrollWidth ||
        containerRef?.scrollLeft === 0
      )
    )
      e.preventDefault();

    containerRef?.scrollBy({
      top: 0,
      left: e.deltaY,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={ProjectContainer} class="mt-20 mb-5 absolute left-0 w-[100vw]" onWheel={handleScroll}>
      <h1 class="text-primary text-heading">PROJECTS</h1>

      <div
        class="snap-mandatory snap-x w-full flex flex-nowrap items-center  gap-7 scroll-smooth overflow-x-scroll overflow-y-hidden"
        onWheel={handleScroll}
        ref={containerRef}
      >
        <For each={projects}>{item => <ProjectCard item={item} />}</For>
      </div>
      <div
        class={`w-[${containerRef?.clientWidth}] h-2 scale-y-0 bg-interesting self-center`}
        ref={progressRef}
      />
      <Footer />
    </div>
  );
};

export default Projects;
