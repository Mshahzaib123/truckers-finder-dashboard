import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import LocationPoint from './LocationPoint'
import InfoCard from './InfoCard'

import dateIcon from '../../images/calender-black.svg'
import VanIcon from '../../images/truck-black.svg'
import WeightIcon from '../../images/weight-icon2.svg'
import BoxIcon from '../../images/box-black.svg'
import ShipperIcon from '../../images/bag-black.svg'


const CardWrapper = styled.div`
    ${tw``}
    border-left: 4px solid transparent;
    background: #fff;
    transition: .3s;
    &:hover{
        background: linear-gradient(90deg, rgba(44, 214, 249, 0.10) 0%, rgba(44, 214, 249, 0.00) 21.35%), #FFF;
        border-left: 4px solid #2CD6F9;
    }
`
const CardLocationPrice = styled.div`
    ${tw``}
    .locations_otr{
        .location_otr{
            width: 33.333%;
            &:nth-child(1){
                .icon_otr{
                    background-color: #2CD6F933;
                }
                .gps_icon{
                    opacity: 0;
                    visibility: hidden;
                }
            }
            &:nth-child(3){
                .icon_otr{
                    background-color: #EDE8FF;
                }
                .circle_icon{
                    opacity: 0;
                    visibility: hidden;
                }
            }
        }
        .location_distance{
            display: flex;
            width: 33.333%;
        }
        .icon_otr{
            svg{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50% , -50%);
            }
        }
    }
`
const CardInfo = styled.div`
    ${tw`flex items-center pt-[20px]`}
    .InfoCard_otr {
        width: 20%;
    }
`


type Props = {
    originPoint: string
    destinationPoint: string
    distanceText: string
    totalPrice: string
    perMiPrice: string
    pickupDate: string
    truckType: string
    weight: string
    cargoType: string
    shipper: string
    id:string
    bidClick: (id: string) => void
}
function LoadboadTableCard(
    {
        id,
        originPoint,
        destinationPoint,
        distanceText,
        totalPrice,
        perMiPrice,
        pickupDate,
        truckType,
        weight,
        cargoType,
        shipper,
        bidClick
    }: Props) {
    return (
        <CardWrapper className='LoadboadTableCard_otr p-[20px] rounded-20' onClick={() => {bidClick(id)}}>
            <CardLocationPrice className='card_location_price flex items-center justify-between gap-[20px] pb-[16px] border-b-[1px] border-b-[#DCDCDC]'>
                <div className="locations_otr flex items-center w-[60%]">
                    <LocationPoint
                        locationHeading={originPoint}
                        locationDesc="Origin point"
                    />
                    <div className="location_distance">
                        <div className="distance_text_otr border-dashed border-b-[1.5px] border-b-[#2CD6F9]">
                            <p className='distance_text text-[14px] leading-[17px] font-medium text-[#151515CC] px-[12px] pb-[4px]'>{distanceText}</p>
                        </div>
                    </div>
                    <LocationPoint
                        locationHeading={destinationPoint}
                        locationDesc="Destination point"
                    />
                </div>
                <div className="price_otr flex items-center justify-end gap-[16px] w-[20%]">
                    <h3 className='total_price text-[24px] leading-[28px] font-medium text-primarycolor'>
                        {totalPrice}
                    </h3>
                    <p className='per_mi_price text-[14px] leading-[17px] font-medium text-[#15151599]'>
                        {perMiPrice}
                    </p>
                </div>
            </CardLocationPrice>
            <CardInfo className="card_info_otr flex items-center ">
                <InfoCard
                    Icon={dateIcon}
                    heading={pickupDate}
                    desc="Pickup date"
                />
                <InfoCard
                    Icon={VanIcon}
                    heading={truckType}
                    desc="Truck type"
                />
                <InfoCard
                    Icon={WeightIcon}
                    heading={weight}
                    desc="Weight"
                />
                <InfoCard
                    Icon={BoxIcon}
                    heading={cargoType}
                    desc="Cargo"
                />
                <InfoCard
                    Icon={ShipperIcon}
                    heading={shipper}
                    desc="Shipper"
                />
            </CardInfo>
        </CardWrapper>
    )
}

export default LoadboadTableCard