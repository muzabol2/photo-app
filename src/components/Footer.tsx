import { useState } from "react";

import { UploadPhotoButton } from "./UploadPhotoButton";
import { ImageData } from "./Main";
import { ImageDataInput } from "./ImageDataInputProps";

interface Props {
  handlePhotoAdd: (imageData: ImageData) => void;
}

export function Footer({ handlePhotoAdd }: Props) {
  const [path, setPath] = useState<string | null>(null);

  return (
    <footer className="flex-none w-full h-24 flex items-center justify-center p-4 border-t-2 border-slate-300">
      {!path && <UploadPhotoButton onChange={setPath} />}
      {!!path && (
        <ImageDataInput
          photoPath={path}
          handlePhotoAdd={(p) => {
            handlePhotoAdd(p);
            setPath(null);
          }}
        />
      )}
    </footer>
  );
}
