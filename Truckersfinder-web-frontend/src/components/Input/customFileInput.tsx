import React, { useState, ChangeEvent } from 'react';
import styled ,{css}from 'styled-components'
import tw from 'twin.macro'

const InputWrapper = styled.div.attrs({
    className: 'inpuy_otr flex flex-col items-start gap-[4px]',
})``

const InputLabel = styled.label(() => [
    tw`text-[12px] leading-[15px] text-textcolor1`,
])

const CustomInputWrapper = styled.div`
    ${tw`relative w-full`}
`

const PrePostContent = styled.div<{
    position: string
    type: string | React.ReactNode | undefined
}>(({ position, type }) => {

    const isPostString = position === "post" && typeof type === "string"
    const isPreString = position === "pre" && typeof type === "string"

    return [
        `transform: translateY(-50%);
         position: absolute;
         top:50%;
        `,
        isPreString && tw`text-lg pl-2`,
        isPostString && tw`text-lg pr-2`,

        position && position === 'pre' ? 'left: 8px;' : 'right: 8px;',
    ]
})

const CustomInput = styled.div(() => [
    tw`text-[14px] leading-[18px] text-textcolor5 py-[11px] px-[12px] border-[1px] border-border-bordercolor rounded-8 pl-4 pr-4`,
])

type Props = {
    LabelFor: string
    LabelText: string
    InputName: string
    PreContent?: React.ReactNode | string
    PostContent?: React.ReactNode | string
    onFileChange: (event: ChangeEvent<HTMLInputElement>,index?:number) => void;  // Callback function prop
    index?:number
}


function FileInput({
    LabelFor,
    LabelText,
    InputName,
    PreContent,
    PostContent,
    onFileChange, // Receive the callback function prop
    index,
}: Props) {

    const [selectedFileName, setSelectedFileName] = useState<string>('Choose The File');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        const selectedFile = files && files.length > 0 ? files[0] : null;
    
        setSelectedFileName(selectedFile ? selectedFile.name : 'Choose The File');
    
        // Call the callback function with the selected file
        onFileChange(e,index);
      };
    
  
    return (
        <InputWrapper>
        <InputLabel htmlFor={LabelFor}>{LabelText}</InputLabel>
        <CustomInputWrapper>
            {PreContent && (
                <PrePostContent type={PreContent} position="pre">
                    {PreContent}
                </PrePostContent>
            )}
            <CustomInput>
            <input
            type="file"
            className="custom-file-input theme_input"
            name={InputName}
            id={InputName}
            onChange={handleChange}
          />
          <label className="file-input-label" htmlFor={InputName}>
            {selectedFileName}
          </label>
            </CustomInput>
            {PostContent && (
                <PrePostContent type={PreContent} position="post" >
                    {PostContent}
                </PrePostContent>
            )}
        </CustomInputWrapper>
    </InputWrapper>
    )
}

export default FileInput
