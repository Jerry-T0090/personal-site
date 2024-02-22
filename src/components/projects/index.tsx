import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@suid/material';
import { animate, scroll } from 'motion';
import { For, onMount } from 'solid-js';

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
    console.log('delatY: ', e.deltaY);
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

    console.log('width: ', containerRef?.scrollWidth);
    console.log('left: ', containerRef?.scrollLeft);
  };

  const temp = [1, 2, 3, 4, 5, 6];
  return (
    <div class="mt-40">
      <h1 class="text-primary text-heading">PROJECTS</h1>

      <div
        class="snap-mandatory snap-x flex flex-nowrap items-center  gap-7 scroll-smooth overflow-x-scroll overflow-y-hidden"
        onWheel={handleScroll}
        ref={containerRef}
      >
        <For each={temp}>
          {item => (
            <Card class=" m-10 snap-center w-96 shrink-0 grow-0">
              <CardActionArea>
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item}
                  </Typography>
                  <Typography variant="body2">test description</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="success">
                  test
                </Button>
              </CardActions>
            </Card>
          )}
        </For>
      </div>
      <div
        class={`w-[${containerRef?.clientWidth}] h-2 scale-y-0 bg-interesting self-center`}
        ref={progressRef}
      />
    </div>
  );
};

export default Projects;
