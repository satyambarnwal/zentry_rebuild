import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const links = [
  { href: "https://www.linkedin.com/in/satyam-barnwal/", icon: <FaLinkedin /> },
  { href: "mailto:satyambarnwal2002@gmail.com", icon: <SiGmail /> },
  { href: "https://github.com/satyambarnwal", icon: <FaGithub /> },
  { href: "https://www.instagram.com/satyam_barnwal_/", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div
        className="container mx-auto flex flex-col items-center justify-between gap-4
        px-4 md:flex-row"
      >
        <p className="text-center text-sm md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center md:pr-[90px] gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right md:pr-5"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
