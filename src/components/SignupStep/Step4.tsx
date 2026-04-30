import React from 'react'
import FormHeading from '../FormHeading/FormHeading'
import Button from '../Button/Button'
import SecondaryButton from '../Button/SecondaryButton'
import styled from 'styled-components'
import tw from 'twin.macro'

import CouponImg from '../../images/coupon-icon.svg'
import PlansCard from './PlansCard'

const InputLabel = styled.label(() => [
    tw`text-[14px] leading-[18px] text-textcolor1`,
])
const CustomInput = styled.input(() => [
    tw`text-[16px] leading-[18px] text-textcolor1 py-[13px]`,
])
const CouponInputOtr = styled.div`
    ${tw`w-[calc(50% - 8px)] flex border-dashed border-secondarycolor gap-[10px] border-[2px] py-[8px] px-[16px] rounded-8`}
`

function Step4({ handleStep }: { handleStep: (step: number) => void }) {
    return (
        <div className="sub_step w-[100%] h-[100%] px-[40px] py-[56px]">
            <div className="content_otr mb-[48px]">
                <FormHeading HeadingText="Subscription plan" />
                <p className="sub_desc text-[18px] leading-[20px] text-textcolor1 mt-[16px] mb-[40px]">
                    Select the subscription plan that suits you
                </p>
            </div>
            <form className="form_otr flex flex-col gap-[24px] justify-between h-[100%]">
                <div className="plan_coupon">
                    <div className="plans_otr flex gap-[16px]">
                        <PlansCard
                            addClass="active_plan"
                            RadioText="TMS"
                            CardPrice="$49.00"
                            PlansText1="Management Platform"
                            PlansText2="Automated Carrier Onboarding"
                            PlansText3="Mobile All For Carriers"
                            PlansText4="Automated Carrier Billling"
                        />
                        <PlansCard
                            addClass="simple_plan"
                            RadioText="Carriers Data Bank"
                            CardPrice="$89.00"
                            PlansText1="Management Platform"
                            PlansText2="Automated Carrier Onboarding"
                            PlansText3="Mobile All For Carriers"
                            PlansText4="Automated Carrier Billling"
                        />
                    </div>
                    <div className="action_input_otr flex flex-col gap-[8px] mt-[40px] mb-[24px]">
                        <InputLabel htmlFor="couponcode">
                            I have a coupon code
                        </InputLabel>
                        <CouponInputOtr className="coupon_action">
                            <div className="coupon_input flex items-center gap-[10px] flex-1">
                                <img
                                    className="coupon_icon w-[32px] h-[32px] object-contain object-center"
                                    src={CouponImg}
                                    alt="icon"
                                />
                                <CustomInput
                                    className="theme_input"
                                    name="couponcode"
                                    type="text"
                                    placeholder="Enter the coupon code"
                                />
                            </div>
                            <div className="apply_otr flex">
                                <Button buttonClass="!min-w-[auto]" color='primary' ButtonText="Apply" />
                            </div>
                        </CouponInputOtr>
                    </div>
                </div>
                <div className="action_otr flex items-center justify-end gap-[16px]">
                    <SecondaryButton ButtonText="Back" />
                    <Button buttonClass="" color='primary'  ButtonText="Next" onClick={() => handleStep(4)} />
                </div>
            </form>
        </div>
    )
}

export default Step4
