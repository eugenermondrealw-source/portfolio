import Image, { ImageProps } from "next/image";

type AppImageProps = Omit<ImageProps, "className" | "src"> & {
  src?: string; 
  containerClassName?: string;
  imageClassName?: string;
  aspectRatio?: "square" | "video" | "auto";
  priority?: boolean; // Add this back as an optional prop
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
  priority = false, // Default to false
  ...props 
}: AppImageProps) {
  const width = Number(props.width) || 300;
  const height = Number(props.height) || 300;
  
  const fallbackSrc = `https://picsum.photos/${width}/${height}`;

  return (
    <div className={`relative overflow-hidden ${aspectRatios[aspectRatio]} ${containerClassName}`}>
      <Image
        src={src || fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        // Use priority prop dynamically
        priority={priority}
        // Use "rounded-lg" or similar if you have gaps appearing
        className={`w-full h-full object-cover transition-opacity duration-500 ${imageClassName}`}
        {...props}
      />
    </div>
  );
}