import { FaInstagram, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 rounded-b-xl">
      <div className="w-[80%] flex justify-between py-6 mx-auto text-4xl text-gray-300">
        <a
          href="https://instagram.com/rm_indraa"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="hover:text-blue-500 hover:scale-110 cursor-pointer ease-in-out duration-300" />
        </a>
        <a href="https://github.com/rmindra" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-blue-500 hover:scale-110 cursor-pointer ease-in-out duration-300" />
        </a>
        <a
          href="https://linkedin.com/in/rmindra"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="hover:text-blue-500 hover:scale-110 cursor-pointer ease-in-out duration-300" />
        </a>
        <a
          href="https://discord.com/users/269743735296753664"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord className="hover:text-blue-500 hover:scale-110 cursor-pointer ease-in-out duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
