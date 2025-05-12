import strings from "../utils/strings";
import icon from "../assets/icon.jpg";
import { Link, useLocation } from "react-router";

interface SiteLinkProps {
  name: string;
  to: string;
  path: string;
}

// [name, url]
const links = [
  ["home", "/"],
  ["about", "/about"],
  ["download", "/download"],
  ["privacy policy", "/privacy-policy"],
  ["terms & conditions", "/terms-and-conditions"],
];

const NavBar = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();

  return (
    <div className={className}>
      <nav className="flex items-center">
        <img
          src={icon}
          alt="ThoughtsHub"
          className="aspect-square w-5 rounded-full select-none"
          id="logo"
        />

        <ul className="flex gap-5 text-sm ml-auto px-4">
          {links.map((link) => (
            <SiteLink name={link[0]} path={pathname} to={link[1]}></SiteLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const SiteLink = ({ name, to, path }: SiteLinkProps) => {
  return (
    <Link
      to={to}
      className={
        "text-gray-400 font-semibold tracking-wider hover:text-gray-200 cursor-pointer transition-all w-max " +
        (path === to ? "text-white" : null)
      }
    >
      {strings.capitalize(name)}
    </Link>
  );
};

export default NavBar;
