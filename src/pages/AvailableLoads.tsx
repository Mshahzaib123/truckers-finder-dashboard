import React from 'react'
import PageHeading from '../components/PageHeading/PageHeading'
import CustomSelect from '../components/Select'
import BidPopup from '../components/BidPopup/BidPopup'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import Input from '../components/Input/Input'
import LoadboadTableCard from '../components/LoadboadTable/LoadboadTableCard'

import { ReactComponent as LocationIcon } from '../images/location.svg'
import { ReactComponent as SwitchIcon } from '../images/switch-icon.svg'
import { ReactComponent as SearchIcon } from '../images/search-icon.svg'
import { ReactComponent as ArrowRight } from '../images/arrow-right.svg'
import { ReactComponent as ArrowLeft } from '../images/arrow-left.svg'

import Button from '../components/Button/Button'
import Calendar from '../components/Calendar'
import Collapse from '../components/Collapse'

const LiveLoadPage = styled.div`
    ${tw``}
    h3 {
        font-size: 20px;
        line-height: 24px;
    }
    .custom_select2 {
        .select_header {
            height: auto;
            padding: 8px 12px;
            .text_img {
                svg {
                    margin-right: 8px;
                }
                .header_text {
                    color: rgba(21, 21, 21, 0.6);
                }
            }
            .select_icon {
                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
    .loading_parameter {
        .distance_input {
            @media (max-width: 1250px) {
                width: calc(50% - 34px);
                .input_main {
                    width: 50%;
                }
            }
        }
    }
    .payment_parameters {
        .inputs_wrapper {
            @media (max-width: 1250px) {
                width: 100%;
                .rate_input {
                    width: 50%;
                }
            }
        }
    }
    .LoadboadTable_main {
        .LoadboadTableCard_otr {
            &:not(last-child) {
                margin-bottom: 8px;
            }
        }
    }
    .popup_active {
        width: calc(100% - 280px);
        @media (max-width: 1500px) {
            .loadboad_date_selector {
                width: calc(50% - 8px);
                .date_select_header {
                    max-width: 100%;
                }
            }
            .loading_parameter {
                .distance_input {
                    @media (max-width: 1100px) {
                        width: 100%;
                    }
                    .input_main {
                        width: 50%;
                        &:last-child {
                            display: none;
                        }
                    }
                }
            }
            .truck_parameters {
                .truck_type_select {
                    width: calc(50% - 8px);
                }
                .inputs_wrapper {
                    @media (max-width: 1100px) {
                        flex-direction: column;
                        gap: 20px;
                    }
                    .weight_input {
                        width: 40%;
                        @media (max-width: 1100px) {
                            width: 100%;
                            .inpuy_otr {
                                width: 100%;
                            }
                        }
                    }
                    .distance_input {
                        width: 60%;
                        @media (max-width: 1100px) {
                            width: 100%;
                        }
                    }
                    .volume_inputs {
                        display: none;
                    }
                }
            }
            .payment_parameters {
                .inputs_wrapper {
                    @media (max-width: 1100px) {
                        flex-direction: column;
                        gap: 20px;
                    }
                    .rate_input {
                        width: 50%;
                        @media (max-width: 1100px) {
                            width: 100%;
                            .inpuy_otr {
                                width: 100%;
                            }
                        }
                    }
                    .distance_input {
                        display: none;
                    }
                }
            }
        }
        @media (max-width: 1250px) {
            .LoadboadTableCard_otr {
                .card_info_otr {
                    flex-wrap: wrap;
                    gap: 16px 0;
                    .InfoCard_otr {
                        width: 33.333%;
                    }
                }
                .card_location_price {
                    align-items: flex-start;
                    flex-direction: column;
                    .locations_otr {
                        width: 100%;
                    }
                }
                .price_otr {
                    width: auto;
                    justify-content: flex-start;
                }
                @media (max-width: 1100px) {
                    .card_location_price {
                        align-items: center;
                        flex-direction: row;
                        .locations_otr {
                            align-items: flex-start;
                            flex-direction: column;
                            gap: 10px;
                        }
                        .location_otr{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
`
const FilterHeading = styled.div`
    ${tw`flex items-center justify-between mb-[20px]`}
    .custom_select2 {
        .text_img div {
            color: #38008f;
        }
        svg {
            path {
                stroke: #38008f;
            }
        }
    }
`
const SectionsHeading = styled.h3`
    ${tw`text-[16px] leading-[18px] text-black font-semibold`}
`
const InputsWrapper = styled.div.attrs({
    className: 'inputs_wrapper',
})`
    ${tw`flex gap-[68px]`}
`

