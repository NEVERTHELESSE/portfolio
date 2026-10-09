import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Theme() {
  const [isLight, setIsLight] = useState(true);

  function toggleTheme() {
    document.body.classList.toggle("dark");
    setIsLight(!isLight);
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex slg:text-2xl  mr-6 mlg:mr-1 cursor-pointer hover:scale-110 duration-200"
    >
      {isLight ? <FaMoon /> : <FaSun color="white" />}
    </button>
  );
}
