import React, { ChangeEventHandler } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const InputWrapper = styled.div.attrs({
    className: 'inpuy_otr flex flex-col items-start gap-[4px]',
})``
const InputLabel = styled.label(({}) => [
    tw`text-[12px] leading-[15px] text-textcolor1`,
])

const CustomInputWrapper = styled.div<{ CustomWidth?: string }>`
    ${tw`relative`}
    width: ${({ CustomWidth }) => (CustomWidth ? CustomWidth : '100%')};
`

type PrePostContentProps = {
    position: string
    type: string | React.ReactNode | undefined
}
type InputPedding = {
    Icontype: string | React.ReactNode | undefined
}

const PrePostContent = styled.div<PrePostContentProps>(({ position, type }) => {
    const isPostString = position === 'post' && typeof type === 'string'
    const isPreString = position === 'pre' && typeof type === 'string'

    return [
        `transform: translateY(-50%);
         position: absolute;
         top:50%;
        `,
        isPreString && tw`pl-2 md:pl-1`,
        isPostString && tw`pr-2 md:pr-1`,
        tw`text-lg md:text-xs`,

        position && position === 'pre' ? 'left: 8px;' : 'right: 8px;',
    ]
})

const CustomInput = styled.input<InputPedding>(({ Icontype }) => [
    tw`text-[14px] leading-[18px] text-textcolor1 py-[11px] px-[12px] border-[1px] border-border-bordercolor rounded-8 pl-4 pr-4`,
    Icontype == 'pre' && tw`pl-9`,
    Icontype == 'post' && tw`pr-9`,
])

type Props = {
    InputPlaceholder: string
    InputClass?: string
    LabelFor?: string
    LabelText?: string
    InputName: string
    LableClass?: string
    InputType: string
    CustomWidth?: string
    PreContent?: React.ReactNode | string
    PostContent?: React.ReactNode | string
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    onClick?: Function | undefined
    ReadOnly?: boolean
    Value?: string
    required?: boolean
}
function Input({
    InputPlaceholder,
    LabelFor,
    LabelText,
    InputName,
    InputType,
    PreContent,
    PostContent,
    CustomWidth,
    LableClass,
    InputClass,
    ReadOnly,
    onChange,
    onClick,
    Value,
    required,
}: Props) {
    return (
        <InputWrapper>
            <InputLabel htmlFor={LabelFor} className={LableClass}>
                {LabelText}
            </InputLabel>
            <CustomInputWrapper CustomWidth={CustomWidth}>
                {PreContent && (
                    <PrePostContent type={PreContent} position="pre">
                        {PreContent}
                    </PrePostContent>
                )}
                <CustomInput
                    className={`theme_input  ${InputClass}`}
                    name={InputName}
                    type={InputType}
                    Icontype={PreContent ? 'pre' : PostContent ? 'post' : ''}
                    placeholder={InputPlaceholder}
                    onChange={onChange}
                    onClick={() => onClick}
                    readOnly={ReadOnly}
                    value={Value}
                    required={required}
                />
                {PostContent && (
                    <PrePostContent
                        type={PreContent}
                        position="post"
                        className="input_last_text"
                    >
                        {PostContent}
                    </PrePostContent>
                )}
            </CustomInputWrapper>
        </InputWrapper>
    )
}

export default Input
