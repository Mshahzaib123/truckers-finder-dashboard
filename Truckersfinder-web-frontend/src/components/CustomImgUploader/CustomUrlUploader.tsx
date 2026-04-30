import React, { useState, useRef } from 'react';
import styled from 'styled-components'
import Button from '../Button/Button';

const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const CustomUrlUploader = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedImage(file);
        if (file) {
            setImageUrl('');
        }
    };

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(event.target.value);
        setSelectedImage(null);
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
        } else if (imageUrl) {
            // Handle URL upload logic here
            // You can use the imageUrl state to send the URL to your server
        }
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='url_uploader_wrapper'>
            <ImgWrapper onClick={handleClick} className='cursor-pointer mt-[20px]'>
                <label htmlFor="imguploader" className='text-[12px] leading-[15px] font-medium text-textcolor1'>
                    Or upload from a URL
                </label>
                <div className="input_btn_otr flex items-center gap-[8px] py-[5px] pl-[12px] pr-[6px] rounded-8 border-[1px] border-border-bordercolor">
                    <input
                        className='upload_input text-[14px] leading-[17px] !border-none py-[5px] px-[0px]'
                        type="text"
                        placeholder={selectedImage ? selectedImage.name : 'Add the file URL'}
                        value={imageUrl}
                        onChange={handleUrlChange}
                    />
                    <div className="action_otr flex">
                        <Button
                            buttonClass="!min-w-[auto] !text-[12px] !leading-[16px] !py-[5px] !px-[12px] hover:text-[#fff]"
                            color="secondary"
                            ButtonText="Upload"
                        />
                    </div>
                </div>
            </ImgWrapper>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
            />
            <button onClick={handleUpload} disabled={!selectedImage && !imageUrl} className='hidden'>
            </button>
        </div>
    );
};

export default CustomUrlUploader;
