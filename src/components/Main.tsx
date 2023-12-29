import { PhotoCardCount } from "./PhotoCardCount";
import { PhotoCardList } from "./PhotoCardList";

export interface ImageData {
  path: string;
  title: string;
}

interface Props {
  photos: ImageData[];
}

export function Main({ photos }: Props) {
  return (
    <main className="flex-1 w-full overflow-auto p-8">
      <PhotoCardCount count={photos.length} />
      <PhotoCardList photos={photos} />
    </main>
  );
}
