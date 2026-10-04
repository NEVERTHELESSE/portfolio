import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Theme() {
  const [isLight, setIsLight] = useState(true);
  return (
    <button className="flex text-2xl cursor-pointer hover:scale-110 duration-200">
      {isLight ? <FaMoon /> : <FaSun />}
    </button>
  );
}
