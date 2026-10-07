import { useState } from "react";
import { Link } from "react-router";

export default function Navigation() {
  const navigates = [
    "home",
    "about",
    "services",
    "work",
    "process",
    "Testimonies",
    "Contact",
  ];
  const [active, setActive] = useState("home");
  return (
    <div>
      <div className="hidden md:flex  items-center">
        {navigates.map((navigate) => (
          <Link
            to={navigate != "home" ? navigate : "/"}
            key={navigate}
            className={`capitalize hover:bg-gray-300 p-2 lg:px-4 slg:px-8 ${active === navigate && "bg-white shadow-lg rounded-lg md:rounded-full "}`}
          >
            {navigate}
          </Link>
        ))}
      </div>
    </div>
  );
}
