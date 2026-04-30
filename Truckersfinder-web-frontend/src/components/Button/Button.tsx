import React, { ReactNode } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

type CustomButtonProps = {
    color?: 'primary' | 'secondary'
    disabled?: boolean
}

const CustomButton = styled.button<CustomButtonProps>(
    ({ color = 'primary', disabled }) => {
        const isPrimary = color === 'primary'

        return [
            tw`text-[14px] leading-[16px] py-[12.5px] px-[16px] rounded-8 min-w-[150px] cursor-pointer`,
            isPrimary && tw`bg-primarycolor text-light`,
            !isPrimary &&
                tw`border text-primarycolor bg-primarylight hover:bg-primarylight`,
            disabled && tw`opacity-50 cursor-not-allowed`,
        ]
    }
)

const ButtonContent = styled.div`
    ${tw`flex justify-center items-center gap-x-3.5 content-center`}
`

type Props = {
    ButtonText: string
    buttonClass?: string
    disabled?: boolean
    color: 'primary' | 'secondary'
    icon?: ReactNode
    onClick?: () => void
    iconPosition?: 'left' | 'right'
    contentClassName?: string
}

function Button({
    ButtonText,
    disabled,
    color,
    buttonClass,
    onClick,
    icon,
    iconPosition = 'right',
    contentClassName,
}: Props) {
    return (
        <CustomButton
            disabled={disabled}
            color={color}
            onClick={onClick}
            className={`theme_btn ${buttonClass}`}
        >
            <ButtonContent className={contentClassName}>
                {icon && iconPosition === 'left' && icon}
                {ButtonText}
                {icon && iconPosition === 'right' && icon}
            </ButtonContent>
        </CustomButton>
    )
}

export default Button
