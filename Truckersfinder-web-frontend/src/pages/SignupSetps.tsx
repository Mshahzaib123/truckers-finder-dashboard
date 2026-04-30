import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'
import SignupStepComp from '../components/SignupStep/SignupStepComp'

import LogoImg from '../images/brand-logo.png'
import SignupImg from '../images/signup-img.png'
import Step1 from '../components/SignupStep/Step1'
import Step2 from '../components/SignupStep/Step2'
import Step3 from '../components/SignupStep/Step3'
import Step4 from '../components/SignupStep/Step4'

const SignupStepWrapper = styled.div.attrs({
    className: 'signup_steps p-[10px] w-[100%] h-[100vh]',
})``
const SignupStepWrapperInr = styled.div`
    ${tw `h-[calc(100vh - 206px)] xlg:h-[calc(100vh - 224px)] lg:h-[calc(100vh - 232px)]`}
    display: grid;
    align-items: center;
    overflow-y: auto;
`
const BrandLogo = styled.img.attrs({
    className: 'logo_img w-[auto] h-[70px] object-contain object-center',
})``
const SignImg = styled.img.attrs({
    className:
        'steps_img w-[100%] right-[10px] object-cover object-center rounded-[24px]',
})``
function SignupSetps() {
    const [step, setStep] = React.useState(1)

    const handleStep = (step: number) => {
        setStep(step)
    }

    return (
        <SignupStepWrapper className="signup_steps flex gap-[20px]">
            <div className="steps_wrapper w-[65%]">
                <SignupStepComp />
                <SignupStepWrapperInr className="seteps_wrapper_inr">
                    {step === 1 && <Step1 handleStep={handleStep} />}
                    {step === 2 && <Step2 handleStep={handleStep} />}
                    {step === 3 && <Step3 handleStep={handleStep} />}
                    {step === 4 && <Step4 handleStep={handleStep} />}
                </SignupStepWrapperInr>
            </div>
            <div className="img_otr w-[35%] relative">
                <Link
                    to="/"
                    className="logo_otr absolute top-[30px] left-[50%] z-[2] flex items-center justify-center"
                >
                    <BrandLogo className="log_img" src={LogoImg} alt="logo" />
                </Link>
                <SignImg src={SignupImg} alt="img" />
            </div>
        </SignupStepWrapper>
    )
}

export default SignupSetps
