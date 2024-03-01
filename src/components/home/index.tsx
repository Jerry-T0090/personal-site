import { createScrollPosition } from '@solid-primitives/scroll';
import Timeline from '../experience';
import Projects from '../projects';
import NavButton from '../nav-button/navButton';
import Title from '../title/Title';

const Home = () => {
  const windowScroll = createScrollPosition();
  return (
    <>
      <NavButton />
      <Title />
      <div class="bg-center flex mt-24 justify-center h-full">
        <img
          class="h-auto max-w-5xl rounded-lg shadow-xl dark:shadow-black"
          src="src/assets/imgs//hero1.jpg"
          alt="profile"
        />
        <div class="absolute top-[5%] left-1/4 w-[100px] h-[850px] flex flex-col justify-between ">
          <h1
            class=" text-heading  text-secondary font-yeseva self-start"
            style={{
              transform: `translateX(${5 * windowScroll.y}px)`,
            }}
          >
            JERRY
          </h1>
          <h1
            class="text-heading  text-secondary font-yeseva self-start"
            style={{
              transform: `translateX(${-5 * windowScroll.y}px)`,
            }}
          >
            THERONIER
          </h1>
        </div>
      </div>
      <Timeline />
      <Projects />
    </>
  );
};

export default Home;
