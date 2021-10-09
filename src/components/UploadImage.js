import React, { useState , useEffect} from "react";
import axios from 'axios';
import {
  Button,
} from "@material-ui/core";

import { styled } from '@material-ui/core/styles';
const Input = styled('input')({
    display: 'none',
  });
export default function UploadExpress() {
  const [previewSource, setPreviewSource] = useState("");
  const handlePhotoInputs = (e) => {
  const file = e.target.files[0];
  previewFile(file);
  }
  const previewFile = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
  setPreviewSource(reader.result);
  };
  };
  const handleSubmitFile = (e)=>{
  e.preventDefault();
  if(!previewSource) return;
  uploadImage(previewSource);
  }
  const uploadImage=  async (base64EncodedImage)=>{
  try {
    await fetch('/image', {
    method: 'POST',
    body: JSON.stringify({ data: base64EncodedImage }),
    headers: { 'Content-Type': 'application/json' },
  });
  }catch (error) {
    console.log(error);
  }
  
};

  return (
    <div>
      <form  onSubmit={handleSubmitFile} className="form">
          
            <input type="file" accept="image/*" onChange={handlePhotoInputs} />
            <Button type="submit" on>Submit</Button>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
      </form>
    </div>
  );
}
