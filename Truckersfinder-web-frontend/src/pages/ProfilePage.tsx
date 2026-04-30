import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PageHeading from '../components/PageHeading/PageHeading'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import Input from '../components/Input/Input'
import RadioBtn from '../components/RadioBtn/RadioBtn'
import Button from '../components/Button/Button'
import Checkbox from '../components/Checkbox/Checkbox'
import { Link } from 'react-router-dom'
import ProfileImg from '../images/profile-img.png'
import CancelIcon from '../images/cancel-icon.svg'
import ImgUploader from '../components/ImgUploader/ImgUploader'
import tw from 'twin.macro'
import BorderButton from '../components/Button/BorderButton'

export const PagContentWrapper = styled.div.attrs({
    className: 'profile_content_inr p-[24px] bg-white rounded-16',
})``
export const InputsWrapper = styled.div.attrs({
    className: 'input_main flex gap-[16px] flex-wrap',
})``
const ProfilePageMain = styled.div`
    ${tw``}
    .input_main {
        width: 70%;
        @media (max-width: 1100px) {
            width: 100%;
        }
    }
    .inpuy_otr {
        width: calc(50% - 12px);
    }
`
const InputsWrapperRadio = styled.div`
    ${tw`rounded-8 border p-[24px]`}
    ${css`
        border-radius: 8px;
        border: 1px solid #dcdcdc;
    `}
    input_main
`
const Label = styled.p`
    ${tw`text-textcolor1 text-[16px] leading-[18px] font-semibold mb-[24px]`}
`
export const InfoWrapper = styled.div.attrs({
    className: 'flex flex-col gap-[16px]',
})``
const ProfilePage = () => {
    const [strip, setStrip] = useState(false)

    const ToggleStrip = (type: string) => {
        console.log(type.includes('on'))
        if (type.includes('on')) {
            setStrip(true)
        } else {
            setStrip(false)
        }
    }
    return (
        <ProfilePageMain className="profile_page p-6">
            <PageHeading HeadingWrapperClass="" HeadingText="Profile" />
            <div className="profile_content flex gap-[24px]">
                <div className="profile_content_otr flex-1">
                    <PagContentWrapper className="profile_content_inr mb-[40px]">
                        <div className="general_info flex flex-col gap-[24px]">
                            <SectionHeading HeadingText="General info" />
                            <InfoWrapper>
                                <InputsWrapper>
                                    <Input
                                        InputClass=""
                                        LableClass=""
                                        LabelFor="name"
                                        LabelText="First name"
                                        InputName="name"
                                        InputType="name"
                                        InputPlaceholder="Azuka"
                                    />
                                    <Input
                                        InputClass=""
                                        LableClass=""
                                        LabelFor="lname"
                                        LabelText="Last name"
                                        InputName="lname"
                                        InputType="lname"
                                        InputPlaceholder="Omesiete"
                                    />
                                </InputsWrapper>
                                <InputsWrapper>
                                    <Input
                                        InputClass=""
                                        LableClass=""
                                        LabelFor="bname"
                                        LabelText="Business Name"
                                        InputName="bname"
                                        InputType="bname"
                                        InputPlaceholder="lvb logistics llc"
                                    />
                                    <Input
                                        InputClass=""
                                        LableClass=""
                                        LabelFor="baddress"
                                        LabelText="Business Address"
                                        InputName="baddress"
                                        InputType="baddress"
                                        InputPlaceholder="13001 emmett rd"
                                    />
                                </InputsWrapper>
                                <InputsWrapper>
                                    <Input
                                        InputClass=""
                                        LableClass=""
                                        LabelFor="email"
                                        LabelText="Email"
                                        InputName="email"
                                        InputType="email"
                                        InputPlaceholder="interverify@gmail.com"
                                    />
                                    <Input
                                        InputClass=""
                                        LableClass=""
                                        LabelFor="number"
                                        LabelText="Phone"
                                        InputName="number"
                                        InputType="number"
                                        InputPlaceholder="2813463411"
                                    />
                                </InputsWrapper>
                                <InputsWrapper>
                                    <Input
                                        InputClass=""
                                        LableClass=""
                                        LabelFor="password"
                                        LabelText="Password"
                                        InputName="password"
                                        InputType="password"
                                        InputPlaceholder="**********"
                                    />
                                </InputsWrapper>
                            </InfoWrapper>
                        </div>
                        <div className="payout_info flex flex-col items-start pt-[32px] pb-[16px] mt-[32px] border-t-[1px] border-border-bordercolor">
                            <SectionHeading HeadingText="Pay outs" />
                            <p className="pay_desc text-[14px] leading-[16px] my-[8px] text-textcolor2">
                                All payouts will Incure a 5.00% service fee in
                                addition to credit card processing fees
                            </p>
                            <InputsWrapperRadio className="">
                                <Label>Stripe Connect</Label>
                                <div className="flex lg:flex-col gap-[16px]">
                                    <div className="payradio_otr bg-bgShade3 w-auto rounded-8">
                                        <RadioBtn
                                            CheckText="Turn on Stripe Connect"
                                            Groupname="Pay"
                                        />
                                    </div>
                                    <div className="payradio_otr bg-bgShade3 w-auto rounded-8">
                                        <RadioBtn
                                            CheckText="Turn off"
                                            Groupname="Pay"
                                        />
                                    </div>
                                </div>
                                <div className="check_box_otr my-[16px]">
                                    <Checkbox
                                        CheckBoxText="I accept "
                                        Linkk1="/terms"
                                        LinkkText="Terms and Conditions"
                                        Linkk2=""
                                        LinkkText2=""
                                    />
                                </div>
                                <button className="update_button font-semibold text-[14px] leading-[16px] text-primarycolor hover:text-light bg-transparent hover:bg-dark border-[1px] border-primarycolor hover:border-transparent py-[12px] px-[24px] rounded-8 duration-[.3s]">
                                    Update Stripe Connect
                                </button>
                            </InputsWrapperRadio>
                        </div>
                    </PagContentWrapper>
                    <div className="flex justify-between">
                        <Button
                            buttonClass=""
                            color="primary"
                            ButtonText="Update"
                        />
                        <Link
                            to="/manage-people"
                            className=" font-semibold text-[14px] leading-[16px] text-primarycolor hover:text-light bg-transparent hover:bg-dark border-[1px] border-primarycolor hover:border-transparent py-[12px] px-[24px] rounded-8 duration-[.3s]"
                        >
                            Manage people
                        </Link>
                    </div>
                </div>
                <div className="profile_sidebar w-[328px]">
                    <PagContentWrapper className="profile_otr mb-[24px] flex flex-col gap-[24px]">
                        <SectionHeading HeadingText="Profile photo" />
                        <img
                            className="profile_img w-[100%] h-[280px] rounded-10"
                            src={ProfileImg}
                            alt="img"
                        />
                        <div className="action_otr flex items-center gap-[16px]">
                            <div className="img_uploader">
                                <ImgUploader buttonText="Change photo" />
                            </div>
                            <p className="upload_format text-[10px] leading-[15px] text-textcolor5">
                                Supported formats: <br /> JPG, JPEG, PNG
                            </p>
                        </div>
                    </PagContentWrapper>
                    <PagContentWrapper className="subscription_otr flex flex-col gap-[24px]">
                        <SectionHeading HeadingText="Subscription plan" />
                        <div className="bank_data_otr flex flex-col gap-[12px] bg-bgShade4 p-[20px] rounded-20">
                            <p className="data_text text-[16px] text-dark leading-[18px] font-semibold">
                                Carriers Data Bank
                            </p>
                            <p className="data_price text-[24px] text-dark leading-[28px] font-semibold">
                                $89.00
                            </p>
                        </div>
                        <Link
                            to=""
                            className="cancle_text flex items-center gap-[8px]"
                        >
                            <img
                                className="cancel_icon"
                                src={CancelIcon}
                                alt="icon"
                            />
                            <span className="text-primarycolor text-[16px] leading-[18px] underline">
                                Cancel Renewal
                            </span>
                        </Link>
                    </PagContentWrapper>
                </div>
            </div>
        </ProfilePageMain>
    )
}

export default ProfilePage
