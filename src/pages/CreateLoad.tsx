import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Input from '../components/Input/Input'
import PageHeading from '../components/PageHeading/PageHeading'
import Button from '../components/Button/Button'
import Calendar from '../components/Calendar'
import CustomSelect from '../components/Select'
import CustomSelect2 from '../components/CustomSelect2/CustomSelect2'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import TimePicker from '../components/TimePicker/TimePicker'
import CustomImgUploader from '../components/CustomImgUploader/CustomImgUploader'
import CustomUrlUploader from '../components/CustomImgUploader/CustomUrlUploader'

import PlusIcon from '../images/plus-icon.svg'
import SwitchIcon from '../images/switch-icon2.svg'

const CreateLoadPage = styled.div`
    .custom_select2 .select_header{
        padding: 11px 12px;
        height: auto;
        gap: 8px;
        .select_icon{
            margin-left: 0;
            svg{
                width: 20px;
                height: 20px;
            }
        }
    }
    .place_time{
        .custom_time_picker{
            position: absolute;
            right: 1px;
            .time_btn {
                padding: 10px 12px;
            }
        }
    }
    .date_calender_wrapper{
        @media (max-width: 1200px){
            right: 0;
            left: auto;
        }
    }
    .date_picker_comp .date_picker_header{
        width: 100%;
        max-width: 100%;
    }
`
const InputsOtr = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 16px 0 20px 0;
    .theme_input{
        width: 100%;
    }
`
const ContentWrapper = styled.div`
    background-color: #fff;
    padding: 24px;
    border-radius: 16px;
`
const ContentWrapperInr = styled.div`
    background-color: #fff;
    padding: 24px;
    border-radius: 16px;
`
const IconButton = styled.button`
    ${tw`w-[120px]`}
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    padding: 12px 10px 12px 12px;
    color: #38008f;
    background-color: transparet;
    border: 1px solid #38008f;
    border-radius: 8px;
`
const CustomInput = styled.input(({}) => [
    tw`text-[14px] leading-[18px] text-textcolor1 py-[11px] pr-[12px] border-[1px] border-border-bordercolor rounded-r-8`,
])
const InputLabel = styled.label(({}) => [
    tw`text-[12px] leading-[15px] text-textcolor1`,
])
const InputMain = styled.div.attrs({
    className: 'input_main',
})`
    ${tw`w-[50%]`}
