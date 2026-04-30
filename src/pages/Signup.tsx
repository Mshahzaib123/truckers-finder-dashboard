import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import FormHeading from '../components/FormHeading/FormHeading'
import Input from '../components/Input/Input'
import Checkbox from '../components/Checkbox/Checkbox'
import Button from '../components/Button/Button'

import SignupImg from '../images/signup-img.png'
import LogoImg from '../images/brand-logo2.png'
import SocialIcon1 from '../images/facebook-icon.svg'
import SocialIcon2 from '../images/google-icon.svg'
import SocialIcon3 from '../images/apple-icon.svg'

const SignupWrapper = styled.div.attrs({
    className: 'signup_page bg-bgShade5 relative p-[10px] w-[100%] h-[100vh]',
})``
const SignupWrapperInr = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    height: calc(100vh - 20px);
    overflow-y: auto;
    z-index: 2;
    .signup_form {
        .input_otr {
            margin-bottom: 8px;
        }
        .checkbox_forgot {
            .checkbox {
                margin: 0 0 24px 0;
            }
        }
    }
`
const FormWrapper = styled.div.attrs({
    className:
        'form_inr bg-light p-[40px] w-[55%] ml-[90px] 3xl:ml-[40px] my-[40px] rounded-20 z-[2]',
})``
const SignImg = styled.img.attrs({
    className:
        'signup_img absolute w-[50%] right-[10px] object-cover object-center rounded-[24px]',
})``
const BrandLogo = styled.img.attrs({
    className: 'logo_img w-[auto] h-[70px] object-contain object-center',
})``
function Signup() {
    const navigate = useNavigate()
    return (
        <SignupWrapper>
            <SignImg src={SignupImg} alt="img" />
            <SignupWrapperInr className="form_otr">
                <FormWrapper>
                    <Link
                        to="/"
                        className="logo_otr flex items-center justify-center"
                    >
                        <BrandLogo src={LogoImg} alt="logo" />
                    </Link>
                    <form className="signup_form mt-[56px] mb-[90px]">
                        <FormHeading HeadingText="Sign Up" />
                        <Input
                            InputClass=""
                            LableClass=""
                            LabelFor="email"
                            LabelText="Email address"
                            InputName="email"
                            InputType="text"
                            InputPlaceholder="helloworld@gmail.com"
                        />
                        <Checkbox
                            CheckBoxText="I've read and agree with and "
                            Linkk1="/terms"
                            LinkkText="Terms of Service "
                            Linkk2="/privacy"
                            LinkkText2="our Privacy Police"
                        />
                        <Button
                            buttonClass=""
                            color="primary"
                            ButtonText="Sign Up"
                        />
                    </form>
                    <p className="already_text text-center text-[14px] leading-[18px] font-normal text-textcolor3">
                        Already have an account?{' '}
                        <Link
                            to="/auth/login"
                            className="linkk_text font-medium inline text-primarycolor"
                        >
                            Log in
                        </Link>
                    </p>
                </FormWrapper>
            </SignupWrapperInr>
        </SignupWrapper>
    )
}

export default Signup
