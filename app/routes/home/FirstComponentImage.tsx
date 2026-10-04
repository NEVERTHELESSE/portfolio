import Image from "~/components/Image";

export default function FirstComponentImage() {
  return (
    <div className="ml-12 relative">
      <div className="flex items-center justify-center absolute w-full">
        <div className="size-150 -z-10 bg-linear-90 from-primary to-secondary   rounded-full  ">
          hello
        </div>
      </div>
      <div className="size-150 z-50">
        <Image src="neverthelesse.png" />
      </div>
    </div>
  );
}