`
const InputMain2 = styled.div.attrs({
    className: 'input_main',
})`${tw`w-[50%]`}`
const SelectsMain = styled.div.attrs({
    className: 'inputs_main',
})`${tw`w-[calc(100% - 185px)] xlg:w-[calc(100% - 136px)] lg:w-[100%]`}`

function CreateLoad() {
    const handleTimeChange = (selectedTime: string) => {
        console.log(`Selected time: ${selectedTime}`)
    }
    return (
        <CreateLoadPage className='CreateLoad_page p-[24px]'>
            <PageHeading HeadingWrapperClass="" HeadingText="Create Load" />
            <InputsOtr className="date_no_input !w-[328px]">
                <Input
                    InputClass="!pl-[12px] w-[50%]"
                    LableClass=""
                    LabelFor="no"
                    LabelText="No."
                    InputName="text"
                    InputType="text"
                    InputPlaceholder="LL-148695-UG"
                    PostContent=""
                />
                <Input
                    InputClass="!pl-[12px] w-[50%]"
                    LableClass=""
                    LabelFor="date"
                    LabelText="Date"
                    InputName="text"
                    InputType="text"
                    InputPlaceholder="09/12/2023"
                    PostContent=""
                />
            </InputsOtr>
            <div className="create_content flex gap-[24px] w-[100%] flex-1">
                <ContentWrapper className="w-[328px] h-[max-content]">
                    <SectionHeading HeadingText="Rate confirmation" />
                    <p className="comfirmation_desc text-[12px] mt-[8px] leading-[15px] text-textcolor1 font-medium">
                        After uploading all the inputs will be filled
                    </p>
                    <CustomImgUploader />
                    <CustomUrlUploader />
                </ContentWrapper>
                <div className="create_content_wrapper w-[100%] flex-1">
                    <ContentWrapperInr>
                        <div className="place_time pb-[32px] border-b-[1px] border-border-bordercolor">
                            <SectionHeading HeadingText="Place and Time"/>
                            <div className="date_address_otr flex lg:flex-col items-end lg:items-start gap-[65px] xlg:gap-[16px] mt-[24px] mb-[16px]">
                                <div className="date_address_inr flex items-center gap-[16px] flex-1">
                                    <div className="input_otr w-[50%]">
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass=""
                                            LabelFor="pickaddress"
                                            LabelText="Pick Up Address"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="Enter Address"
                                            PostContent=""
                                        />
                                    </div>
                                    <div className="date_otr w-[50%] relative">
                                        <Calendar
                                            wrapperClass=""
                                            headerClass="date_picker_header"
                                            label="Pick Up Date & Time"
                                        />
                                        <TimePicker
                                            timePickerClass="bottom-[2px] !w-[auto]"
                                            headerText="text-textcolor5 border-none"
                                            LabelFor=""
                                            LabelText=""
                                            onChange={handleTimeChange}
                                        />
                                    </div>
                                </div>
                                <div className="action_otr">
                                    <IconButton className="secondary_btn">
                                        <img
                                            className="plus_icon w-[16px] h-[16px] object-contain object-center"
                                            src={PlusIcon}
                                            alt="icon"
                                        />
                                        <span className="btn_icon">
                                            Add Pick Up
                                        </span>
                                    </IconButton>
                                </div>
                            </div>
                            <img
                                className="switch_icon w-[24px] h-[24px] object-contain object-center"
                                src={SwitchIcon}
                                alt="icon"
                            />
                            <div className="date_address_otr flex lg:flex-col items-end lg:items-start gap-[65px] xlg:gap-[16px] my-[16px]">
                                <div className="date_address_inr flex items-center gap-[16px] flex-1">
                                    <div className="input_otr w-[50%]">
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass=""
                                            LabelFor="dropaddress"
                                            LabelText="Drop Off Address"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="Enter Address"
                                            PostContent=""
                                        />
                                    </div>
                                    <div className="date_otr w-[50%] relative">
                                        <Calendar
                                            wrapperClass=""
                                            headerClass="date_picker_header"
                                            label="Drop Off Date & Time"
                                        />
                                        <TimePicker
                                            timePickerClass="bottom-[1px] !w-[auto]"
                                            headerText="text-textcolor5 border-none"
                                            LabelFor=""
                                            LabelText=""
                                            onChange={handleTimeChange}
                                        />
                                    </div>
                                </div>
                                <div className="action_otr">
                                    <IconButton className="secondary_btn">
                                        <img
                                            className="plus_icon w-[16px] h-[16px] object-contain object-center"
                                            src={PlusIcon}
                                            alt="icon"
                                        />
                                        <span className="btn_icon">
                                            Add Drop Off
                                        </span>
                                    </IconButton>
                                </div>
                            </div>
                            <div className="distance_time_input">
                                <Input
                                    InputClass="!border-none !p-[0px]"
                                    LableClass=""
                                    LabelFor="distancetime"
                                    LabelText="Distance, time"
                                    InputName="text"
                                    InputType="text"
                                    InputPlaceholder="0 mi, 00h 00min"
                                    PostContent=""
                                />
                            </div>
                        </div>
                        <div className="carrier_otr py-[32px] border-b-[1px] border-border-bordercolor">
                            <SectionHeading HeadingText="Carrier" />
                            <SelectsMain className="rate_inputs flex gap-[16px] mt-[24px]">
                                <InputMain>
                                    <CustomSelect
                                        wrapperClass=""
                                        SelectHeaderClass=""
                                        label="Carrier"
                                        icon=""
                                        placeholder="Select carrier"
                                        onChange={(e) => {
                                            console.log(e)
                                        }}
                                        options={[
                                            { value: '1', label: 'One' },
                                            { value: '2', label: 'Two' },
                                            { value: '3', label: 'Three' },
                                        ]}
                                    />
                                </InputMain>
                                <InputMain>
                                    <CustomSelect
                                        wrapperClass=""
                                        SelectHeaderClass=""
                                        label="Driver"
                                        icon=""
                                        placeholder="Select driver"
                                        onChange={(e) => {
                                            console.log(e)
                                        }}
                                        options={[
                                            { value: '1', label: 'One' },
                                            { value: '2', label: 'Two' },
                                            { value: '3', label: 'Three' },
                                        ]}
                                    />
                                </InputMain>
                            </SelectsMain>
                        </div>
                        <div className="rate_otr py-[32px] border-b-[1px] border-border-bordercolor">
                            <SectionHeading HeadingText="Rate"/>
                            <SelectsMain className="rate_inputs flex md:flex-col items-center gap-[16px] mt-[24px] mb-[16px]">
                                <InputMain2 className="rate_inputs flex items-center gap-[16px] md:!w-[100%]">
                                    <InputMain>
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass=""
                                            LabelFor="totalrate"
                                            LabelText="Total rate"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="00.00"
                                            PostContent="$"
                                        />
                                    </InputMain>
                                    <InputMain></InputMain>
                                </InputMain2>
                                <InputMain2 className="rate_inputs flex items-center gap-[16px] md:hidden">
                                    <InputMain></InputMain>
                                    <InputMain></InputMain>
                                </InputMain2>
                            </SelectsMain>
                            <div className="rate_mile_input">
                                <Input
                                    InputClass="!border-none !p-[0px]"
                                    LableClass=""
                                    LabelFor="ratemile"
                                    LabelText="Rate/mile"
                                    InputName="text"
                                    InputType="text"
                                    InputPlaceholder="00.00$"
                                    PostContent=""
                                />
                            </div>
                        </div>
                        <div className="equipment_otr py-[32px] border-b-[1px] border-border-bordercolor">
                            <SectionHeading HeadingText="Equipment"/>
                            <SelectsMain className="truck_select flex gap-[16px] mt-[24px]">
                                <InputMain>
                                    <CustomSelect
                                        SelectHeaderClass=""
                                        wrapperClass="w-[100%]"
                                        label="Truck type"
                                        icon=""
                                        placeholder="Select truck type"
                                        onChange={(e) => {
                                            console.log(e)
                                        }}
                                        options={[
                                            { value: '1', label: 'One' },
                                            { value: '2', label: 'Two' },
                                            { value: '3', label: 'Three' },
                                        ]}
                                    />
                                </InputMain>
                                <InputMain></InputMain>
                            </SelectsMain>
                        </div>
                        <div className="cargo_otr py-[32px] border-b-[1px] border-border-bordercolor">
                            <SectionHeading HeadingText="Cargo details" />
                            <SelectsMain className="rate_inputs flex gap-[16px] mt-[24px] mb-[20px]">
                                <InputMain>
                                    <CustomSelect
                                        wrapperClass=""
                                        SelectHeaderClass=""
                                        label="Cargo type"
                                        icon=""
                                        placeholder="Enter the cargo type"
                                        onChange={(e) => {
                                            console.log(e)
                                        }}
                                        options={[
                                            { value: '1', label: 'One' },
                                            { value: '2', label: 'Two' },
                                            { value: '3', label: 'Three' },
                                        ]}
                                    />
                                </InputMain>
                                <InputMain>
                                    <CustomSelect
                                        wrapperClass=""
                                        SelectHeaderClass=""
                                        label="ADR"
                                        icon=""
                                        placeholder="None"
                                        onChange={(e) => {
                                            console.log(e)
                                        }}
                                        options={[
                                            { value: '1', label: 'One' },
                                            { value: '2', label: 'Two' },
                                            { value: '3', label: 'Three' },
                                        ]}
                                    />
                                </InputMain>
                            </SelectsMain>
                            <SelectsMain className="weight_volume_inputs flex md:flex-col items-center gap-[16px]">
                                <InputMain2 className="rate_inputs flex items-center gap-[16px] md:!w-[100%]">
                                    <InputMain>
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass=""
                                            LabelFor="weight"
                                            LabelText="Weight"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="00.00"
                                            PostContent="lb"
                                        />
                                    </InputMain>
                                    <InputMain>
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass=""
                                            LabelFor="length"
                                            LabelText="Length"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="00.00"
                                            PostContent="ft"
                                        />
                                    </InputMain>
                                </InputMain2>
                                <InputMain2 className="rate_inputs flex items-center gap-[16px] md:!w-[100%]">
                                    <InputMain>
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass=""
                                            LabelFor="width"
                                            LabelText="Width"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="00.00"
                                            PostContent="ft"
                                        />
                                    </InputMain>
                                    <InputMain>
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass=""
                                            LabelFor="height"
                                            LabelText="Height"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="00.00"
                                            PostContent="ft"
                                        />
                                    </InputMain>
                                </InputMain2>
                            </SelectsMain>
                        </div>
                        <div className="shipper_otr py-[32px]">
                            <SectionHeading HeadingText="Shipper" />
                            <SelectsMain className="shipper_inputs flex gap-[16px] my-[24px]">
                                <InputMain>
                                    <Input
                                        InputClass="!pl-[12px]"
                                        LableClass=""
                                        LabelFor="shippername"
                                        LabelText="Shipper Name"
                                        InputName="text"
                                        InputType="text"
                                        InputPlaceholder="Enter the Shipper name"
                                        PostContent=""
                                    />
                                </InputMain>
                                <InputMain>
                                    <Input
                                        InputClass="!pl-[12px]"
                                        LableClass=""
                                        LabelFor="shipperaddress"
                                        LabelText="Shipper Address"
                                        InputName="text"
                                        InputType="text"
                                        InputPlaceholder="Enter the Shipper address"
                                        PostContent=""
                                    />
                                </InputMain>
                            </SelectsMain>
                            <SelectsMain className="shipper_inputs flex gap-[16px]">
                                <InputMain>
                                    <Input
                                        InputClass="!pl-[12px]"
                                        LableClass=""
                                        LabelFor="shipperemail"
                                        LabelText="Shipper Email"
                                        InputName="text"
                                        InputType="text"
                                        InputPlaceholder="Enter the Shipper email"
                                        PostContent=""
                                    />
                                </InputMain>
                                <InputMain className="prone_select_input flex flex-col gap-[4px]">
                                    <InputLabel htmlFor="shippernumber">
                                        Shipper phone number
                                    </InputLabel>
                                    <div className="select_input_inr flex">
                                        <CustomSelect2 headerClass="py-[8px] pl-[12px] pr-[8px]" />
                                        <div className="address_Otr flex-1 relative">
                                            <span className="text-[14px] leading-[18px] text-dark absolute left-[12px] top-[50%] translate-y-[-50%]">
                                                +1
                                            </span>
                                            <CustomInput
                                                className="theme_input pl-[36px]"
                                                name="shippernumber"
                                                type="text"
                                                placeholder="(000) 000-0000"
                                            />
                                        </div>
                                    </div>
                                </InputMain>
                            </SelectsMain>
                        </div>
                    </ContentWrapperInr>
                    <div className="action_otr mt-[40px]">
                        <Button
                            buttonClass=""
                            color="primary"
                            ButtonText="Submit"
                        />
                    </div>
                </div>
            </div>
        </CreateLoadPage>
    )
}

export default CreateLoad
