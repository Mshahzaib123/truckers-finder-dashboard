import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import DataTable from '../components/DataTable'
import PageHeading from '../components/PageHeading/PageHeading'
import OriginDestination from '../components/OriginDestination/OriginDestination'
import Calendar from '../components/Calendar'
import MoreDropDown from '../components/MoreDropDown/MoreDropDown'
import CustomSelect from '../components/Select'

import SearchIcon from '../images/search-icon.svg'
import MapComponent from '../components/MapComponent/MapComponent'
import MapModal from '../components/MapComponent/MapModal'
import StatusBadge from '../components/StatusBadge/StatusBadge'

const SearchInput = styled.input`
    ${tw`text-[16px] leading-[18px] text-textcolor1 bg-light py-[15px] pl-[50px] pr-[12px] border-[1px] border-transparent rounded-8`}
`
const MyLiveLoadPage = styled.div`
    .search_date_select {
        .search_otr {
            .theme_input {
                padding: 18px 20px 18px 50px;
            }
        }
        .date_select {
            .date_picker_comp {
                width: 232px;
                @media (max-width: 1100px) {
                    width: auto;
                }
                label {
                    display: none;
                }
                .clander_header {
                    width: 100%;
                    padding: 15px 16px !important;
                }
            }
            .custom_select2 {
                .select_header {
                    gap: 8px;
                    padding: 18px 12px !important;
                    height: auto;
                    .select_icon {
                        margin-left: 0px;
                        svg {
                            width: 18px;
                            height: 18px;
                        }
                    }
                }
            }
        }
    }
`
const TableWrapper = styled.div`
    table {
        @media (max-width: 1150px) {
            width: 1024px;
        }
    }
    thead tr {
        th:nth-child(1) {
            padding-left: 28px;
            @media (max-width: 1300px) {
                padding-left: 16px;
            }
        }
        th:last-child {
            padding-right: 28px;
            @media (max-width: 1300px) {
                padding-right: 16px;
            }
        }
        th:nth-child(7) {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    tbody tr {
        transition: 0.3s;
        &:last-child {
            td:last-child {
                .drop_down_otr {
                    top: auto;
                    bottom: 20px;
                }
            }
        }
        td:nth-child(1) {
            padding-left: 28px;
            @media (max-width: 1300px) {
                padding-left: 16px;
            }
        }
        td:nth-child(4) {
            .Origion_text_main {
                .origin_text:nth-child(2) .circle_otr span {
                    background-color: #7c7c7c;
                }
                &:after {
                    content: '';
                    position: absolute;
                    height: 8px;
                    width: 1px;
                    border-left: 1px dashed #dcdcdc;
                    top: 50%;
                    left: 8px;
                    transform: translateY(-50%);
                }
            }
        }
        td:nth-child(7) {
            display: flex;
            align-items: center;
            justify-content: center;
            .accepted {
                background-color: #cce9dd;
                color: #008f53;
            }
        }
        td:last-child {
            padding-right: 28px;
            @media (max-width: 1300px) {
                padding-right: 16px;
            }
        }
    }
`

const columns = [
    {
        key: 'date',
        label: 'Date',
    },
    {
        key: 'mc_no',
        label: 'MC No',
    },
    {
        key: 'load_number',
        label: 'Load Number',
    },
    {
        key: 'origin_destination',
        label: 'Origin Destination',
    },
    {
        key: 'shipper',
        label: 'Shipper',
    },
    {
        key: 'shippers_contact',
        label: 'Shipper’s contact',
    },
    {
        key: 'status',
        label: 'Status',
    },
    {
        key: 'more',
        label: '',
    },
]

function MyLiveLoad() {
    const [showMapPopup, setShowMapPopup] = React.useState(false)

    const showMapPopupHandler = (id: string) => {
        setShowMapPopup(true)
    }

    const closeMapPopHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as Element
        if (!target.closest('.map_modal') && showMapPopup) {
            setShowMapPopup(false)
        }
    }

    const sampleData = [
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Assigned'} type="assigned" />,
            more: <MoreDropDown id={'1'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
        {
            date: '09/12 - 09/12',
            mc_no: '1232599',
            load_number: 'P3009387',
            origin_destination: (
                <OriginDestination Text1="Cheyenne, WM" Text2="Bangor, MN" />
            ),
            shipper: 'Unum Group LLC',
            shippers_contact: '+18292260487',
            status: <StatusBadge text={'Accepted'} type="accepted" />,
            more: <MoreDropDown id={'2'} bidClick={showMapPopupHandler} />,
        },
    ]
    return (
        <MyLiveLoadPage
            className="MyLiveLoad_page p-6"
            onClick={closeMapPopHandler}
        >
            <PageHeading HeadingWrapperClass="" HeadingText="My Live Loads" />
            <div className="liveLoadMap relative">
                <MapComponent />
                {showMapPopup && <MapModal setShowMapPopup={setShowMapPopup} />}
            </div>
            <div className="data_table_main flex flex-col items-end">
                <div className="search_date_select flex items-center justify-between w-[100%] mt-[32px] mb-[24px] gap-[16px]">
                    <div className="search_otr relative min-w-[366px] lg:min-w-[auto] lg:w-[100%] lg:flex-1">
                        <img
                            className="search_icon absolute top-[50%] translate-y-[-50%] left-[16px] w-[24px] h-[24px] object-contain object-center"
                            src={SearchIcon}
                            alt="icon"
                        />
                        <SearchInput
                            className="theme_input"
                            type="text"
                            name="search"
                            placeholder="Search here"
                        />
                    </div>
                    <div className="date_select flex items-end gap-[16px]">
                        <Calendar
                            wrapperClass=""
                            headerClass="!py-[14px] bg-light clander_header"
                            label=""
                        />
                        <CustomSelect
                            SelectHeaderClass="!text-[14px] !leading-[20px] !py-[14px] w-[168px]"
                            wrapperClass=""
                            label=""
                            icon=""
                            placeholder="Status"
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
                </div>
                <TableWrapper className="data_table_otr relative w-full">
                    <DataTable columns={columns} data={sampleData} />
                </TableWrapper>
            </div>
        </MyLiveLoadPage>
    )
}

export default MyLiveLoad
