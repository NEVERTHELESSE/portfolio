import FirstComponentImage from "./FirstComponentImage";

export default function FirstComponent() {
  return (
    <div className="glow w-full shadow my-4  rounded-2xl p-2 flex">
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
          <button className="px-8 ml-4 py-4 rounded-full shadow bg-white">
            Download CV
          </button>
        </div>
        <h3>WEB TOOLS</h3>
        <div className="flex my-4">
          <div className="size-15 bg-primary"></div>
        </div>
      </div>
      <FirstComponentImage />
    </div>
  );
}
