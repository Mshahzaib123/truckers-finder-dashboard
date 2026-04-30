import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button/Button'
import tw from 'twin.macro'
import Input from '../../../components/Input/Input'
import 'react-international-phone/style.css'
import RadioBtn from '../../../components/RadioBtn/RadioBtn'
import BorderButton from '../../../components/Button/BorderButton'
import InnPhoneInput from '../../../components/Input/InnPhoneInput'

const OuterCard = styled.div`
    ${tw` p-[24px] bg-white rounded-16 min-w-[350px]`}
`
const InputGroup = styled.div`
    ${tw`my-8 gap-12 sm:flex-col flex  md:flex-col  lg:flex-row xl:flex-row `}
`
const InputGroupRadio = styled.div`
    ${tw`my-8 gap-12 sm:flex-col flex  md:flex-row  lg:flex-row xl:flex-row `}
`

const BottomButton = styled.div`
    ${tw`w-[100%] flex justify-end my-4 h-[7%] gap-4`}
`

const LargeHeading = styled.h1`
    ${tw`text-[20px] font-bold`}
`

function Factoring({ handleStep }: { handleStep: (step: number) => void }) {
    const [phone,setPhone]=useState("")
    return (
        <>
            <div className="flex flex-col w-[100%] h-[100%] FactoringPage">
                <OuterCard>
                    <LargeHeading>Factoring</LargeHeading>
                    <InputGroupRadio>
                        <RadioBtn CheckText="Yes" Groupname="Factoring" />
                        <RadioBtn CheckText="No" Groupname="Factoring" />
                    </InputGroupRadio>
                    <InputGroup>
                        <Input
                            InputPlaceholder={'Enter factoring company'}
                            LabelFor={'Factoring company'}
                            LabelText={'Factoring company'}
                            InputName={'FactoringCompany'}
                            InputType={'text'}
                            
                        />
                        <InnPhoneInput value={phone} onChange={setPhone} />
                    </InputGroup>
                    <InputGroup>
                        <Input
                            InputPlaceholder={'Enter email'}
                            LabelFor={'Email'}
                            LabelText={'Email'}
                            InputName={'Email'}
                            InputType={'email'}
                            
                        />
                          <Input
                            InputPlaceholder={'Enter address'}
                            LabelFor={'Address'}
                            LabelText={'Address'}
                            InputName={'address'}
                            InputType={'text'}
                            
                        />
                    </InputGroup>

                </OuterCard>
                <BottomButton>
                    <BorderButton ButtonText="Previous" onClick={() => handleStep(3)} />
                    <Button ButtonText="NEXT" color="primary" onClick={() => handleStep(5)} />
                </BottomButton>
            </div>
        </>
    )
}

export default Factoring
