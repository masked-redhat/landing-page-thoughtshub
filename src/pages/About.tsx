import { FaChevronDown } from "react-icons/fa6";
import type { ReactNode } from "../lib/reactNode";
import images from "../utils/images";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center md:gap-32 gap-16 font-space-grotesk *:text-right">
      <AboutSection className="w-full relative bg-black rounded-md overflow-hidden">
        <img
          src={images.about1}
          alt="about"
          className="w-full object-cover rounded-lg aspect-video opacity-95 shadow-xl object-center"
        />
        <FaChevronDown className="absolute bottom-6 mx-auto animate-bounce w-full text-2xl sm:opacity-100 opacity-0" />
      </AboutSection>

      <AboutSection>
        <h1 className="md:text-6xl text-5xl font-bold">
          Hi, We are ThoughtsHub Team
        </h1>

        <p className="md:text-xl md:w-[70%] w-full text-right">
          We are a passionate group of people trying to provide information in
          byte sized chunks for ease of access and consumption.
        </p>
      </AboutSection>

      <AboutSection>
        <h2 className="md:text-5xl text-4xl font-bold">Members</h2>

        <div className="flex gap-12 flex-wrap items-center justify-center">
          <TeamMemberPic pic={images.pfp.dinesh_pfp} name="Dinesh Bhati" />
          <TeamMemberPic pic={images.pfp.kartikey_pfp} name="Kartikey Kumar" />
          <TeamMemberPic pic={images.pfp.ashish_pfp} name="Aashish Kumar" />
        </div>
      </AboutSection>

      <AboutSection className="items-start text-left">
        <h2 className="md:text-5xl text-4xl font-bold">Contact Us</h2>

        <p className="md:text-lg">
          Email:{"  "}
          <span className="font-black tracking-wider">
            <a href="mailto:biz.kartikey@gmail.com">biz.kartikey@gmail.com</a>
          </span>
        </p>
      </AboutSection>
    </div>
  );
};

const AboutSection = ({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={"flex flex-col gap-12 items-end w-[80%] " + className}>
      {children}
    </div>
  );
};

const TeamMemberPic = ({ pic, name }: { pic: string; name: string }) => {
  return (
    <figure className="md:w-84 md:h-84 h-auto w-full aspect-square  flex gap-2 flex-col">
      <img
        src={pic}
        alt="dinesh"
        className="w-full h-full object-cover rounded-md shadow-xl"
      />
      <figcaption className="font-semibold tracking-wide font-manrope px-4">
        {name}
      </figcaption>
    </figure>
  );
};

export default About;
