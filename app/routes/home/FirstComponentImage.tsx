import Image from "~/components/Image";

export default function FirstComponentImage() {
  return (
    <div className="ml-12 relative">
      <div className="flex items-center justify-center absolute w-full">
        <div className="size-150 bg-linear-90 from-primary to-red-500   rounded-full -z-1 "></div>
      </div>
      <div className="size-150 z-55">
        <Image src="neverthelesse.png" />
      </div>
    </div>
  );
}
