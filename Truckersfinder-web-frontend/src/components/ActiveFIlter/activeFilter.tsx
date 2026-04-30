import { styled } from 'styled-components'
import Button from '../Button/Button'
import Collapse from '../Collapse'
import tw from 'twin.macro'
import Input from '../Input/Input'
import CustomSelect from '../Select'
import Calendar from '../Calendar'
import { ReactComponent as LocationIcon } from '../../images/location.svg'
import { ReactComponent as SwitchIcon } from '../../images/switch-icon.svg'

const ActiveFilter = () => {
    return (
        <Collapse headerTitle="Active filters" mobileTitle="Filters">
            <div className="px-6 pb-6">
                <div className="loading_parameter pb-8 border-b-[1px] border-border-bordercolor">
                    <SectionsHeading>Loading parameters</SectionsHeading>
                    <Calendar
                        wrapperClass="md:w-[50%] mt-6 mb-5 sm:w-full"
                        headerClass=""
                        label="Loading date/ period"
                    />
                    <div className="flex sm:block items-center gap-[10%] md:gap-[5%]">
                        <div className="flex sm:hidden items-center  gap-4 md:gap-2 w-[60%]">
                            <CustomSelect
                                SelectHeaderClass=""
                                wrapperClass=""
                                label="From"
                                icon={
                                    <LocationIcon className="md:w-4 md:h-4 w-6 h-6" />
                                }
                                placeholder="Enter origin point"
                                onChange={(e) => {
                                    console.log(e)
                                }}
                                options={[
                                    { value: '1', label: 'One' },
                                    { value: '2', label: 'Two' },
                                    { value: '3', label: 'Three' },
                                ]}
                            />

                            <SwitchIcon className="w-[24px] h-[24px]" />

                            <CustomSelect
                                SelectHeaderClass=""
                                wrapperClass=""
                                label="To"
                                icon={
                                    <LocationIcon className="md:w-4 md:h-4 w-6 h-6" />
                                }
                                placeholder="Enter destination point"
                                onChange={(e) => {
                                    console.log(e)
                                }}
                                options={[
                                    { value: '1', label: 'One' },
                                    { value: '2', label: 'Two' },
                                    { value: '3', label: 'Three' },
                                ]}
                            />
                        </div>
                        <div className="sm:flex hidden  sm:justify-between sm:items-center w-[95%]">
                            <div className=" sm:block items-center gap-0 space-y-2  w-[90%]">
                                <CustomSelect
                                    SelectHeaderClass=""
                                    wrapperClass=""
                                    label="From"
                                    icon={
                                        <LocationIcon className="md:w-4 md:h-4 w-6 h-6" />
                                    }
                                    placeholder="Enter origin point"
                                    onChange={(e) => {
                                        console.log(e)
                                    }}
                                    options={[
                                        { value: '1', label: 'One' },
                                        { value: '2', label: 'Two' },
                                        { value: '3', label: 'Three' },
                                    ]}
                                />

                                <CustomSelect
                                    SelectHeaderClass=""
                                    wrapperClass=""
                                    label="To"
                                    icon={
                                        <LocationIcon className="md:w-4 md:h-4 w-6 h-6" />
                                    }
                                    placeholder="Enter destination point"
                                    onChange={(e) => {
                                        console.log(e)
                                    }}
                                    options={[
                                        { value: '1', label: 'One' },
                                        { value: '2', label: 'Two' },
                                        { value: '3', label: 'Three' },
                                    ]}
                                />
                            </div>
                            <SwitchIcon className="sm:block w-[24px] h-[24px] rotate-90" />
                        </div>
                        <div className="flex gap-4 md:gap-2 md:w-[35%] sm:w-full sm:mt-4 items-center">
                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="distancefrom"
                                LabelText="Distance, from"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="mi"
                            />

                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="distanceto"
                                LabelText="Distance, to"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="mi"
                            />
                        </div>
                    </div>
                </div>
                <div className="truck_parameters pb-8 pt-6 border-b-[1px] border-border-bordercolor">
                    <SectionsHeading>Truck parameters</SectionsHeading>

                    <CustomSelect
                        SelectHeaderClass=""
                        wrapperClass="mt-6 w-[25%] md:w-[50%] sm:w-[90%]"
                        label="Truck type"
                        icon={
                            <LocationIcon className="md:w-4 md:h-4 w-6 h-6" />
                        }
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

                    <div className="flex sm:block sm:space-y-4 items-center gap-[10%] md:gap-[7%] mt-5">
                        <div className="items-center flex gap-[16px] w-[28%] md:w-[38%] sm:w-full">
                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="weightfrom"
                                LabelText="Weight, from"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="lb"
                            />
                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="weightto"
                                LabelText="Weight, to"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="lb"
                            />
                        </div>

                        <div className=" flex items-center gap-[16px] w-[44%] md:w-[60%] sm:w-full">
                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="length"
                                LabelText="Length"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="ft"
                            />

                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="Width"
                                LabelText="Width"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="ft"
                            />

                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="Height"
                                LabelText="Height"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="ft"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-6">
                    <SectionsHeading>Payment</SectionsHeading>
                    <div className="flex sm:block sm:space-y-4 gap-[10%] mt-6">
                        <div className=" items-center flex gap-4 w-[28%] md:w-[100%]">
                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="ratefrom"
                                LabelText="Total rate, from"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="$"
                            />
                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="rateto"
                                LabelText="Total rate, to"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="$"
                            />
                        </div>
                        <div className="items-center flex gap-4  w-[28%] md:w-[100%]">
                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="rate/milefrom"
                                LabelText="Rate/mile, from"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="$"
                            />
                            <Input
                                InputClass="!pl-[12px]"
                                LableClass="!text-[14px] !leading-[18px] md:!leading-none md:!text-xs"
                                LabelFor="rate/mileto"
                                LabelText="Rate/mile, to"
                                InputName="text"
                                InputType="text"
                                InputPlaceholder="00.00"
                                PostContent="$"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" border-t-[1px] border-border-bordercolor px-8 sm:px-0 flex items-center justify-end sm:justify-center gap-[16px] pt-4">
                <Button
                    buttonClass="hover:text-[#fff]"
                    color="secondary"
                    ButtonText="Clear Filters"
                />
                <Button
                    buttonClass=""
                    color="primary"
                    ButtonText="Apply Filters"
                />
            </div>
        </Collapse>
    )
}

const SectionsHeading = styled.h3`
    ${tw`text-[16px] leading-[18px] text-black font-semibold`}
`

export default ActiveFilter
