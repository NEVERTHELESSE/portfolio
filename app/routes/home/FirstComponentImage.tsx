import Image from "~/components/Image";

export default function FirstComponentImage() {
  return (
    <div className="ml-12 relative mt-20 w-[50%] ">
      <div className="flex items-center overflow-hidden justify-center absolute w-full">
        <div className="size-150 slg:size-150 bg-linear-130 from-secondary to-red-500   rounded-full -z-1 "></div>
      </div>
      <div className="w-full  h-full z-55">
        <img src="neverthelesse.png" className="size-full object-contain" />
      </div>
    </div>
  );
}
