import Image, { ImageProps } from "next/image";

type AppImageProps = Omit<ImageProps, "className" | "src"> & {
  src?: string; 
  containerClassName?: string;
  imageClassName?: string;
  aspectRatio?: "square" | "video" | "auto";
};

const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
  auto: "aspect-auto",
};

export default function AppImage({ 
  src, 
  alt, 
  aspectRatio = "auto",
  containerClassName = "", 
  imageClassName = "",
  ...props 
}: AppImageProps) {
  const width = props.width || 800;
  const height = props.height || 600;
  const randomSeed = Math.floor(Math.random() * 1084);
  const fallbackSrc = `https://picsum.photos/id/${randomSeed}/${width}/${height}`;

  return (
    <div className={`relative overflow-hidden ${aspectRatios[aspectRatio]} ${containerClassName}`}>
      <Image
        src={src || fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-all duration-500 ${imageClassName}`}
        {...props}
      />
    </div>
  );
}
