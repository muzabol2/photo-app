import { ImageData } from "./Main";

interface Props {
   photo: ImageData;
   alt?: string;
}

export function PhotoCard({ photo, alt }: Props) {
   return <div className="w-64 rounded-lg bg-white shadow-lg overflow-hidden">
      {photo.title}
      <img
         className="object-contain"
         src={photo.path}
         alt={alt}
      />
   </div>;
}