const InputMain = styled.div.attrs({
    className: 'input_main',
})`
    ${tw`w-[33%]`}
`

const DateSelectOtr = styled.div`
    width: calc(28% - 38px);
    margin: 24px 0 20px 0;
    @media (max-width: 1250px) {
        width: calc(50% - 34px);
        .date_select_header {
            max-width: 100%;
        }
    }
`
const PlaceSelectOtr = styled.div`
    width: calc(58% - 32px);
    display: flex;
    align-items: center;
    gap: 22px;
`
const DistanceInputs = styled.div`
    width: calc(42% - 36px);
    display: flex;
    align-items: center;
    flex: 1;
    gap: 16px;
`

const SearchInput = styled.input`
    ${tw`text-[16px] leading-[18px] text-textcolor1 bg-light py-[18px] pr-[20px] pl-[50px] border-[1px] border-transparent rounded-8`}
`

interface PaginationButtonProps {
    active?: boolean
}
const Pagination = styled.div`
    ${tw`flex justify-center gap-[8px]`}
`
const PaginationButton = styled.button<PaginationButtonProps>`
    ${tw`bg-[white] cursor-pointer flex items-center justify-center w-[36px] h-[36px] rounded-[3px] rounded-lg border-[none]`}
    ${(props) =>
        props.active &&
        css`
            ${tw`bg-[black] text-[white]`}
        `}
`
const RecordPerPage = styled.div`
    ${tw`flex items-center gap-[12px]`}
`
const RecordPerPageSelect = styled.select`
    ${tw`cursor-pointer bg-[white] p-[8px] rounded-[4px] rounded-lg`}
    border: none;
    outline: none;
`
const RecordPerPageSpan = styled.span`
    ${tw`text-textcolor2 font-normal text-base`}
`

