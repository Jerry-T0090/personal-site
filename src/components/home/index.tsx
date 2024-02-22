import { createScrollPosition } from '@solid-primitives/scroll';
import Timeline from '../experience';

const Home = () => {
  const Windowscroll = createScrollPosition();
  return (
    <>
      <div class="bg-center flex mt-24 justify-center h-full">
        <img
          class="h-auto max-w-5xl rounded-lg shadow-xl dark:shadow-black"
          src="src/assets/hero1.jpg"
          alt="profile"
        />
        <div class="absolute top-[5%] left-1/4 w-[100px] h-[850px] flex flex-col justify-between ">
          <h1
            class=" text-heading  text-secondary font-yeseva self-start"
            style={{
              transform: `translateX(${5 * Windowscroll.y}px)`,
            }}
          >
            JERRY
          </h1>
          <h1
            class="text-heading  text-secondary font-yeseva self-start"
            style={{
              transform: `translateX(${-5 * Windowscroll.y}px)`,
            }}
          >
            THERONIER
          </h1>
        </div>
      </div>
      <Timeline />
    </>
  );
};

export default Home;

/*
import { animate, scroll } from "motion";

const items = document.querySelectorAll("li");

// Animate gallery horizontally during vertical scroll
scroll(
  animate("ul", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`]
  }),
  { target: document.querySelector("section") }
);

// Progress bar representing gallery scroll
scroll(animate(".progress", { scaleX: [0, 1] }), {
  target: document.querySelector("section")
});

// Image title parallax
const segmentLength = 1 / items.length;
items.forEach((item, i) => {
  const header = item.querySelector("h2");

  scroll(animate(header, { x: [200, -200] }), {
    target: document.querySelector("section"),
    offset: [
      [i * segmentLength, 1],
      [(i + 1) * segmentLength, 0]
    ]
  });
});

*/
