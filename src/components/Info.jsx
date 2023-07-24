import myPhoto from "../assets/Photo.jpg";
import { FaLinkedin } from "react-icons/fa";
import Typed from "react-typed";

const Info = () => {
  return (
    <div className="w-full">
      <img className="w-full rounded-t-xl" src={myPhoto} alt="My Photo" />
      <div className="w-[80%] flex flex-col text-center mx-auto my-8">
        <h1 className="text-3xl font-bold">Indra Rahmat Maulidi</h1>
        <h3 className="mt-1 text-xl text-orange-400">
          <Typed
            strings={["Frontend", "Backend", "Java"]}
            typeSpeed={100}
            backSpeed={120}
            loop
          />{" "}
          Developer
        </h3>
        <a
          className="my-2 mx-auto hover:text-blue-500 hover:scale-125 active:text-blue-800 ease-in-out duration-300"
          href="https://rmindra.github.io"
        >
          rmindra.github.io
        </a>
        <a
          className="bg-blue-500 flex justify-center items-center w-full mx-auto rounded-md py-2 mt-4 text-xl font-bold gap-2 hover:bg-blue-600 hover:scale-105 active:scale-110 active:bg-blue-800 ease-in-out duration-300"
          href="https://linkedin.com/in/rmindra"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Info;
