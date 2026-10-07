import Image from "~/components/Image";

export default function ThirdComponent() {
  const thirdCompnentsData = [
    { id: "1", src: "/icons/css.png", title: "VSCode", link: "/tools/vscode" },
    { id: "2", src: "/icons/css.png", title: "VSCode", link: "/tools/vscode" },
    { id: "3", src: "/icons/css.png", title: "VSCode", link: "/tools/vscode" },
    { id: "4", src: "/icons/css.png", title: "VSCode", link: "/tools/vscode" },
    { id: "5", src: "/icons/css.png", title: "VSCode", link: "/tools/vscode" },
    { id: "6", src: "/icons/css.png", title: "VSCode", link: "/tools/vscode" },
    { id: "7", src: "/icons/css.png", title: "VSCode", link: "/tools/vscode" },
    { id: "8", src: "/icons/css.png", title: "VSCode", link: "/tools/vscode" },
    { id: "9", src: "/icons/css.png", title: "VSCode", link: "/tools/vscode" },
    { id: "10", src: "/icons/css.png", title: "VSCode", link: "/tools/vscode" },
  ];

  return (
    <div className="glow shadow-lg rounded-2xl p-6">
      <h5 className="gradient">Technologies I Use</h5>
      <p className="text-2xl font-bold">TOOLS & SKILLS</p>
      <div className="flex my-5 justify-between">
        {thirdCompnentsData.map(({ id, title, src }) => (
          <div key={id} className="glow shadow-lg rounded-2xl  py-2 px-6">
            <div className="size-15 overflow-hidden">
              <Image src={src} />
            </div>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
