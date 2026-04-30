import React from 'react';

type ButtonTextProps = {
  buttonText?: string;
};

function ImgUploader({ buttonText }: ButtonTextProps) {
  return (
    <label className="ImgUpload">
      <input type="file" required />
      <span>{buttonText || 'Select a file'}</span>
    </label>
  );
}

export default ImgUploader;
