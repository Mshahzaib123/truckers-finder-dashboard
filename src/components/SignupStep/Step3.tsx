import React from 'react'
import FormHeading from '../FormHeading/FormHeading'
import Button from '../Button/Button'
import Input from '../Input/Input'
import SecondaryButton from '../Button/SecondaryButton'
import styled from 'styled-components'
import tw from 'twin.macro'
import CustomSelect2 from '../CustomSelect2/CustomSelect2'

const InputLabel = styled.label(() => [
    tw`text-[14px] leading-[18px] text-textcolor1`,
])
const CustomInput = styled.input(() => [
    tw`text-[16px] leading-[18px] text-textcolor1 py-[19px] px-[16px] border-[1px] border-border-bordercolor rounded-r-8`,
])

function Step3({ handleStep }: { handleStep: (step: number) => void }) {
    return (
        <div className="personal_step w-[100%] h-[100%] px-[40px] py-[56px]">
            <div className="content_otr mb-[48px]">
                <FormHeading HeadingText="Let us know you" />
                <p className="create_desc text-[18px] leading-[20px] text-textcolor1 mt-[16px] mb-[40px]">
                    Please enter your personal information
                </p>
            </div>
            <form className="form_otr flex flex-col gap-[24px] justify-between">
                <div className="form_inputs_otr">
                    <div className="input_main flex gap-[16px]">
                        <Input
                            InputClass=""
                            LableClass=""
                            LabelFor="fname"
                            LabelText="First name"
                            InputName="fname"
                            InputType="text"
                            InputPlaceholder="John"
                        />
                        <Input
                            InputClass=""
                            LableClass=""
                            LabelFor="lname"
                            LabelText="Last name"
                            InputName="lname"
                            InputType="text"
                            InputPlaceholder="Doe"
                        />
                    </div>
                    <div className="select_input flex flex-col gap-[8px] mb-[24px]">
                        <InputLabel htmlFor="number">Phone number</InputLabel>
                        <div className="select_input_inr flex">
                            <CustomSelect2 headerClass="" />
                            <CustomInput
                                className="theme_input"
                                name="number"
                                type="text"
                                placeholder="+1 (000) 000-0000"
                            />
                        </div>
                    </div>
                    <Input
                        InputClass=""
                        LableClass=""
                        LabelFor="bname"
                        LabelText="Business name"
                        InputName="bname"
                        InputType="text"
                        InputPlaceholder="SVG Logistics"
                    />
                    <Input
                        InputClass=""
                        LableClass=""
                        LabelFor="baddress"
                        LabelText="Business address"
                        InputName="baddress"
                        InputType="text"
                        InputPlaceholder="123 Northlane road, Los Angeles, CA"
                    />
                </div>
                <div className="action_otr flex items-center justify-end gap-[16px]">
                    <SecondaryButton ButtonText="Back" />
                    <Button buttonClass="" color='primary' ButtonText="Next" onClick={() => handleStep(4)} />
                </div>
            </form>
        </div>
    )
}

export default Step3
