import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const CustomButton = styled.button(({}) => [
    tw`text-[14px] flex justify-center space-x-2  items-center leading-[16px] text-primarycolor bg-transparent border-[1px] border-primarycolor py-[12.5px] px-[12px] rounded-8 min-w-[150px] rounded-8`,
])

type Props = {
    ButtonText: string
    onClick?: () => void // Function to be executed on click
    icon?: React.ReactNode // Icon to be displayed
    iconPosition?: 'left' | 'right' // Icon position
    buttonClassName?: string // Button class name
}

function BorderButton({
    ButtonText,
    onClick,
    icon,
    iconPosition,
    buttonClassName,
}: Props) {
    return (
        <CustomButton
            className={`${buttonClassName} border_btn`}
            onClick={onClick}
        >
            {icon && iconPosition === 'left' && icon}
            <p>{ButtonText}</p>
            {icon && iconPosition === 'right' && icon}
        </CustomButton>
    )
}

export default BorderButton
