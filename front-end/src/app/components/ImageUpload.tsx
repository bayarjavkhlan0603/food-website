"use client";

import { ChangeEvent, useState } from "react";
import { uploadImage } from "../utils/image-upload";

export const ImageUpload = () => {
  const [file, setFile] = useState<File>();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };
  console.log(file);
  const handleOnClick = async (file?: File) => {
    if (!file) {
      console.log("File orulagv bn");
      return;
    }
    const imageURL = await uploadImage(file);
    console.log(imageURL);
  };
  return (
    <div>
      <input className="p-4 bg-white" type="file" onChange={handleFileChange} />
      <button className="p-4 bg-white" onClick={() => handleOnClick(file)}>
        upload
      </button>
    </div>
  );
};
