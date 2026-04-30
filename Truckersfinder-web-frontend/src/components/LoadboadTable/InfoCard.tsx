import React from 'react'


type Props = {
    Icon: string
    heading: string
    desc:string
}
function InfoCard({Icon,heading,desc}:Props) {
    return (
        <div className='InfoCard_otr flex flex-col items-start gap-[4px]'>
            <div className="icon_heading flex items-center gap-[8px]">
                <img className='w-[16px] h-[16px] object-contain' src={Icon} alt="icon" />
                <p className='info_heading text-[14px] leading-[17px] font-medium text-dark'>
                    {heading}
                </p>
            </div>
            <p className='info_desc text-[12px] leading-[18px] font-medium text-[#15151599]'>
                {desc}
            </p>
        </div>
    )
}

export default InfoCard