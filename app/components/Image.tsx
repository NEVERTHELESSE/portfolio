type imageType = { src: string };

export default function Image({ src }: imageType) {
  return <img src={src} />;
}
