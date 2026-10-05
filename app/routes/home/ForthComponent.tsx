import Image from "~/components/Image";

export default function ForthComponent() {
  return (
    <section className="p-6 my-10 w-full  border rounded-2xl glow">
      <div className=" w-full h-300 relative flex justify-center">
        <iframe
          className="w-[80%] h-[56%] pt-5 px-4  overflow-y-scroll top-7  absolute"
          src="https://movies-hub-theta-lovat.vercel.app/"
        ></iframe>
        <img src="/phones/mac.png" className="w-full h-max " alt="" />
      </div>
      <div className=" w-full h-335 -mt-90 relative flex justify-between">
        <div>
          <iframe
            className="w-[42%] pb-2 rounded-2xl  h-[56%] pt-2 pl-8 pr-6  overflow-y-scroll top-7  absolute"
            src="https://movies-hub-theta-lovat.vercel.app/"
          ></iframe>
          <img src="/phones/ipad.png" className="w-full h-max " alt="" />
        </div>
        <div className="w-[30%] relative rounded-8xl h-[61%] overflow-hidden bg-green-500 ">
          <iframe
            className="w-full  pb-2 rounded-2xl  h-full  overflow-hidden -p-2 pl-8 pr-6  overflow-y-scroll top-7  absolute"
            src="https://movies-hub-theta-lovat.vercel.app/"
          ></iframe>
          <img src="/phones/iphone.png" className="w-full h-max " alt="" />
        </div>
      </div>
    </section>
  );
}
