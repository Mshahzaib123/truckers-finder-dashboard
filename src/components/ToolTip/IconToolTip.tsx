import React, {ReactNode } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

type Props= {

    icon?: ReactNode
    label: string
}
const ClipBottomDiv = styled.div`
  clip-path: polygon(100% 50%, 0 0, 100% 0, 50% 100%, 0 0);
  height: 10px;
  width: 15px;
  background-color: #4a5568; /* Replace with your desired background color */

`;
const ToolTip=styled.div`
${tw`max-w-max relative mx-1 flex flex-col items-center justify-center`}
`

const ToolTipDiv=styled.div`
${tw`[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-0 mb-8 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100`}
`
const Label=styled.div`
${tw`rounded bg-gray-900 p-2 text-xs text-center shadow-lg`}
`

export const IconToolTip: React.FC<Props> = ({
    icon,
    label,
}) => {
    return (
    <ToolTip className="group">
    {icon}
        <ToolTipDiv>
            <div className="flex max-w-xs flex-col items-center">
                <Label>{label}</Label>
                <ClipBottomDiv />
            </div>
        </ToolTipDiv>
    </ToolTip>
    )
}

export default IconToolTip

