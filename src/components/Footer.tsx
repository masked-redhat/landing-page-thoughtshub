import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-24">
      <hr className="border-gray-400 w-full" />

      <div className="p-8 flex flex-col items-center justify-center font-space-grotesk gap-3.5">
        <p>&copy; ThoughtsHub 2025. All Rights Reserved.</p>
        <div className="flex gap-4 text-2xl *:cursor-pointer">
          <FaInstagram className="hover:text-pink-600" />
          <FaFacebook className="hover:text-blue-400" />
          <FaYoutube className="hover:text-red-600" />
          <FaLinkedin className="hover:text-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
