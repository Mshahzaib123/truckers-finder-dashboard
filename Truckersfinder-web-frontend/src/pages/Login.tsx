import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
function Login() {
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
                    <form className="signup_form mt-[56px] mb-[48px]">
                        <FormHeading HeadingText="Login" />
                        <Input
                            InputClass=""
                            LableClass=""
                            LabelFor="email"
                            LabelText="Email address"
                            InputName="email"
                            InputType="text"
                            InputPlaceholder="helloworld@gmail.com"
                        />
                        <div className="input_otr">
                            <Input
                                InputClass=""
                                LableClass=""
                                LabelFor="password"
                                LabelText="Your Password"
                                InputName="password"
                                InputType="password"
                                InputPlaceholder="*********"
                            />
                        </div>
                        <div className="checkbox_forgot flex flex-col gap-[8px]">
                            <Link
                                to=""
                                className="text-[14px] leading-[17px] text-right font-semibold text-primarycolor"
                            >
                                Forgot password
                            </Link>
                            <Checkbox
                                Linkk1=""
                                LinkkText=""
                                Linkk2=""
                                LinkkText2=""
                                CheckBoxText="Remember Me"
                            />
                        </div>
                        <Button
                            buttonClass=""
                            color="primary"
                            ButtonText="Login"
                        />
                    </form>
                    <p className="already_text text-center text-[14px] leading-[18px] font-normal text-textcolor3">
                        Dont have an account?{' '}
                        <Link
                            to="/auth/signup"
                            className="linkk_text font-medium inline text-primarycolor"
                        >
                            Sign Up
                        </Link>
                    </p>
                </FormWrapper>
            </SignupWrapperInr>
        </SignupWrapper>
    )
}

export default Login
