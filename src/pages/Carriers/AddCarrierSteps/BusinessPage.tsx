import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Button from '../../../components/Button/Button'
import tw from 'twin.macro'
import PageHeading from '../../../components/PageHeading/PageHeading'
import Input from '../../../components/Input/Input'
import Select from '../../../components/Select'
import { ReactComponent as File } from '../../../images/file-icon.svg'

import FileInput from '../../../components/Input/customFileInput'
import InnPhoneInput from '../../../components/Input/InnPhoneInput'
const OuterCard = styled.div`
    ${tw` p-[24px] bg-white rounded-16 sm:min-w-[100%]`}
`
const InputGroup = styled.div`
    ${tw` my-5 gap-12 sm:flex-col flex  md:flex-col lg:flex-row xl:flex-row `}

`
const BottomButton = styled.div`
    ${tw`w-[100%] flex justify-end my-4 h-[7%]`}
`

const FindMeButtonStyle = styled.div`
    ${tw`rounded-xl bg-[#D0C5FF] text-[#38008F] p-2 px-4 text-[12px] cursor-pointer `}
`
const SelectInput = styled.div`
    ${css`
        width: calc(25% - 12px);
        min-width:200px;
    `}
`
function FindMeButton() {
    return <FindMeButtonStyle>Find Me</FindMeButtonStyle>
}

function BusinessInformation({
    handleStep,
}: {
    handleStep: (step: number) => void
}) {
    const statesOptions = [
        { label: 'Gujrat', value: 'Guj' },
        { label: 'JPJ', value: 'JPJ' },
    ]
    const [phone, setPhone] = useState('')

    const [, setSelectedState] = useState({
        label: 'Gujrat',
        value: 'Guj',
    })
    const handleChange = (e: any) => {}
    return (
        <>
            <div className="flex flex-col w-[100%] h-[100%] businessPage">
                <OuterCard>
                    <PageHeading HeadingText="MC No" />
                    <p>
                        After entering th MC No. all the inputs will be filled.
                        <br />
                        You are also free to fill them manually.
                    </p>

                    <InputGroup>
                        <Input
                            InputPlaceholder={'Enter MC  No.'}
                            LabelFor={'MC  No.'}
                            LabelText={'MC  No.'}
                            InputName={'MC  No.'}
                            InputType={'text'}
                            PostContent={<FindMeButton />}
                        />
                        <FileInput
                            LabelFor={'MC-Certificate'}
                            LabelText={'MC-Certificate'}
                            InputName={'MCCertificate'}
                            PostContent={<File />}
                            onFileChange={handleChange}
                        />
                        <FileInput
                            LabelFor={'WD'}
                            LabelText={'W-9'}
                            InputName={'WD'}
                            PostContent={<File />}
                            onFileChange={handleChange}
                        />
                    </InputGroup>

                    <hr className="my-8" />
                    <PageHeading HeadingText="Main Information" />
                    <InputGroup>
                        <Input
                            InputPlaceholder={'Enter USDOT'}
                            LabelFor={'USDOT'}
                            LabelText={'USDOT'}
                            InputName={'USDOT'}
                            InputType={'text'}
                        />
                        <Input
                            InputPlaceholder={'Enter Name'}
                            LabelFor={'Business-Name'}
                            LabelText={'Business Name'}
                            InputName={'BusinessName'}
                            InputType={'text'}
                        />
                        <Input
                            InputPlaceholder={'Enter owner name'}
                            LabelFor={'Owner-Name'}
                            LabelText={'MC  No.'}
                            InputName={'OwnerName'}
                            InputType={'text'}
                        />
                    </InputGroup>
                    <hr className="my-8" />

                    <PageHeading HeadingText="Contacts" />
                    <InputGroup>
                        <Input
                            InputPlaceholder={'Enter the Carrier email'}
                            LabelFor={'email'}
                            LabelText={'Email'}
                            InputName={'email'}
                            InputType={'email'}
                        />
                        <InnPhoneInput value={phone} onChange={setPhone} />
                    </InputGroup>
                    <InputGroup>
                        <Input
                            InputPlaceholder={'Enter street, house, apt. etc.'}
                            LabelFor={'address'}
                            LabelText={'Street & House'}
                            InputName={'address'}
                            InputType={'text'}
                        />
                        <Input
                            InputPlaceholder={'Phone City'}
                            LabelFor={'City'}
                            LabelText={'City'}
                            InputName={'City'}
                            InputType={'text'}
                        />
                    </InputGroup>
                    <InputGroup>
                        <SelectInput className='selectInput'>
                            <Select
                                options={statesOptions}
                                placeholder={'Enter State'}
                                label={'State'}
                                onChange={(val) => setSelectedState(val)}
                            />
                        </SelectInput>
                        <Input
                            InputPlaceholder={'Phone ZIP'}
                            LabelFor={'ZIP-code'}
                            LabelText={'ZIP code'}
                            InputName={'ZIP'}
                            InputType={'text'}
                        />
                    </InputGroup>
                </OuterCard>
                <BottomButton>
                    <Button
                        ButtonText="NEXT"
                        color="primary"
                        onClick={() => handleStep(2)}
                    />
                </BottomButton>
            </div>
        </>
    )
}

export default BusinessInformation
