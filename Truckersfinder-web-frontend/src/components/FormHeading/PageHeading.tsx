import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Heading = styled.h1(({}) => [tw`text-[28px] leading-[32px] text-black`])

type Props = {
    HeadingText: string
}
function PageHeading({ HeadingText }: Props) {
    return <Heading>{HeadingText}</Heading>
}

export default PageHeading
