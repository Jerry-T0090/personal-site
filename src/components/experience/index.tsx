import 'flowbite';
import { For } from 'solid-js';

const Timeline = () => {
  let containerRef: HTMLDivElement | undefined;
  return (
    <div class="mt-10">
      <h1 class="text-primary text-heading">EXPERIENCE</h1>
      <div
        class="snap-mandatory snap-y flex flex-col items-center h-[600px] px-2 gap-7 scroll-smooth overflow-y-scroll overflow-x-hidden no-scrollbar"
        ref={containerRef}
      >
        <For each={experiences}>
          {item => (
            <div class="scroll-ml-6 m-10 snap-center shrink-0 grow-0">
              <div class="flex items-baseline">
                <h2 class="text-primary text-title">{item.title}, &nbsp</h2>
                <span class="text-interesting text-paragraph ">{item.org}</span>
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
  );
};

export default Timeline;

export type timelineItem = {
  title: string;
  org: string;
  date: string;
  description: string[];
};

const experiences: timelineItem[] = [
  {
    title: 'Software Engineer',
    org: 'Blue Innovations Group',
    date: 'June 2023 – Present',
    description: [
      'Led end-to-end implementation of New Relic monitoring across the entire technology stack, strategically placing monitoring code blocks to optimize performance and reliability.',
      'Spearheaded the conceptualization and realization of innovative weather map proof of concepts, enhancing user experience and functionality.',
      'Successfully facilitated the transition of an Angular application to SolidJS, optimizing app performance and maintainability.',
      'Designed and executed a robust proof of concept for processing NMEA 2000 messages using the Signalk open-source library.',
    ],
  },
  {
    title: 'SAF-CDMA Intern',
    org: 'USF Institute of Applied Engineering',
    date: 'August 2022 – December 2022',
    description: [
      'Developed a secure office management web application for a Classified U.S. Military office, enhancing operational efficiency and data management.',
      'Utilized Angular Framework and Firebase to create an intuitive office seat map with dynamic employee information displays.',
      'Designed and implemented a user-friendly database management interface, enabling seamless addition, modification, and removal of employee records.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    org: 'Blue Innovations Group',
    date: 'June 2022 – December 2022',
    description: [
      'Engineered a comprehensive system to visualize Electronic Navigational Charts, establish waypoints, and showcase points of interest. Demonstrated the solution at CES.',
      'Leveraged Angular framework and leaflet library to implement dynamic chart layers, resulting in an interactive and engaging user interface.',
      'Constructed wiring harnesses for laboratory development, contributing to streamlined testing and prototyping processes.',
      'Played an integral role in the ground-up development, design, and coding of Human-Machine Interfaces (HMIs).',
    ],
  },
];
