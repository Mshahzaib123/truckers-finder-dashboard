import React from 'react'
import styled from 'styled-components'

import CheckIcon from '../../images/check-icon2.svg'

const StepsWrapper = styled.div.attrs({
  className: "SignupStepComp_main p-[40px] w-[100%] relative flex gap-[12px] bg-bgShade4 rounded-20"
})``;
const StepOtr = styled.div.attrs({
  className: "step_otr flex flex-col gap-[16px] w-[25%]"
})``;
const StepCircle = styled.div.attrs({
  className: "step_circle relative flex items-center justify-center bg-light w-[32px] h-[32px] rounded-[100%]"
})``;
const StepCircleInr = styled.span.attrs({
  className: "circle_inr absolute top-[50%] left-[50%] bg-bgShade6 w-[10px] h-[10px] rounded-[100%]"
})``;
const CheckImg = styled.img.attrs({
  className: "check_icon w-[16px] h-[16px] object-contain object-center hidden"
})``;
function SignupStepComp() {
    return (
      <StepsWrapper>
        <span className='steps_line absolute left-[60px] top-[56px] h-[2px] bg-light'></span>
        <StepOtr className='complete_step'>
          <StepCircle>
            <StepCircleInr/>
            <CheckImg src={CheckIcon} alt="check" />
          </StepCircle>
          <div className="step_content flex flex-col gap-[4px]">
            <p className='step_heading text-[16px] leading-[18px] text-dark font-medium'>
              Confirm your e-mail
            </p>
            <p className='step_desc text-[16px] leading-[18px] text-textcolor2 font-medium'>
              Please provide your name and email
            </p>
          </div>
        </StepOtr>
        <StepOtr className='active_step'>
          <StepCircle>
            <StepCircleInr/>
            <CheckImg src={CheckIcon} alt="check" />
          </StepCircle>
          <div className="step_content flex flex-col gap-[4px]">
            <p className='step_heading text-[16px] leading-[18px] text-dark font-medium'>
              Create a password
            </p>
            <p className='step_desc text-[16px] leading-[18px] text-textcolor2 font-medium'>
              Create a strong password
            </p>
          </div>
        </StepOtr>
        <StepOtr>
          <StepCircle>
            <StepCircleInr/>
            <CheckImg src={CheckIcon} alt="check" />
          </StepCircle>
          <div className="step_content flex flex-col gap-[4px]">
            <p className='step_heading text-[16px] leading-[18px] text-dark font-medium'>
              Personal information
            </p>
            <p className='step_desc text-[16px] leading-[18px] text-textcolor2 font-medium'>
              Please provide your name and details
            </p>
          </div>
        </StepOtr>
        <StepOtr>
          <StepCircle>
            <StepCircleInr/>
            <CheckImg src={CheckIcon} alt="check" />
          </StepCircle>
          <div className="step_content flex flex-col gap-[4px]">
            <p className='step_heading text-[16px] leading-[18px] text-dark font-medium'>
              Subscription plan
            </p>
            <p className='step_desc text-[16px] leading-[18px] text-textcolor2 font-medium'>
              Select the subscription plan that suits you
            </p>
          </div>
        </StepOtr>
      </StepsWrapper>
    )
}

export default SignupStepComp