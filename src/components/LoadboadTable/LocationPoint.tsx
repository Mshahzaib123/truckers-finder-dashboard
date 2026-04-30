import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { ReactComponent as GpsIcon } from '../../images/gps-icon.svg'
import { ReactComponent as CircleIcon } from '../../images/circle-icon.svg'


const LocationPointOtr = styled.div`
    ${tw`flex items-center gap-[8px]`}
`
type Props = {
    locationHeading: string
    locationDesc:string
}
function LocationPoint({locationHeading,locationDesc}:Props) {
    return (
        <LocationPointOtr className='location_otr'>
            <div className="icon_otr relative w-[24px] h-[24px] rounded-[100%]">
                <GpsIcon className='gps_icon' />
                <CircleIcon className='circle_icon' />
            </div>
            <div className="location_content flex flex-col flex-1 items-start gap-[4px]">
                <h3 className='location_heading text-[20px] lg:!text-[16px] leading-[25px] lg:!leading-[20px] text-dark font-medium'>
                    {locationHeading}
                </h3>
                <p className='location_desc text-[12px] leading-[18px] text-grey_01 font-medium'>
                    {locationDesc}
                </p>
            </div>
        </LocationPointOtr>
    )
}

export default LocationPoint