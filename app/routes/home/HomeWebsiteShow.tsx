import { Link } from "react-router";
import Image from "~/components/Image";
import SiteLoading from "~/components/loading/SiteLoading";
import { sites } from "~/data/allWebsite";

type propT = {
  setActiveSrc: any;
};

export default function HomeWebsiteShow({ setActiveSrc }: propT) {
  return (
    <div className="z-50 border-t pt-10">
      <h3 className="text-center my-4">
        Click on the Site to view it on the mockup
      </h3>
      <div className="flex justify-around flex-wrap">
        {sites.map(({ id, src, link, title, description }) => (
          <div
            key={id}
            className="w-[90%] sm:w-[48%] lg:w-[30%] my-3 shadow-lg rounded-2xl overflow-hidden  glow cursor-pointer"
          >
            <div
              className="w-full bg-green-500 h-70"
              onClick={() => setActiveSrc(link)}
            >
              <Image src={src} />
            </div>
            <div className="w-full p-4 ">
              <h3>{title} </h3>
              <p>{description}</p>
              <Link to={link} className="font-bold my-4 text-right">
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="duration-150 py-4 px-10 bg-primary hover:bg-secondary shadow rounded-full my-8 font-bold text-white">
          Load More
        </button>
      </div>
      {/* <SiteLoading /> */}
    </div>
  );
}
