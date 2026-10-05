import Image from "~/components/Image";
import { secondComponents } from "~/data/data";

export default function SecondComponent() {
  return (
    <div className="glow rounded-2xl py-6 px-10 my-10">
      <p className="gradient">WHAT I DO</p>
      <p className="text-3xl font-bold">Services I Offer</p>
      <div className="flex justify-between">
        {secondComponents.map(
          ({ id, title, Description, bold, experience }) => (
            <div key={id} className="my-4 shadow w-[23%] rounded-2xl p-5">
              <div className="flex justify-between">
                <div className="size-15 glow shadow-lg rounded-2xl overflow-hidden bg-primary">
                  <Image src="logo.jpeg" />
                </div>
                <div className="size-15 rounded-2xl overflow-hidden glow shadow-lg flex items-center justify-center">
                  <h3>{experience}+</h3>
                </div>
              </div>
              <h3 className="my-4 ">{title}</h3>
              <p>
                {Description}
                <strong>{bold}</strong>
              </p>
              <button className="bg-primary p-4 font-bold  rounded-full text-white w-full my-3">
                Explore{" "}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
