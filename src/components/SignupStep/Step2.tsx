import React from 'react'
import FormHeading from '../FormHeading/FormHeading'
import Button from '../Button/Button'
import Input from '../Input/Input'

import EyeIcon from '../../images/eye-icon.svg'

function Step2({ handleStep }: { handleStep: (step: number) => void }) {
    return (
        <div className="create_step w-[100%] h-[100%] px-[40px] py-[56px]">
            <div className="content_otr mb-[48px]">
                <FormHeading HeadingText="Create a password" />
                <p className="create_desc text-[18px] leading-[20px] text-textcolor1 mt-[16px] mb-[40px]">
                    Create a password containing not less than 8 letters and at
                    least 1 number
                </p>
            </div>
            <form className="form_otr flex flex-col justify-between gap-[24px]">
                <div className="input_main">
                    <div className="icon_input relative">
                        <img
                            className="eye_icon absolute cursor-pointer right-[16px] bottom-[18px] w-[20xp] h-[20px] object-contain object-center"
                            src={EyeIcon}
                            alt="icon"
                        />
                        <Input
                            InputClass=""
                            LableClass=""
                            LabelFor="createpassword"
                            LabelText="Create a password"
                            InputName="createpassword"
                            InputType="text"
                            InputPlaceholder="Enter your password"
                        />
                    </div>
                    <div className="icon_input relative">
                        <img
                            className="eye_icon absolute cursor-pointer right-[16px] bottom-[18px] w-[20xp] h-[20px] object-contain object-center"
                            src={EyeIcon}
                            alt="icon"
                        />
                        <Input
                            InputClass=""
                            LableClass=""
                            LabelFor="confirmpassword"
                            LabelText="Confirm password"
                            InputName="confirmpassword"
                            InputType="text"
                            InputPlaceholder="Repeat the password"
                        />
                    </div>
                </div>
                <div className="action_otr flex items-center justify-end">
                    <Button buttonClass="" color='primary' ButtonText="Next" onClick={() => handleStep(3)} />
                </div>
            </form>
        </div>
    )
}

export default Step2
