import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import DollarIcon from '../../images/dollar-icon.svg'
import CalenderIcon from '../../images/calendar-icon.svg'
import BidProfile from '../../images/bid-profile.png'
import CallIcon from '../../images/call-icon2.svg'
import MessageIcon from '../../images/mail-icon.svg'
import BoxIcon from '../../images/box-icon2.svg'
import WeightIcon from '../../images/weight-icon.svg'
import FtIcon from '../../images/fit-icon.svg'
import TruckIcon from '../../images/truck-icon.svg'
import GpsIcon from '../../images/gps-icon.svg'
import MiIcon from '../../images/mi-icon.svg'
import { ReactComponent as CloseSvg } from '../../images/close-icon.svg'

const BidCompWrapper = styled.div`
    ${tw`w-[280px] h-[calc(100vh - 88px)]`}
    position: fixed;
    background-color: #fff;
    top: 88px;
    right: 0;
    z-index: 10;
    @media (max-width: 1030px) {
        height: calc(100vh - 78px);
        top: 78px;
    }
`
const BidCompHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const HeaderIconText = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
`
const HeaderIcon = styled.img`
    display: flex;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
`
const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const BidCompFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`
const FooterProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const FooterImgText = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
const FooterImg = styled.img`
    display: flex;
    width: 36px;
    height: 36px;
    object-fit: cover;
    object-position: center;
    gap: 8px;
    border-radius: 100%;
`
const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const FooterIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
const IconOtr = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    width: 40px;
    height: 40px;
    border-radius: 8px;
`
const IconImg = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
`
const BidContent = styled.div`
    height: calc(100% - 240px);
    padding: 0 16px 0 16px;
    overflow-y: auto;
`
const CircleOtr = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2cd6f933;
    width: 24px;
    height: 24px;
    border-radius: 100%;
`
const LocationWrapper = styled.div`
    .location_gps_inr:after {
        content: '';
        position: absolute;
        height: 24px;
        width: 1px;
        border-left: 1px dashed #2cd6f9;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
    }
    .circle_otr {
        background-color: #ede8ff;
    }
`

function BidPopup({
    setShowBidPopup,
}: {
    setShowBidPopup: React.Dispatch<React.SetStateAction<boolean>>
}) {
    return (
        <BidCompWrapper className="BidComp_mains duration-[.3s]" id="bid-popup">
            <div className="bg-dark p-[16px]">
                <div className="flex flex-row-reverse mb-[12px] cursor-pointer">
                    <CloseSvg onClick={() => setShowBidPopup(false)} />
                </div>
                <BidCompHeader>
                    <HeaderIconText>
                        <HeaderIcon src={DollarIcon} alt="icon" />
                        <HeaderText>
                            <p className="price text-[20px] leading-[23px] font-semibold text-light">
                                $800
                            </p>
                            <p className="price_mi text-[14px] leading-[17px] text-textcolor2">
                                $2.55/mi
                            </p>
                        </HeaderText>
                    </HeaderIconText>
                    <HeaderIconText>
                        <HeaderIcon src={CalenderIcon} alt="icon" />
                        <HeaderText>
                            <p className="date text-[20px] leading-[23px] font-semibold text-light">
                                09/12
                            </p>
                            <p className="day text-[14px] leading-[17px] text-textcolor2">
                                Friday
                            </p>
                        </HeaderText>
                    </HeaderIconText>
                </BidCompHeader>
            </div>
            <BidContent>
                <LocationWrapper className="location_gps_otr flex flex-col items-start border-b-[1px] border-border-bordercolor2 gap-[32px] py-[20px]">
                    <div className="location_gps_inr relative flex flex-col gap-[24px]">
                        <div className="content_gps flex items-center gap-[8px] flex-1">
                            <CircleOtr>
                                <span className="circle_inr w-[9px] h-[9px] rounded-full bg-secondarycolor"></span>
                            </CircleOtr>
                            <div className="circle_content">
                                <p className="icon_text text-[14px] leading-[17px] font-medium text-dark">
                                    Cheyenne, WM
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
                            <div className="circle_content">
                                <p className="icon_text text-[14px] leading-[17px] font-medium text-dark">
                                    Bangor, MN
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-[4px]">
                        <img
                            className="w-[20px] h-[20px] object-contain object-center"
                            src={MiIcon}
                            alt="icon"
                        />
                        <HeaderText>
                            <p className="price text-[14px] leading-[17px] font-medium text-dark">
                                314 mi
                            </p>
                            <p className="price_mi text-[10px] leading-[15px] font-normal text-textcolor5">
                                5h 32min
                            </p>
                        </HeaderText>
                    </div>
                </LocationWrapper>
                <div className="sand_otr flex flex-col items-start gap-[20px] py-[32px]">
                    <div className="icon_text flex items-center gap-[4px]">
                        <IconImg src={BoxIcon} alt="icon" />
                        <p className="icon_text text-[14px] leading-[17px] text-textcolor1">
                            Sand in bulk
                        </p>
                    </div>
                    <div className="icon_text flex items-center gap-[4px]">
                        <IconImg src={WeightIcon} alt="icon" />
                        <p className="icon_text text-[14px] leading-[17px] text-textcolor1">
                            55,000 lb
                        </p>
                    </div>
                    <div className="icon_text flex items-center gap-[4px]">
                        <IconImg src={TruckIcon} alt="icon" />
                        <p className="icon_text text-[14px] leading-[17px] text-textcolor1">
                            Dump truck
                        </p>
                    </div>
                    <div className="icon_text flex items-center gap-[4px]">
                        <IconImg src={FtIcon} alt="icon" />
                        <p className="icon_text text-[14px] leading-[17px] text-textcolor1">
                            50 ft
                        </p>
                    </div>
                </div>
            </BidContent>
            <BidCompFooter>
                <FooterProfile>
                    <FooterImgText>
                        <FooterImg src={BidProfile} alt="icon" />
                        <FooterText>
                            <p className="price text-[14px] leading-[17px] text-dark">
                                Kyle Stamford
                            </p>
                            <p className="price_mi text-[12px] leading-[15px] text-textcolor2">
                                Unum Group LLC
                            </p>
                        </FooterText>
                    </FooterImgText>
                    <FooterIcons>
                        <IconOtr>
                            <IconImg src={CallIcon} alt="icon" />
                        </IconOtr>
                        <IconOtr>
                            <IconImg src={MessageIcon} alt="icon" />
                        </IconOtr>
                    </FooterIcons>
                </FooterProfile>
                <div className="action_otr flex w-[100%]">
                    <button className="bid_btn w-[100%] text-[16px] leading-[18px] text-light py-[16px] px-[40px] rounded-8 duration-[.3s] bg-primarycolor hover:bg-dark">
                        Bid
                    </button>
                </div>
            </BidCompFooter>
        </BidCompWrapper>
    )
}

export default BidPopup
