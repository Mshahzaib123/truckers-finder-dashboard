import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import LocationIcon from '../../images/location_icon2.svg'
import VanIcon from '../../images/carrier-icon.svg'


const LocatIcon = styled.img`
    ${tw`w-[40px] h-[48px] object-contain object-center`}
`
const VIcon = styled.img`
    ${tw`w-[20px] h-[20px] object-contain object-center absolute left-[50%] translate-x-[-50%] top-[6px] z-[2]`}
`

type Props = {
    IconClass: string
}
function MapIcon({IconClass}:Props) {
    return (
        <div className={`${IconClass} location_otr absolute z-[5]`}>
            <VIcon src={VanIcon} alt='icon'/>
            <LocatIcon src={LocationIcon} alt="icon" />
        </div>
    )
}

export default MapIcon