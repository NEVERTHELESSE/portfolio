import { useState } from "react";
import HomeWebsiteShow from "./HomeWebsiteShow";

export default function ForthComponent() {
  const [activeSite, setActiveSrc] = useState(
    "https://movies-hub-theta-lovat.vercel.app/"
  );
  return (
    <section className="p-6 py-10 my-10 w-full shadow-lg  rounded-2xl glow">
      <div className=" w-full h-300 relative  flex justify-center">
        <iframe
          className="w-[80%] h-[70%] pt-5 px-4  overflow-y-scroll top-7  absolute"
          src={activeSite}
        ></iframe>
        <img src="/phones/mac.png" className="w-full h-max " alt="" />
      </div>
      <div className=" w-full h-335 -mb-100  -mt-30 relative flex justify-between">
        <div>
          <iframe
            className="w-[36%] pb-4 rounded-2xl  h-[57%]  pl-6 pr-6  overflow-y-scroll top-7  absolute"
            src={activeSite}
          ></iframe>
          <img src="/phones/ipad.png" className="w-full h-max " alt="" />
        </div>
        <div className=" relative w-98.25 rounded-[5rem]  overflow-hidden h-200 ">
          <iframe
            className="w-[98%] ml-1  p-4 rounded-2xl  h-[98%] mt-2 overflow-hidden   overflow-y-scroll top-7 "
            src={activeSite}
          ></iframe>
          <img src="/phones/iphone.png" className="top-0  absolute" alt="" />
        </div>
      </div>
      {/* <div className="-mt-120"></div> */}
      <HomeWebsiteShow setActiveSrc={setActiveSrc} />
    </section>
  );
}
