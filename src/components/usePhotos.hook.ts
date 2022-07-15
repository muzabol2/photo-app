import {useCallback, useState} from "react";
import {ImageData} from "./Main";

export function usePhotos() {
    const [photos, setPhotos] = useState<ImageData[]>([]);
    const handlePhotoAdd = useCallback((imageData: ImageData) => {
        setPhotos((u) => [...u, imageData]);
    }, [setPhotos]);

    return {photos, handlePhotoAdd};
}
