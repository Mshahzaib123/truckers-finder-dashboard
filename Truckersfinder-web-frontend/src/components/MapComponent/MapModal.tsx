import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import GpsIcon from '../../images/gps-icon.svg'
import DollarIcon from '../../images/dollar-icon.svg'
import PhoneIcon from '../../images/call-icon2.svg'
import SmsIcon from '../../images/mail-icon.svg'
import MessageIcon from '../../images/message-icon3.svg'
import CopyText from '../CopyText/CopyText';

const CircleOtr = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2cd6f933;
    width: 24px;
    height: 24px;
    border-radius: 100%;
`
const IconImg = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
`
const ModalHeader = styled.div`
    .location_gps_inr:after {
        content: '';
        position: absolute;
        height: 24px;
        width: 1px;
        border-left: 1px dashed #2CD6F9;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
    }
    .circle_otr {
        background-color: #EDE8FF;
    }
`
function MapModal({
    setShowMapPopup,
}: {
    setShowMapPopup: React.Dispatch<React.SetStateAction<boolean>>
}) {
    return (
        <div id="map_modal" className='MapModal_main absolute z-10 top-0 left-0 w-[260px] h-[100%] bg-light rounded-tl-8 rounded-bl-8 shadow-Shadow4 px-[16px] py-[24px]'>
            <div className="MapModal_otr flex flex-col justify-between h-[100%]">
                <ModalHeader className="modal_header h-[calc(100% - 166px)] overflow-y-auto">
                    <div className="heading_social pb-[24px]">
                        <div className="content mb-[16px]">
                            <h3 className='heading mb-[8px] text-[18px] leading-[20px] font-semibold text-dark'>
                                Unum Group LLC
                            </h3>
                            <p className='desc text-[14px] leading-[16px] text-textcolor5'>
                                26223 Serenity Oaks DR -5407
                            </p>
                        </div>
                        <ul className='social_ul flex gap-[8px]'>
                            <li className='social_li'>
                                <Link to='' className='flex items-center justify-center w-[32px] h-[32px] rounded-6 bg-[#F8F8F8]'>
                                    <IconImg src={PhoneIcon} alt="icon" />
                                </Link>
                            </li>
                            <li className='social_li'>
                                <Link to='' className='flex items-center justify-center w-[32px] h-[32px] rounded-6 bg-[#F8F8F8]'>
                                    <IconImg src={SmsIcon} alt="icon" />
                                </Link>
                            </li>
                            <li className='social_li'>
                                <Link to='' className='flex items-center justify-center w-[32px] h-[32px] rounded-6 bg-[#F8F8F8]'>
                                    <IconImg src={MessageIcon} alt="icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="location_gps_inr border-y-[1px] border-border-bordercolor py-[24px] relative flex flex-col gap-[24px]">
                        <div className="content_gps flex items-center gap-[8px] flex-1">
                            <CircleOtr>
                                <span className="circle_inr w-[9px] h-[9px] rounded-full bg-secondarycolor"></span>
                            </CircleOtr>
                            <div className="circle_content flex flex-col gap-[4px]">
                                <p className="icon_text text-[14px] leading-[17px] font-medium text-dark">
                                    Cheyenne, WM
                                </p>
                                <p className="icon_text text-[10px] leading-[15px] text-textcolor5">
                                    4001 Anderson Road, Nashville WM 37217
                                </p>
                            </div>
                        </div>
                        <div className="content_gps flex items-center gap-[8px] flex-1">
                            <CircleOtr className="circle_otr">
                                <img
                                    className="gps_icon w-[14px] h-[14px] object-contain object-center"
                                    src={GpsIcon}
                                    alt="icon"
                                />
                            </CircleOtr>
                            <div className="circle_content flex flex-col gap-[4px]">
                                <p className="icon_text text-[14px] leading-[17px] font-medium text-dark">
                                    Bangor, MN
                                </p>
                                <p className="icon_text text-[10px] leading-[15px] text-textcolor5">
                                    8642 Yule Street, Arvada MN 80007
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="icon_text flex items-center gap-[4px] py-[24px]">
                        <IconImg src={DollarIcon} alt="icon" />
                        <p className="icon_text text-[14px] leading-[17px] text-textcolor1">
                            $100.00
                        </p>
                    </div>
                </ModalHeader>
                <div className="share_otr pt-[24px] border-t-[1px] border-border-bordercolor">
                    <h3 className='heading mb-[8px] text-[18px] leading-[20px] font-semibold text-dark'>
                        Share
                    </h3>
                    <CopyText CopyTextClass="my-[16px]" />
                    <p className='desc text-[12px] leading-[14px] text-textcolor5'>
                        Copy the direct link and send it via email or sms to share the location
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MapModal