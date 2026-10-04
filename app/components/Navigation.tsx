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
    <div className="flex items-center">
      {navigates.map((navigate) => (
        <Link
          to={navigate}
          key={navigate}
          className={`capitalize hover:bg-gray-300  px-8 ${active === navigate && "bg-white shadow-lg rounded-full p-3"}`}
        >
          {navigate}
        </Link>
      ))}
    </div>
  );
}
