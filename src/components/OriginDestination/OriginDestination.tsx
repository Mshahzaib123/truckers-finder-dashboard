import React from 'react'
import styled from 'styled-components'


const OrigingOtr = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;
`
const OrigingTextOtr = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
const OrigingCircleOtr = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
`
const OrigingCircle = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #a7a7a7;
`
const OrigingText = styled.span`
    font-size: 14px;
    line-height: 17px;
    color: #151515;
    flex: 1;
`

type Props = {
    Text1: string,
    Text2:string,
}
function OriginDestination({Text1,Text2}:Props) {
    return (
        <OrigingOtr className="Origion_text_main">
            <OrigingTextOtr className="origin_text">
                <OrigingCircleOtr className="circle_otr">
                    <OrigingCircle />
                </OrigingCircleOtr>
                <OrigingText>{Text1}</OrigingText>
            </OrigingTextOtr>
            <OrigingTextOtr className="origin_text">
                <OrigingCircleOtr className="circle_otr">
                    <OrigingCircle />
                </OrigingCircleOtr>
                <OrigingText>{Text2}</OrigingText>
            </OrigingTextOtr>
        </OrigingOtr>
    )
}

export default OriginDestination