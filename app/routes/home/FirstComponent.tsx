import Image from "~/components/Image";
import FirstComponentImage from "./FirstComponentImage";
import { Link } from "react-router";

export default function FirstComponent() {
  const lists = ["html", "css", "js", "ts", "node", "react"];
  return (
    <div className="glow w-full shadow my-4  rounded-2xl p-2 flex justify-between">
      <div className="py-10 px-10 sm:w-[40%]">
        <h5 className="my-3 gradient">HELLO I'M</h5>
        <i className="my-4">Specialist in web development</i>

        <h2>NEVERTHELESSE</h2>
        <h4 className="gradient">Software Developer</h4>
        <p className="text-2xl">
          A passionate developer who enjoys building clean, modern, and
          user-friendly digital experience
        </p>
        <div className="flex my-8 items-center">
          <button className="px-8 bg-black text-white py-4 rounded-full shadow ">
            View My Work
          </button>
          <a
            download
            // href="cv.pdf"
            href="logo.jpeg"
            className="px-8 ml-4 py-4 rounded-full shadow bg-white"
          >
            Download CV
          </a>
        </div>
        <h3>WEB TOOLS</h3>
        <div className="flex my-4">
          {lists.map((list) => (
            <Link to={"/skills?" + list} key={list} className="size-15 mr-4">
              <Image src={"/icons/" + list + ".png"} />
            </Link>
          ))}
        </div>
      </div>
      <FirstComponentImage />
    </div>
  );
}
