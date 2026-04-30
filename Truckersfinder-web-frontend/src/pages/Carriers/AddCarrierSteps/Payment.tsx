import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button/Button'
import tw from 'twin.macro'
import { ReactComponent as Visa } from '../../../images/visa.svg';

import Input from '../../../components/Input/Input'
import 'react-international-phone/style.css'
import BorderButton from '../../../components/Button/BorderButton'

const OuterCard = styled.div`
    ${tw` p-[24px] bg-white rounded-16 min-w-[320px] md:min-w-[100%]`}
`
const InputGroup = styled.div`
    ${tw`flex w-[100%]  gap-3`}
`
const BottomButton = styled.div`
    ${tw`w-[100%] flex justify-end my-4 h-[7%] gap-4`}
`

const LargeHeading = styled.h1`
    ${tw`text-[20px] font-bold`}
`
const SmallHeading = styled.h2`
    ${tw`text-[16px] font-bold mt-7`}
`

const RoundCard=styled.div`
${tw `flex p-5 gap-4 border border-[#EAECF0] md:min-w-[300px] md:flex-col  w-[30%] lg:w-[75%] xl:w-[50%] 2xl:w-[40%] rounded-lg my-5`}
`

const ColumnDiv=styled.div`
${tw `flex flex-col gap-7 w-[100%]`}
` 

const Paragraph=styled.p`
${tw `my-3`}
`

function Payment({ handleStep }: { handleStep: (step: number) => void }) {
    const [phone,setPhone]=useState("")
    return (
        <>
            <div className="flex flex-col w-[100%] h-[100%] PaymentPage">
                <OuterCard>
                    <LargeHeading>Payment</LargeHeading>
                    <SmallHeading>Credit card</SmallHeading>

                   <RoundCard className='Card'>
                    <Visa/>
                    <ColumnDiv>
                    <InputGroup>
                        <Input
                            InputPlaceholder={'1234 1234 1234 1234'}
                            LabelFor={'Card number'}
                            LabelText={'Card number'}
                            InputName={'Card number'}
                            InputType={'text'}
                            
                        />
                    </InputGroup>

                    <InputGroup>
                        <Input
                            InputPlaceholder={'Enter email'}
                            LabelFor={'Expiry date'}
                            LabelText={'Expiry date'}
                            InputName={'ExpiryDate'}
                            InputType={'text'}
                            CustomWidth='123px'
                            
                        />
                          <Input
                            InputPlaceholder={'000'}
                            LabelFor={'CVV'}
                            LabelText={'CVV'}
                            InputName={'CVV'}
                            InputType={'text'}
                            CustomWidth='123px'
                            
                        />
                    </InputGroup>
                    </ColumnDiv>
                   </RoundCard>
<Paragraph>Your card will not be charged unless a load is successfully dispatched for you</Paragraph>

<SmallHeading>ACH/eCheck</SmallHeading>

<RoundCard className='Card'>
    <ColumnDiv>
<InputGroup>
    <Input
    InputPlaceholder={'000000000'}
    LabelFor={'Routing Number'}
    LabelText={'Routing Number'}
    InputName={'RoutingNumber'}
    InputType={'text'}

    />
    </InputGroup>
    <InputGroup>
    <Input
    InputPlaceholder={'00000000000'}
    LabelFor={'Account number'}
    LabelText={'Account number'}
    InputName={'AccountNumber'}
    InputType={'text'}

    />
    </InputGroup>
    </ColumnDiv>

</RoundCard>




               

                </OuterCard>
                <BottomButton>
                    <BorderButton ButtonText="Previous" onClick={() => handleStep(4)} />
                    <Button ButtonText="Save" color="primary" onClick={() => handleStep(5)} />
                </BottomButton>
            </div>
        </>
    )
}

export default Payment
