import React, { useState, useRef } from 'react';
import styled from 'styled-components'

import UploadIcon from '../../images/upload-icon.svg'
import Button from '../Button/Button';


const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    background-color: #EDE8FF;
    border: 1px dashed #38008F;
    border-radius: 16px;
    padding: 16px;
`
const CustomImgUploader = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imageName, setImageName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedImage(file);
        if (file) {
            setImageName(file.name);
        } else {
            setImageName(null);
        }
    };

    const handleUpload = () => {
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);

            fetch('/upload-endpoint', {
                method: 'POST',
                body: formData,
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Image uploaded successfully:', data);
            })
            .catch((error) => {
                console.error('Error uploading image:', error);
            });
        }
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='img_uploader_wrapper'>
            <ImgWrapper onClick={handleClick} className='cursor-pointer mt-[24px] mb-[8px]'>
                <img className='upload_icon' src={UploadIcon} alt="icon" />
                <p className='upload_text text-[14px] leading-[18px] text-textcolor1'>
                    {imageName ? imageName : 'Drag and Drop file here'}
                </p>
                <div className="or_otr flex items-center gap-[12px] w-[60%]">
                    <span className='line h-[1px] bg-[#D0C5FF] w-[50%]'></span>
                    <span className='or_text text-[10px] leading-[15px] text-[#000000B2]'>or</span>
                    <span className='line h-[1px] bg-[#D0C5FF] w-[50%]'></span>
                </div>
                <div className="action_otr">
                    <Button
                        buttonClass="!min-w-[auto] !text-[12px] !leading-[15px] !py-[6px] !px-[12px] hover:text-[#fff]"
                        color="secondary"
                        ButtonText="Upload from PC"
                    />
                </div>
            </ImgWrapper>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
            />
            <button onClick={handleUpload} disabled={!selectedImage} className='flex items-center justify-between w-[100%]'>
                <span className='text1 text-[10px] leading-[15px] text-textcolor5'>Supported formats: PDF, JPG</span>
                <span className='text2 text-[10px] leading-[15px] text-textcolor5'>Max size: 500MB</span>
            </button>
        </div>
    );
};

export default CustomImgUploader;
