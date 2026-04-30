import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Heading = styled.h1(({}) => [tw`text-[36px] leading-[44px] text-black`])

type Props = {
    HeadingText: string
}
function FormHeading({ HeadingText }: Props) {
    return <Heading>{HeadingText}</Heading>
}

export default FormHeading
