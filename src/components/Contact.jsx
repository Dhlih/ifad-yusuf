import AnimatedContent from "./AnimatedContent";

const Contact = () => {
  return (
    <div
      className="  md:mt-[8rem] mt-[6rem]  md:px-[8rem] px-[2rem]"
      id="contact"
    >
      <div className="flex md:flex-row flex-col justify-between">
        <div>
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
            <h2 className="font-semibold text-4xl mb-4">
              Contact <span className="text-[#3CD98E]">Me</span>
            </h2>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            delay={400}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <p className="mb-10 opacity-75 md:max-w-[80%]">
              Feel free to reach out to me anytime. I’ll get back to you as soon
              as possible!
            </p>
          </AnimatedContent>
        </div>

        {/* Contact Form */}
        <div className="form">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            delay={650}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <div className="w-full space-y-7">
              <input
                type="text"
                className="bg-[#1B1B1B] border border-[#424242] rounded-lg w-full  py-3 px-4 text-sm placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#3CD98E]"
                placeholder="Name"
              />
              <input
                type="text"
                className="bg-[#1B1B1B] border border-[#424242] rounded-lg w-full py-3 px-4 text-sm placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#3CD98E]"
                placeholder="Email"
              />
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            delay={850}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <textarea
              rows={7}
              className="bg-[#1B1B1B] mt-[1.5rem] border border-[#424242] rounded-lg w-full py-3 px-4 text-sm placeholder-[#888] resize-none focus:outline-none focus:ring-2 focus:ring-[#3CD98E]"
              placeholder="Message"
            ></textarea>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            delay={880}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <button className="bg-[#3CD98E] mt-[2.5rem] font-semibold hover:bg-[#2ecf7f] transition-all duration-200 text-black  py-2 px-6 rounded-lg w-full cursor-pointer">
              Send Message
            </button>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default Contact;
