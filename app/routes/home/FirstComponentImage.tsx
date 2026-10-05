import Image from "~/components/Image";

export default function FirstComponentImage() {
  return (
    <div className="ml-12 relative mt-20">
      <div className="flex items-center justify-center absolute w-full">
        <div className="size-100 slg:size-150 bg-linear-130 from-secondary to-red-500   rounded-full -z-1 "></div>
      </div>
      <div className="size-100 slg:size-150 z-55">
        <img src="neverthelesse.png" className="size-full" />
      </div>
    </div>
  );
}
