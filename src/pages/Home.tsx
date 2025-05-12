import Carousel from "../components/Carousel";
import image1 from "../assets/icon.jpg";
import banner1 from "../assets/banner1.png";
import Button from "../ui/Button";
import { FaChevronDown } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4 px-5 lg:flex-row lg:items-center lg:gap-12 xl:gap-32">
      <Carousel
        className="xl:scale-125 transition-all shadow-xl shadow-black/20 max-h-[720px] md:w-[60vh] lg:w-96 w-full"
        images={[banner1, image1, banner1, image1]}
        headings={[
          [
            "Insights",
            "Learn something new with insights and grow with everyone",
          ],
        ]}
      />
      <div className="ml-auto lg:m-0 flex flex-col lg:items-end gap-4 items-end mx-auto">
        <h1 className="text-6xl font-extrabold lg:text-7xl lg:font-black">
          Thoughts<span className="text-orange-500 font-space-grotesk">Hub</span>
        </h1>
        <p className="text-lg text-slate-200 tracking-wide w-full text-right lg:text-2xl">
          A place to share thoughts and learn something new.
        </p>
        <HomeActionButtons btnText1="Download Now" btnText2="Give Feedback" />
      </div>

      <FaChevronDown className="absolute bottom-10 animate-bounce" />

      
    </div>
  );
};

const HomeActionButtons = ({
  btnText1,
  btnText2,
}: {
  btnText1: string;
  btnText2: string;
}) => {
  return (
    <>
      <Button
        className="text-lg font-semibold tracking-wider bg-indigo-700 hover:bg-indigo-600 font-urban"
        type="primary"
      >
        {btnText1}
      </Button>
      <Button
        className="px-[18px!important] font-urban text-sm font-bold tracking-widest"
        type="secondary"
      >
        {btnText2}
      </Button>
    </>
  );
};

export default Home;
