import Marquee from "react-fast-marquee";
import AnimatedContent from "./AnimatedContent";

const Hero = () => {
  const skills = [
    { name: "Express", img: "https://skillicons.dev/icons?i=express" },
    { name: "React JS", img: "https://skillicons.dev/icons?i=react" },
    { name: "MongoDB", img: "https://skillicons.dev/icons?i=mongodb" },
    { name: "HTML", img: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", img: "https://skillicons.dev/icons?i=css" },
    { name: "Tailwind", img: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Node JS", img: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Python", img: "https://skillicons.dev/icons?i=py" },
    { name: "JavaScript", img: "https://skillicons.dev/icons?i=js" },
    { name: "Next JS", img: "https://skillicons.dev/icons?i=nextjs" },
    { name: "React Native", img: "https://skillicons.dev/icons?i=react" },
    { name: "Git", img: "https://skillicons.dev/icons?i=git" },
    { name: "MySQL", img: "https://skillicons.dev/icons?i=mysql" },
  ];

  return (
    <div className=" relative md:px-[8rem] px-[1.5rem]  py-[1rem] " id="home">
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.2}
      >
        <p className="text-lg mt-[9rem] ">
          👋 Hello, I’m <span className="text-[#3CD98E]">Ifad Yusuf</span>
        </p>
      </AnimatedContent>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        delay={400}
        threshold={0.2}
      >
        <h1 className="md:text-6xl text-4xl font-semibold mt-2 ">
          Software Developer
        </h1>
      </AnimatedContent>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        delay={800}
        threshold={0.2}
      >
        <p className="text-base md:max-w-[50%] w-full mt-[1rem] text-white opacity-75 ">
          I create a website and mobile app that responsive, smooth experience,
          elegant interface, and user-friendly interaction.
        </p>
      </AnimatedContent>

      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        delay={1000}
        threshold={0.2}
      >
        <button className="rounded-lg  text-base px-[2rem] py-3 font-semibold bg-[#3CD98E] text-black mt-[2.5rem] cursor-pointer ">
          Hire Me!
        </button>
      </AnimatedContent>

      {/* Marquee Scroll */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        delay={1000}
        scale={1}
        threshold={0.2}
      >
        <div className="relative  mx-auto md:mt-[4rem] mt-[5rem] overflow-hidden ">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full md:w-40 w-5 bg-[linear-gradient(to_right,rgba(10,10,11,1),transparent)] z-10 pointer-events-none" />
          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full md:w-40 w-5 bg-[linear-gradient(to_left,rgba(10,10,11,1),transparent)] z-10 pointer-events-none" />

          <Marquee speed={60} gradient={false} pauseOnHover={false}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 my-2 gap-1 mx-3 text-white bg-[#1B1B1B] outline-1 outline-[#424242] rounded-full"
              >
                <img src={skill.img} alt={skill.name} className="w-5 mr-2" />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Hero;
