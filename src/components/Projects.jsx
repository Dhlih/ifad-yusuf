import { IoCodeSlash } from "react-icons/io5";
import { IoOpenOutline } from "react-icons/io5";
import AnimatedContent from "./AnimatedContent";
import Portfolio from "../assets/portfolio.png";
import Coreup from "../assets/coreup.png";
import EtiketinImg from "../assets/e-tiketin.png"; // Import gambar e-tiketin

const Projects = () => {
  return (
    <div
      className=" md:mt-[8rem] mt-[6rem] md:px-[8rem] px-[1.5rem] "
      id="projects"
    >
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
      >
        <h2 className="md:text-center font-semibold text-4xl">
          My <span className="text-[#3CD98E]">Projects</span>
        </h2>
      </AnimatedContent>

      <div className="container md:mt-[5rem] mt-[3rem] space-y-[5rem]">
        {/* Project 1: e-Tiketin */}
        <div className="project flex md:flex-row flex-col md:space-x-[3rem] md:space-y-0 space-y-[2rem] w-full">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            delay={400}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <div className="bg-[#1B1B1B] md:w-[25rem] md:h-[18rem] w-full h-[15rem] p-6 outline-1 outline-[#424242] rounded-xl overflow-hidden group cursor-pointer">
              <a href="https://e-tiketin.vercel.app" target="_blank">
                <img
                  src={EtiketinImg}
                  className="w-full h-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
                />
              </a>
            </div>
          </AnimatedContent>
          {/* text side */}
          <div className="flex-1">
            <AnimatedContent>
              <h3 className="text-left text-2xl font-medium">E-Tiketin</h3>
            </AnimatedContent>
            <AnimatedContent>
              <p className="mt-[1rem] opacity-75">
                A website that enables business owners and event organizers to
                easily create their own ticket booking pages. This project was
                built for the FicpactCup 2025 held by Unika Soegijapranata
                Semarang , where I worked as a Full-Stack Developer using
                MongoDB, React, Tailwind CSS, and Express.
              </p>
            </AnimatedContent>

            {/* button */}
            <div className="md:mt-[2rem] mt-[3rem] flex items-center space-x-[1.5rem]">
              <a href="https://github.com/Dhlih/Ficpactcup2" target="_blank">
                <button className="bg-[#1B1B1B] outline-1 outline-[#424242] p-3 rounded-md cursor-pointer">
                  <IoCodeSlash className="text-2xl" />
                </button>
              </a>
              <a href="https://e-tiketin.vercel.app" target="_blank">
                <button className="bg-[#1B1B1B] outline-1 outline-[#424242] p-3 rounded-md cursor-pointer">
                  <IoOpenOutline className="text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3: Core Up */}
        <div className="project flex md:flex-row flex-col md:space-x-[3rem] md:space-y-0 space-y-[2rem]">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            delay={400}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <div className="bg-[#1B1B1B] md:w-[25rem] md:h-[18rem] w-full h-[15rem] p-6 outline-1 outline-[#424242] rounded-xl overflow-hidden group cursor-pointer">
              <a href="https://e-tiketin.vercel.app" target="_blank">
                <img
                  src={Portfolio}
                  className="w-full h-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
                />
              </a>
            </div>
          </AnimatedContent>
          {/* text side */}
          <div className="flex-1">
            <AnimatedContent>
              <h3 className="text-left text-2xl font-medium">Portfolio</h3>
            </AnimatedContent>
            <AnimatedContent>
              <p className="mt-[1rem] opacity-75">
                My portfolio website is more than just a collection of projects
                — it reflects my growth and curiosity as a developer and
                designer. Each project represents challenges I faced and
                solutions I crafted, from full-stack applications to
                user-friendly interfaces. I designed this site to be simple yet
                expressive, showcasing not only what I create but also how I
                learn and evolve in technology
              </p>
            </AnimatedContent>

            {/* button */}
            <div className="md:mt-[2rem] mt-[3rem] flex items-center space-x-[1.5rem]">
              <a href="https://github.com/Dhlih/Ficpactcup2" target="_blank">
                <button className="bg-[#1B1B1B] outline-1 outline-[#424242] p-3 rounded-md cursor-pointer">
                  <IoCodeSlash className="text-2xl" />
                </button>
              </a>
              <a href="https://e-tiketin.vercel.app" target="_blank">
                <button className="bg-[#1B1B1B] outline-1 outline-[#424242] p-3 rounded-md cursor-pointer">
                  <IoOpenOutline className="text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3: Core Up */}
        <div className="project flex md:flex-row flex-col md:space-x-[3rem] md:space-y-0 space-y-[2rem]">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            delay={400}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <div className="bg-[#1B1B1B] md:w-[25rem] md:h-[18rem] w-full h-[15rem] p-6 outline-1 outline-[#424242] rounded-xl overflow-hidden group cursor-pointer">
              <a href="https://e-tiketin.vercel.app" target="_blank">
                <img
                  src={Coreup}
                  className="w-full h-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
                />
              </a>
            </div>
          </AnimatedContent>
          {/* text side */}
          <div className="flex-1">
            <AnimatedContent>
              <h3 className="text-left text-2xl font-medium">Core Up</h3>
            </AnimatedContent>
            <AnimatedContent>
              <p className="mt-[1rem] opacity-75">
                I designed and developed a website that enables users to learn
                anything with the help of AI, combined with a gamification
                system to make the learning process more engaging. This project
                was built together with two of my friends as part of Itfest 2025
                held by IPB, where I took the role of UI/UX Designer and
                Front-End Developer.
              </p>
            </AnimatedContent>

            {/* button */}
            <div className="md:mt-[2rem] mt-[3rem] flex items-center space-x-[1.5rem]">
              <a href="https://github.com/Dhlih/Ficpactcup2" target="_blank">
                <button className="bg-[#1B1B1B] outline-1 outline-[#424242] p-3 rounded-md cursor-pointer">
                  <IoCodeSlash className="text-2xl" />
                </button>
              </a>
              <a href="https://e-tiketin.vercel.app" target="_blank">
                <button className="bg-[#1B1B1B] outline-1 outline-[#424242] p-3 rounded-md cursor-pointer">
                  <IoOpenOutline className="text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
