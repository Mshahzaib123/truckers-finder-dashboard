import React, { useState } from 'react';


type Props = {
    CopyTextClass: string
}
function CopyText({CopyTextClass}:Props) {
    const [textToCopy, setTextToCopy] = useState(
        'https://truckersfinder.com/liveloads/track1214123123'
    );
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        const inputElement = document.getElementById('copyInput') as HTMLInputElement;

        if (inputElement) {
            inputElement.select();
            document.execCommand('copy');
            setIsCopied(true);
        }
    };

    return (
        <div className={`${CopyTextClass} direct_linkk flex flex-col gap-[4px]`}>
            <label htmlFor="dlink" className='text-[12px] leading-[15px] text-dark'>Direct link</label>
            <div className="input_btn_otr flex items-center gap-[8px] py-[6px] pl-[12px] pr-[6px] rounded-8 border-[1px] border-border-bordercolor">
                <input
                    id="copyInput"
                    className="upload_input text-[14px] leading-[17px] !border-none py-[5px] px-[0px]"
                    type="text"
                    name="text"
                    value={textToCopy}
                    readOnly
                />
                <div className="action_otr flex">
                    <button
                        className={`${isCopied ? 'bg-dark text-[#fff]' : 'text-primarycolor bg-[#D0C5FF]'} copy-button text-[12px] leading-[16px] font-medium rounded-6 duration-[.3s] py-[6px] px-[12px] hover:bg-dark hover:text-[#fff]`}
                        onClick={handleCopyClick}
                    >
                        {isCopied ? 'Copied' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CopyText;
