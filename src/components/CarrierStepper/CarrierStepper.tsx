import React from 'react'
import styled from 'styled-components'

import CheckIcon from '../../images/Tick.svg'

const StepsWrapper = styled.div.attrs({
  className: "CarrierStepComp_main p-[40px] w-[100%] my-10 relative flex rounded-20"
})``;
const StepOtr = styled.div.attrs({
  className: "step_otr flex flex-col gap-[16px] w-[25%]"
})``;
const StepCircle = styled.div.attrs({
  className: "step_circle relative flex items-center justify-center bg-bgShade7 w-[32px] h-[32px] rounded-[100%]"
})``;
const StepCircleInr = styled.span.attrs({
  className: "circle_inr absolute top-[50%] left-[50%] bg-bgShade6 w-[10px] h-[10px] rounded-[100%]"
})``;
const CheckImg = styled.img.attrs({
  className: "check_icon w-[16px] h-[16px] object-contain object-center hidden"
})``;

type Props={
  curStep:number
}
function CarrierStepComp({ curStep }: Props) {
  const steps = [
    "Business information",
    "Preferences",
    "Equipment",
    "Factoring",
    "Payment",
  ];
    return (
      <StepsWrapper>
      <span className="carrierSteps_line absolute left-[40px] top-[56px] h-[2px] bg-bgShade7"></span>
      {steps.map((step, index) => (
        <StepOtr
          key={`step${index + 1}`}
          className={`${
            curStep > index + 1 ? "complete_step" : ""
          } ${curStep === index + 1 ? "active_step" : ""}`}
        >
          <StepCircle>
            <StepCircleInr />
            <CheckImg src={CheckIcon} alt="check" />
          </StepCircle>
          <div className="step_content flex flex-col gap-[4px]">
            <p className="step_heading text-[16px] leading-[18px] text-dark font-medium">
              {step}
            </p>
          </div>
        </StepOtr>
      ))}
    </StepsWrapper>
    )
}

export default CarrierStepComp