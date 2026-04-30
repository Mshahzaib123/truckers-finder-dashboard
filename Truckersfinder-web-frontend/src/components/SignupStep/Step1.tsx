import React from 'react'
import styled from 'styled-components'
import FormHeading from '../FormHeading/FormHeading'

import EmailImg from '../../images/mail-img.png'
import Button from '../Button/Button'
import BorderButton from '../Button/BorderButton'

const MailImg = styled.img.attrs({
    className: 'mail_img w-[220px] h-[220px] object-contain object-center',
})``
function Step1({ handleStep }: { handleStep: (step: number) => void }) {
    return (
        <div className="Email_step w-[100%] px-[40px] py-[56px]">
            <div className="img_otr flex items-center justify-center">
                <MailImg src={EmailImg} alt="img" />
            </div>
            <div className="content_otr text-center">
                <FormHeading HeadingText="Please confirm your e-mail" />
                <p className="email_desc text-[18px] leading-[20px] text-textcolor1 mt-[16px] mb-[40px]">
                    We sent you e-mail for confirmation. Please check your inbox
                    on example@gmail.com
                </p>
                <div className="actions_otr flex gap-[16px]">
                    <Button
                        buttonClass=""
                        color='primary'
                        ButtonText="Send again"
                        onClick={() => handleStep(2)}
                    />
                    <BorderButton ButtonText="Change e-mail" onClick={()=>{}} />
                </div>
            </div>
        </div>
    )
}

export default Step1
