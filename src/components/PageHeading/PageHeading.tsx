import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const HeadingWrapper = styled.div.attrs({
    className: 'heading_otr mb-[20px]',
})``
const PagHeading = styled.h1(() => [
    tw`text-[28px] leading-[32px] text-black font-semibold`,
])

type Props = {
    HeadingText: string
    HeadingWrapperClass?:string
}
function PageHeading({ HeadingText,HeadingWrapperClass }: Props) {
    return (
        <HeadingWrapper className={`heading_otr ${HeadingWrapperClass}`}>
            <PagHeading>{HeadingText}</PagHeading>
        </HeadingWrapper>
    )
}

export default PageHeading
