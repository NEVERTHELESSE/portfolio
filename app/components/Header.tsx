import { Link } from "react-router";
import Image from "./Image";
import Navigation from "./Navigation";
import { LuMessageCircleMore } from "react-icons/lu";
import Theme from "./Theme";

export default function Header() {
  return (
    <div className="p-2 sm:p-4 flex justify-between items-center rounded-2xl  glow">
      <div className="flex items-center">
        <div className="shadow-lg w-10 rounded-lg  overflow-hidden">
          <Image />
        </div>
        <div className="ml-3">
          <h3>Neverthelesse</h3>
          <p className="leading-3">Software Developer</p>
        </div>
      </div>
      <Navigation />
      <div className="flex items-center">
        <Theme />
        <Link to="/contact" className="text-2xl flex  ml-6  items-center">
          <span className="mr-2">Let's Talk</span>
          <LuMessageCircleMore />
        </Link>
      </div>
    </div>
  );
}
