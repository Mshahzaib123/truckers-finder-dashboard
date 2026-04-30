import React from 'react'
import { ReactComponent as Location } from '../../images/location.svg'
import { ReactComponent as Invite } from '../../images/invite.svg'
import Button from '../../components/Button/Button'
import styled from 'styled-components'
import tw from 'twin.macro'
import ClaimCarrier from './ClaimCarrier'
import CarrierStepComp from '../../components/CarrierStepper/CarrierStepper'
import BusinessInformation from './AddCarrierSteps/BusinessPage'
import Preferences from './AddCarrierSteps/Preferences'
import Equipment from './AddCarrierSteps/Equipment'
import Factoring from './AddCarrierSteps/Factoring'
import Payment from './AddCarrierSteps/Payment'

const CarrierStepWrapper = styled.div.attrs({
    className: 'carrier_steps p-[10px] w-[100%] h-[100vh] mb-8 min-w-full',
})``

const Heading = styled.span`
    ${tw`text-2xl font-semibold leading-normal mb-[22px] block`}
`
const PageTop = styled.div`
    ${tw`flex justify-between`}
`

const AddCarrier = () => {
    const [step, setStep] = React.useState(1)

    const handleStep = (step: number) => {
        setStep(step)
    }
    return (
        <main className="p-6">
            <CarrierStepWrapper>
                <PageTop>
                    <Heading>Add Carrier</Heading>
                    <Button
                        ButtonText="Invite"
                        color="primary"
                        icon={<Invite />}
                    />
                </PageTop>
                <CarrierStepComp curStep={step} />
                <div className="seteps_wrapper_inr flex items-center">
                    {step === 1 && (
                        <BusinessInformation handleStep={handleStep} />
                    )}
                    {step === 2 && <Preferences handleStep={handleStep} />}
                    {step === 3 && <Equipment handleStep={handleStep} />}
                    {step === 4 && <Factoring handleStep={handleStep} />}
                    {step === 5 && <Payment handleStep={handleStep} />}
                </div>
            </CarrierStepWrapper>
        </main>
    )
}

export default AddCarrier
