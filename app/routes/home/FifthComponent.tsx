import Image from "~/components/Image";

export default function FiftComponent() {
  const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section className="p-6 text-center py-10 my-10 w-full shadow-lg  rounded-2xl glow">
      <h3>my skills</h3>
      <h3 className="text-uppercase">Technologies I Master</h3>
      <div className="flex flex-wrap justify-center sm:justify-between">
        {skills.map((skill) => (
          <div
            key={skill}
            className="w-[90%] sm:w-[48%] lg:w-[30%] my-4 p-2 flex items-center rounded-2xl shadow-lg"
          >
            <div className="size-15">
              <Image src="/icons/html.png" />
            </div>
            <div className="w-full ml-2">
              <div className="flex justify-between">
                <h3>HTML</h3>
                <h3>95%</h3>
              </div>
              <div className="w-full rounded-4xl overflow-hidden bg-gray-400 h-3">
                <div className="h-full w-[70%] bg-primary"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
