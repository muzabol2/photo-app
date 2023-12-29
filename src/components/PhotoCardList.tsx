import { PhotoCard } from "./PhotoCard";
import { ImageData } from "./Main";

interface Props {
  photos: ImageData[];
}

export function PhotoCardList({ photos }: Props) {
  return (
    <div className="flex flex-wrap items-start justify-around space-x-8">
      {photos.map((p) => (
        <PhotoCard key={p.path} photo={p} />
      ))}
    </div>
  );
}
