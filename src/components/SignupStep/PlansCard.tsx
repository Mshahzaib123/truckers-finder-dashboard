import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import RadioBtn from '../RadioBtn/RadioBtn'

import CheckIcon from '../../images/check-icon3.svg'

const PriceText = styled.h1(() => [
    tw`text-[32px] leading-[36px] text-black font-semibold`,
]);
const CheckImg = styled.img(() => [
    tw`w-[16px] h-[16px] object-contain object-center`,
]);
const PlanText = styled.span(() => [
    tw`text-[14px] leading-[18px] text-black`,
]);
const RadioButton = styled.div`
    .check_otr{
        width: 100%;
        max-width: 100%;
        padding: 0;
        background: none;
    }
`

type Props = {
    RadioText: string,
    CardPrice: string,
    PlansText1: string,
    PlansText2: string,
    PlansText3: string,
    PlansText4: string,
    addClass:string
}
function PlansCard({ RadioText, CardPrice, PlansText1, PlansText2, PlansText3, PlansText4,addClass }: Props) {
    return (
        <div className={`${addClass} PlansCard_otr p-[20px] border-[2px] border-transparent rounded-16`}>
            <RadioButton className="radio_btn_otr">
                <RadioBtn
                    CheckText={RadioText}
                    Groupname="PlanType"
                />
            </RadioButton>
            <PriceText className='card_price mt-[12px] mb-[20px]'>
                {CardPrice}
            </PriceText>
            <ul className='plan_ul flex flex-col gap-[12px]'>
                <li className='plan_li flex items-center gap-[12px] p-[8px] rounded-8'>
                    <CheckImg className='check_icon' src={CheckIcon} alt='icon' />
                    <PlanText className='plan_text'>
                        {PlansText1}
                    </PlanText>
                </li>
                <li className='plan_li flex items-center gap-[12px] p-[8px] rounded-8'>
                    <CheckImg className='check_icon' src={CheckIcon} alt='icon' />
                    <PlanText className='plan_text'>
                        {PlansText2}
                    </PlanText>
                </li>
                <li className='plan_li flex items-center gap-[12px] p-[8px] rounded-8'>
                    <CheckImg className='check_icon' src={CheckIcon} alt='icon' />
                    <PlanText className='plan_text'>
                        {PlansText3}
                    </PlanText>
                </li>
                <li className='plan_li flex items-center gap-[12px] p-[8px] rounded-8'>
                    <CheckImg className='check_icon' src={CheckIcon} alt='icon' />
                    <PlanText className='plan_text'>
                        {PlansText4}
                    </PlanText>
                </li>
            </ul>
        </div>
    )
}

export default PlansCard