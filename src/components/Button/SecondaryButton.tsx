import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const CustomButton = styled.button(() => [
    tw`text-[14px] leading-[16px] text-primarycolor bg-primarylight py-[12.5px] px-[16px] rounded-8`,
]);
type Props = {
    ButtonText: string,
}
function SecondaryButton({ ButtonText }:Props) {
    return (
        <CustomButton className='light_btn'>{ButtonText}</CustomButton>
    )
}

export default SecondaryButton
