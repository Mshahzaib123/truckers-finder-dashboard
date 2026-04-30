import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const HeadingWrapper = styled.div.attrs({
    className: 'heading_otr',
})``
const SecHeading = styled.h2(({}) => [
    tw`text-[20px] leading-[24px] text-black font-semibold`,
])

type Props = {
    HeadingText: string
}
function SectionHeading({ HeadingText }: Props) {
    return (
        <HeadingWrapper className="heading_otr">
            <SecHeading>{HeadingText}</SecHeading>
        </HeadingWrapper>
    )
}

export default SectionHeading
