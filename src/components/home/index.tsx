import { Motion } from '@motionone/solid';
import {
  useWindowScrollPosition,
  createScrollPosition,
} from '@solid-primitives/scroll';
import solidLogo from '~/assets/solid.svg';
import viteLogo from '/vite.svg';
import { createSignal } from 'solid-js';
import { spring } from 'motion';

const Home = () => {
  const scroll = createScrollPosition();
  const [count, setCount] = createSignal(0);
  return (
    <>
      <div class="bg-center flex mt-24 justify-center h-full ">
        <img
          class="h-auto max-w-5xl rounded-lg shadow-xl dark:shadow-black"
          src="src/assets/hero1.jpg"
          alt="profile"
        />
        <div class="absolute top-[5%] left-1/4 w-[100px] h-[850px] flex flex-col justify-between ">
          <Motion.h1
            animate={{
              transform: ['none', `translateX(${scroll.y / 5}vw)`],
            }}
            transition={{
              easing: 'ease-in-out',
            }}
            class={`text-heading text-secondary self-start font-yeseva translate-x-[${
              scroll.y / 5
            }rem]`}
          >
            JERRY
          </Motion.h1>
          <Motion.h1
            animate={{
              transform: ['none', `translateX(${-scroll.y / 5}vw)`],
            }}
            class="text-heading  text-secondary font-yeseva self-start"
          >
            THERONIER
          </Motion.h1>
        </div>
      </div>
      <div class="flex flex-col mt-32">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="https://solidjs.com" target="_blank">
            <img src={solidLogo} class="logo solid" alt="Solid logo" />
          </a>
        </div>
        <h1>Vite + Solid</h1>
        <div class="card">
          <button onClick={() => setCount(count => count + 1)}>
            count is {count()}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p class="read-the-docs">
          Click on the Vite and Solid logos to learn more
        </p>
      </div>
      <div class="flex flex-col mt-32">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="https://solidjs.com" target="_blank">
            <img src={solidLogo} class="logo solid" alt="Solid logo" />
          </a>
        </div>
        <h1>Vite + Solid</h1>
        <div class="card">
          <button onClick={() => setCount(count => count + 1)}>
            count is {count()}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p class="read-the-docs">
          Click on the Vite and Solid logos to learn more
        </p>
      </div>
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
