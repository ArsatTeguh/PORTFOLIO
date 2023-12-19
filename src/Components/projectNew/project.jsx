import { useState } from 'react';
import { AnimateScroll } from '../lib/animationScroll';
import { listProject } from './data';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './project.css';
import BlurHash from './blurHash';

function ProjectNew() {
  const [selectId, setselectId] = useState(null);

  return (
    <section className="relative end-scroll  mt-8 mb-2 ">
      <div className="py-2 text-2xl text-center laptop:text-4xl font-[Poppins] font-bold homeText">
        <h2>PROJECTS</h2>
      </div>
      <div className="  w-full mx-auto container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-4 gap-y-2">
        {listProject.map((item, index) => (
          <AnimateScroll key={index} delay={index / 10}>
            <div
              className="lg:w-[400px] transition-all duration-200 ease-in-out  lg:h-[300px] mx-auto relative "
              key={index}
            >
              <BlurHash src={item.url} alt={item.title} hash={item.hash} />
              <span className="font-semibold absolute transition-all duration-200 ease-in-out  bg-zinc-800 pl-2 pr-4 flex items-center bottom-0 rounded-t-md text-white h-[2rem] ">
                {item.title}
              </span>
              <span
                className={`absolute rounded-md  transition-all duration-200 ease-in-out  top-0 left-0 w-full text-justify bg-black/90  text-white   ${
                  selectId === index
                    ? 'h-full bg-black/80 p-3'
                    : 'h-0 px-3 py-0 bg-black/20'
                }`}
              >
                {selectId === index && (
                  <p className="paraf-project">
                    {item.desc}
                    <br />
                    {item.link && (
                      <a className="text-blue-500 underline" href={item.link}>
                        Let's Preview
                      </a>
                    )}
                  </p>
                )}

                <span
                  onClick={() => setselectId(item.id)}
                  className={`transition-all duration-200 text-black ease-in-out flex items-center w-full justify-center  text-3xl cursor-pointer `}
                >
                  {selectId !== index && <MdKeyboardArrowDown />}
                </span>
              </span>
            </div>
          </AnimateScroll>
        ))}
      </div>
    </section>
  );
}

export default ProjectNew;
