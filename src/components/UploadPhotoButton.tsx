import {ChangeEvent, useCallback} from "react";

export function UploadPhotoButton({onChange}: { onChange: (photoPath: string) => void }) {
    const handlePhotoUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }

        const picturePath = URL.createObjectURL(e.target.files[0]);
        onChange(picturePath);
    }, [onChange]);

    return <label htmlFor="picture"
                  className="rounded-lg text-center p-4 bg-purple-600 text-slate-200 font-semibold hover:shadow-lg hover:scale-105">
        Upload Picture
        <input
            id="picture"
            value=""
            accept="image/jpg,image/png"
            type="file"
            style={{display: "none"}}
            onChange={handlePhotoUpload}
        />
    </label>;
}