function AvailableLoads() {
    const [showBidPopup, setShowBidPopup] = React.useState(false)

    const showBidPopupHandler = (id: string) => {
        setShowBidPopup(true)
    }

    const loadboadData = [
        {
            id: '0',
            originPoint: 'Cheyenne, WM',
            destinationPoint: 'Bangor, MN',
            distanceText: '314 mi',
            totalPrice: '$800',
            perMiPrice: '$2.55/mi',
            pickupDate: '09/12 - 09/15',
            truckType: 'Dump truck',
            weight: '55,000 lb',
            cargoType: 'Sand in bulk',
            shipper: 'Unum Group LLC',
        },
        {
            id: '1',
            originPoint: 'Concord, IL',
            destinationPoint: 'Los Angeles, CA ',
            distanceText: '314 mi',
            totalPrice: '$1,200',
            perMiPrice: '$2.55/mi',
            pickupDate: '09/12 - 09/15',
            truckType: 'Dump truck',
            weight: '55,000 lb',
            cargoType: 'Sand in bulk',
            shipper: 'Unum Group LLC',
        },
        {
            id: '2',
            originPoint: 'Cheyenne, WM',
            destinationPoint: 'Bangor, MN',
            distanceText: '314 mi',
            totalPrice: '$800',
            perMiPrice: '$2.55/mi',
            pickupDate: '09/12 - 09/15',
            truckType: 'Dump truck',
            weight: '55,000 lb',
            cargoType: 'Sand in bulk',
            shipper: 'Unum Group LLC',
        },
        {
            id: '3',
            originPoint: 'Cheyenne, WM',
            destinationPoint: 'Bangor, MN',
            distanceText: '314 mi',
            totalPrice: '$800',
            perMiPrice: '$2.55/mi',
            pickupDate: '09/12 - 09/15',
            truckType: 'Dump truck',
            weight: '55,000 lb',
            cargoType: 'Sand in bulk',
            shipper: 'Unum Group LLC',
        },
        {
            id: '4',
            originPoint: 'Cheyenne, WM',
            destinationPoint: 'Bangor, MN',
            distanceText: '314 mi',
            totalPrice: '$800',
            perMiPrice: '$2.55/mi',
            pickupDate: '09/12 - 09/15',
            truckType: 'Dump truck',
            weight: '55,000 lb',
            cargoType: 'Sand in bulk',
            shipper: 'Unum Group LLC',
        },
        {
            id: '5',
            originPoint: 'Cheyenne, WM',
            destinationPoint: 'Bangor, MN',
            distanceText: '314 mi',
            totalPrice: '$800',
            perMiPrice: '$2.55/mi',
            pickupDate: '09/12 - 09/15',
            truckType: 'Dump truck',
            weight: '55,000 lb',
            cargoType: 'Sand in bulk',
            shipper: 'Unum Group LLC',
        },
        {
            id: '6',
            originPoint: 'Cheyenne, WM',
            destinationPoint: 'Bangor, MN',
            distanceText: '314 mi',
            totalPrice: '$800',
            perMiPrice: '$2.55/mi',
            pickupDate: '09/12 - 09/15',
            truckType: 'Dump truck',
            weight: '55,000 lb',
            cargoType: 'Sand in bulk',
            shipper: 'Unum Group LLC',
        },
        {
            id: '7',
            originPoint: 'Cheyenne, WM',
            destinationPoint: 'Bangor, MN',
            distanceText: '314 mi',
            totalPrice: '$800',
            perMiPrice: '$2.55/mi',
            pickupDate: '09/12 - 09/15',
            truckType: 'Dump truck',
            weight: '55,000 lb',
            cargoType: 'Sand in bulk',
            shipper: 'Unum Group LLC',
        },
        {
            id: '8',
            originPoint: 'Cheyenne, WM',
            destinationPoint: 'Bangor, MN',
            distanceText: '314 mi',
            totalPrice: '$800',
            perMiPrice: '$2.55/mi',
            pickupDate: '09/12 - 09/15',
            truckType: 'Dump truck',
            weight: '55,000 lb',
            cargoType: 'Sand in bulk',
            shipper: 'Unum Group LLC',
        },
    ]

    const [currentPage, setCurrentPage] = React.useState(1)
    const [itemsPerPage, setItemsPerPage] = React.useState(3)
    const totalPages = Math.ceil(loadboadData.length / itemsPerPage)
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage)
    }
    const handleItemsPerPageChange = (value: number) => {
        setCurrentPage(1)
        setItemsPerPage(value)
    }

    const paginatedData = loadboadData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )
    return (
        <LiveLoadPage
            className="AvailableLoads_page p-[24px] flex gap-[24px]"
            id="available-loads-container"
        >
            <div
                className={`${
                    showBidPopup ? 'popup_active' : 'w-[100%]'
                } AvailableLoads_page_inr flex flex-col`}
            >
                <FilterHeading className="heading_filter_otr">
                    <PageHeading
                        HeadingWrapperClass="!mb-[0px]"
                        HeadingText="Loadboard"
                    />
                </FilterHeading>
                <Collapse headerTitle="Active filters">
                    <div className="filter_wrapper px-[24px]">
                        <div className="loading_parameter pb-[32px] border-b-[1px] border-border-bordercolor">
                            <SectionsHeading>Loading parameters</SectionsHeading>
                            <DateSelectOtr className="loadboad_date_selector">
                                <Calendar
                                    wrapperClass=""
                                    headerClass="date_select_header"
                                    label="Approval date/ period"
                                />
                            </DateSelectOtr>
                            <InputsWrapper className="xlg:flex-col xlg:items-start xlg:!gap-[20px]">
                                <PlaceSelectOtr className="place_selects xlg:!w-[100%]">
                                    <div className="place_select_otr w-[50%]">
                                        <CustomSelect
                                            SelectHeaderClass=""
                                            wrapperClass=""
                                            label="From"
                                            icon={<LocationIcon />}
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
                                    </div>
                                    <SwitchIcon className="switch_icon w-[24px] h-[24px] object-contain object-center" />
                                    <div className="place_select_otr w-[50%]">
                                        <CustomSelect
                                            SelectHeaderClass=""
                                            wrapperClass=""
                                            label="To"
                                            icon={<LocationIcon />}
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
                                </PlaceSelectOtr>
                                <DistanceInputs className="distance_input">
                                    <InputMain>
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass="!text-[14px] !leading-[18px]"
                                            LabelFor="distancefrom"
                                            LabelText="Distance, from"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="00.00"
                                            PostContent="mi"
                                        />
                                    </InputMain>
                                    <InputMain>
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass="!text-[14px] !leading-[18px]"
                                            LabelFor="distanceto"
                                            LabelText="Distance, to"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="00.00"
                                            PostContent="mi"
                                        />
                                    </InputMain>
                                    <InputMain className="xlg:hidden"></InputMain>
                                </DistanceInputs>
                            </InputsWrapper>
                        </div>
                        <div className="truck_parameters pb-[32px] pt-[24px] border-b-[1px] border-border-bordercolor">
                            <SectionsHeading>Truck parameters</SectionsHeading>
                            <DateSelectOtr className="truck_type_select">
                                <CustomSelect
                                    SelectHeaderClass=""
                                    wrapperClass=""
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
                            </DateSelectOtr>
                            <InputsWrapper>
                                <div className="weight_input flex gap-[16px] w-[28%] xlg:w-[40%]">
                                    <Input
                                        InputClass="!pl-[12px]"
                                        LableClass="!text-[14px] !leading-[18px]"
                                        LabelFor="weightfrom"
                                        LabelText="Weight, from"
                                        InputName="text"
                                        InputType="text"
                                        InputPlaceholder="00.00"
                                        PostContent="lb"
                                    />
                                    <Input
                                        InputClass="!pl-[12px]"
                                        LableClass="!text-[14px] !leading-[18px]"
                                        LabelFor="weightto"
                                        LabelText="Weight, to"
                                        InputName="text"
                                        InputType="text"
                                        InputPlaceholder="00.00"
                                        PostContent="lb"
                                    />
                                </div>
                                <div className="distance_input flex gap-[16px] w-[44%] xlg:w-[60%]">
                                    <InputMain>
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass="!text-[14px] !leading-[18px]"
                                            LabelFor="length"
                                            LabelText="Length"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="00.00"
                                            PostContent="ft"
                                        />
                                    </InputMain>
                                    <InputMain>
                                        <Input
                                            InputClass="!pl-[12px]"
                                            LableClass="!text-[14px] !leading-[18px]"
                                            LabelFor="Width"
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
                                            LableClass="!text-[14px] !leading-[18px]"
                                            LabelFor="Height"
                                            LabelText="Height"
                                            InputName="text"
                                            InputType="text"
                                            InputPlaceholder="00.00"
                                            PostContent="ft"
                                        />
                                    </InputMain>
                                </div>
                                <div className="volume_inputs flex gap-[16px] w-[28%] xlg:hidden"></div>
                            </InputsWrapper>
                        </div>
                        <div className="payment_parameters pt-[24px]">
                        <SectionsHeading>Payment</SectionsHeading>
                        <InputsWrapper className="my-[24px]">
                            <div className="rate_input flex gap-[16px] w-[28%]">
                                <Input
                                    InputClass="!pl-[12px]"
                                    LableClass="!text-[14px] !leading-[18px]"
                                    LabelFor="ratefrom"
                                    LabelText="Total rate, from"
                                    InputName="text"
                                    InputType="text"
                                    InputPlaceholder="00.00"
                                    PostContent="$"
                                />
                                <Input
                                    InputClass="!pl-[12px]"
                                    LableClass="!text-[14px] !leading-[18px]"
                                    LabelFor="rateto"
                                    LabelText="Total rate, to"
                                    InputName="text"
                                    InputType="text"
                                    InputPlaceholder="00.00"
                                    PostContent="$"
                                />
                            </div>
                            <div className="rate_input flex gap-[16px] w-[28%]">
                                <Input
                                    InputClass="!pl-[12px]"
                                    LableClass="!text-[14px] !leading-[18px]"
                                    LabelFor="rate/milefrom"
                                    LabelText="Rate/mile, from"
                                    InputName="text"
                                    InputType="text"
                                    InputPlaceholder="00.00"
                                    PostContent="$"
                                />
                                <Input
                                    InputClass="!pl-[12px]"
                                    LableClass="!text-[14px] !leading-[18px]"
                                    LabelFor="rate/mileto"
                                    LabelText="Rate/mile, to"
                                    InputName="text"
                                    InputType="text"
                                    InputPlaceholder="00.00"
                                    PostContent="$"
                                />
                            </div>
                            <div className="distance_input flex gap-[16px] w-[44%] xlg:hidden"></div>
                        </InputsWrapper>
                        </div>
                    </div>
                    <div className="action_otr flex items-center justify-end gap-[16px] pt-[16px] pb-[12px] px-[24px] border-t-[1px] border-border-bordercolor">
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
                <div className="data_table_main flex flex-col items-start">
                    <div className="search_otr relative mt-[24px] mb-[16px] w-[366px] lg:w-[100%] lg:flex-1">
                        <SearchIcon className="search_icon absolute top-[50%] translate-y-[-50%] left-[16px] w-[24px] h-[24px] object-contain object-center" />
                        <SearchInput
                            className="theme_input"
                            type="text"
                            name="search"
                            placeholder="Search here"
                        />
                    </div>
                    <div className="data_table_otr relative w-full">
                        <div className="LoadboadTable_main">
                            <div className="cards_wrapper">
                                {paginatedData.map((item, index) => (
                                    <LoadboadTableCard
                                        key={index}
                                        id={item.id}
                                        originPoint={item.originPoint}
                                        destinationPoint={item.destinationPoint}
                                        distanceText={item.distanceText}
                                        totalPrice={item.totalPrice}
                                        perMiPrice={item.perMiPrice}
                                        pickupDate={item.pickupDate}
                                        truckType={item.truckType}
                                        weight={item.weight}
                                        cargoType={item.cargoType}
                                        shipper={item.shipper}
                                        bidClick={showBidPopupHandler}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center justify-between mt-[32px]">
                                <RecordPerPage>
                                    <RecordPerPageSpan>
                                        Show entries
                                    </RecordPerPageSpan>
                                    <RecordPerPageSelect
                                        value={itemsPerPage}
                                        onChange={(e) =>
                                            handleItemsPerPageChange(
                                                Number(e.target.value)
                                            )
                                        }
                                    >
                                        <option value={3}>3</option>
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                    </RecordPerPageSelect>
                                </RecordPerPage>
                                <Pagination>
                                    {currentPage > 1 && (
                                        <PaginationButton
                                            onClick={() =>
                                                handlePageChange(
                                                    currentPage - 1
                                                )
                                            }
                                        >
                                            <ArrowLeft />
                                        </PaginationButton>
                                    )}
                                    {Array.from(
                                        { length: totalPages },
                                        (_, index) => (
                                            <PaginationButton
                                                key={index}
                                                active={
                                                    currentPage === index + 1
                                                }
                                                onClick={() =>
                                                    handlePageChange(index + 1)
                                                }
                                            >
                                                {index + 1}
                                            </PaginationButton>
                                        )
                                    )}
                                    {currentPage < totalPages && (
                                        <PaginationButton
                                            onClick={() =>
                                                handlePageChange(
                                                    currentPage + 1
                                                )
                                            }
                                        >
                                            <ArrowRight />
                                        </PaginationButton>
                                    )}
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showBidPopup && <BidPopup setShowBidPopup={setShowBidPopup} />}
        </LiveLoadPage>
    )
}

export default AvailableLoads
