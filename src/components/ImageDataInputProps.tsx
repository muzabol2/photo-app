import {ChangeEvent, useState} from "react";
import {ImageData} from "./Main";

interface ImageDataInputProps {
    handlePhotoAdd: (imageData: ImageData) => void;
    photoPath: string;
}

export function ImageDataInput({handlePhotoAdd, photoPath}: ImageDataInputProps) {
    const [imageData, setImageData] = useState<ImageData>({path: photoPath, title: ""});
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setImageData((i) => ({...i, title: e.target.value}));
    };

    return <>
        <div className="flex flex-row mt-4 w-64">
            <input
                className="bg-slate-300 p-2 rounded"
                type="text"
                id="title"
                name="title"
                placeholder="Enter title"
                onChange={handleTitleChange}
            />
            <button
                onClick={() => handlePhotoAdd(imageData)}
                className="rounded-lg text-center p-4 bg-purple-600 text-slate-200 font-semibold hover:shadow-lg hover:scale-105">
                Save
            </button>
        </div>
    </>;
}
