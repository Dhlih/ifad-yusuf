import AnimatedContent from "./AnimatedContent";
import Myself from "../assets/myself.png";

const About = () => {
  return (
    <div className="w-full  md:px-[8rem] px-[2rem] " id="about">
      <div className=" space-y-6 md:mt-[8rem] mt-[6rem] ">
        <div className="flex md:flex-row flex-col  space-x-[1rem]">
          {/* Gambar di sebelah kiri */}
          <div className="md:w-[50%] flex justify-center items-center ">
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
              <div className=" relative md:w-[20rem] md:h-[22rem] w-[15rem] h-[17rem] bg-[#1B1B1B] p-8  shadow-lg transform rotate-[-5deg]">
                <div className=" absolute inset-0 bg-[#1B1B1B] transform rotate-[9deg] z-[-1] shadow-lg"></div>
                {/* Tumpukan kedua */}
                <img
                  src={Myself}
                  alt="Yusuf Fadhlih Firmansyah"
                  className="w-full h-full object-cover "
                />
              </div>
            </AnimatedContent>
          </div>

          {/* Teks di sebelah kanan */}
          <div className="md:w-[50%] md:mt-0 mt-[5rem]">
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
              <h2 className="font-semibold md:text-4xl text-2xl mb-[1rem]">
                About <span className="text-[#3CD98E]">Me</span>
              </h2>
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
              <p className=" opacity-75 ">
                My name is Yusuf Fadhlih Firmansyah. I was born in Semarang and
                currently studying Informatics Engineering at Politeknik Negeri
                Semarang. I have a deep passion for technology, particularly in
                the fields of web development. mobile developments, and machine
                learning, I am always eager to learn and explore new concepts
                because there is no enough when it comes to learning
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
              <button className="rounded-lg px-[1.5rem] py-3 text-base font-semibold bg-[#3CD98E] text-black mt-[2.5rem] cursor-pointer  ">
                Download CV
              </button>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
