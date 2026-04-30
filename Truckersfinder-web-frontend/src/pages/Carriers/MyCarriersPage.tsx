import React, { useState } from 'react'
import DataTable from '../../components/DataTable'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as EqBoxTruck } from '../../images/eq-box-truck.svg'
import { ReactComponent as EqFlatBed } from '../../images/eq-flatbed.svg'
import { ReactComponent as EqConestoga } from '../../images/eq-conestoga.svg'
import { ReactComponent as EqSpecialized } from '../../images/eq-specialized.svg'
import { ReactComponent as EqRGN } from '../../images/eq-RGN.svg'
import { ReactComponent as EqRefrigerated } from '../../images/eq-refrigerated.svg'
import { ReactComponent as EqStretch } from '../../images/eq-stretch.svg'
import { ReactComponent as EqLowBoy } from '../../images/eq-lowboy.svg'
import { ReactComponent as SearchIcon } from '../../images/search-icon.svg'
import IconToolTip from '../../components/ToolTip/IconToolTip'
import styled from 'styled-components'
import tw from 'twin.macro'
import Calendar from '../../components/Calendar'
import CustomSelect, { Option } from '../../components/Select'
import Input from '../../components/Input/Input'
import MoreDropDown from '../../components/MoreDropDown/MoreDropDown'
import CarrierAlertModal from '../../components/CarrierAlertModal/CarrierAlertModal'

const Heading = styled.span`
    ${tw`text-2xl font-semibold leading-normal mb-[22px] block`}
`

export const EquipmentContainer = styled.div`
    ${tw`flex justify-start gap-x-1	`}
`

const Header = styled.div`
    ${tw`flex justify-between mb-4`}
`

const debounce = <T extends (...args: any[]) => void>(
    func: T,
    wait: number
): T => {
    let timeout: NodeJS.Timeout

    const debounced = (...args: Parameters<T>) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
    }

    return debounced as T
}

const CarriesPage = () => {
    const navigate = useNavigate()
    const [showPopup, setShowPopup] = React.useState(false)
    const [selectedCarrierId, setSelectedCarrierId] = useState<string | undefined>('');

    const showPopupHandler = (id: string) => {
        setSelectedCarrierId(id);
        setShowPopup(true)
    };

    const deleteElement = (id: string) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
        setShowPopup(false)
    }

    const [searchInput, setSearchInput] = useState('')
    const [equipment, setEquipment] = useState<Option>()

    const columns = [
        {
            key: 'mc_no',
            label: 'MC No.',
            sortable: true,
        },
        {
            key: 'name',
            label: 'Name',
        },
        {
            key: 'equipment',
            label: 'Equipment',
        },
        {
            key: 'driver',
            label: 'Driver',
            sortable: true,
        },
        {
            key: 'actions',
            label: 'Actions',
        },
        {
            key: 'more',
            label: '',
        }
    ]

    let sampleData = [
        {
            id: '1',
            mc_no: '123******',
            name: 'Fisher Trucking LLC',
            equipment: (
                <EquipmentContainer>
                    <IconToolTip icon={<EqBoxTruck />} label="EqBoxTruck" />
                    <IconToolTip icon={<EqConestoga />} label="EqConestoga" />
                    <IconToolTip
                        icon={<EqSpecialized />}
                        label="EqSpecialized"
                    />
                </EquipmentContainer>
            ),
            driver: 'Annette Black, Robert Fox',
            actions: [
                {
                    label: 'View details',
                    onClick: (row: any) => {
                        viewDetail(row)
                    },
                },
            ],
            more: (
                <MoreDropDown id={'1'} bidClick={showPopupHandler} MyCarriers={true} />
            ),
        },
        {
            id: '2',
            mc_no: '456******',
            name: 'ABC Transport Inc',
            equipment: (
                <EquipmentContainer>
                    <IconToolTip icon={<EqFlatBed />} label="EqFlatBed" />
                    <IconToolTip
                        icon={<EqRefrigerated />}
                        label="EqRefrigerated"
                    />
                </EquipmentContainer>
            ),
            driver: 'John Smith, Emily Davis',
            actions: [
                {
                    label: 'View details',
                    onClick: (row: any) => {
                        viewDetail(row)
                    },
                },
            ],
            more: (
                <MoreDropDown id={'2'} bidClick={showPopupHandler} MyCarriers={true}/>
            ),
        },
        {
            id: '3',
            mc_no: '789******',
            name: 'XYZ Logistics',
            equipment: (
                <EquipmentContainer>
                    <IconToolTip icon={<EqLowBoy />} label="EqLowBoy" />
                </EquipmentContainer>
            ),
            driver: 'Michael Johnson',
            actions: [
                {
                    label: 'View details',
                    onClick: (row: any) => {
                        viewDetail(row)
                    },
                },
            ],
            more: (
                <MoreDropDown id={'3'} bidClick={showPopupHandler} MyCarriers={true}/>
            ),
        },
        {
            id: '4',
            mc_no: '111******',
            name: 'Smith Freight Services',
            equipment: (
                <EquipmentContainer>
                    <IconToolTip icon={<EqFlatBed />} label="EqFlatBed" />
                    <IconToolTip icon={<EqConestoga />} label="EqConestoga" />
                    <IconToolTip
                        icon={<EqSpecialized />}
                        label="EqSpecialized"
                    />
                </EquipmentContainer>
            ),
            driver: 'Sarah Miller, David Brown',
            actions: [
                {
                    label: 'View details',
                    onClick: (row: any) => {
                        viewDetail(row)
                    },
                },
            ],
            more: (
                <MoreDropDown id={'4'} bidClick={showPopupHandler} MyCarriers={true}/>
            ),
        },
        {
            id: '5',
            mc_no: '222******',
            name: 'Express Cargo Co.',
            equipment: (
                <EquipmentContainer>
                    <IconToolTip icon={<EqBoxTruck />} label="EqBoxTruck" />
                </EquipmentContainer>
            ),
            driver: 'James Lee',
            actions: [
                {
                    label: 'View details',
                    onClick: (row: any) => {
                        viewDetail(row)
                    },
                },
            ],
            more: (
                <MoreDropDown id={'5'} bidClick={showPopupHandler} MyCarriers={true} />
            ),
        },
    ]

    const [data, setData] = useState(sampleData)

    const viewDetail = (carrier: any) => {
        navigate('/my-carriers/details')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setSearchInput(value)
        handleSearch(value)
    }

    const handleEquipmentChange = (option: Option) => {
        setEquipment(option)
    }

    const handleSearch = debounce((value: string) => {
        // Your search logic here, using the debounced input value
        const sample = data.filter((item) => {
            const mcNoMatch = item?.mc_no
                ?.toLowerCase()
                .startsWith(value?.toLowerCase())
            const nameMatch = item?.name
                ?.toLowerCase()
                .startsWith(value?.toLowerCase())
            const driverMatch = item?.driver
                ?.toLowerCase()
                .startsWith(value?.toLowerCase())

            return mcNoMatch || nameMatch || driverMatch
        })
        setData(sample)
    }, 500)
    return (
        <main className="p-6">
            <Heading>My Carriers</Heading>
            {showPopup && (
                <CarrierAlertModal setShowPopup={setShowPopup} id={selectedCarrierId} deleteElement={deleteElement}/>
            )}
            <Header>
                <Input
                    InputClass="theme_input text-[16px] leading-[18px] text-textcolor1 bg-bgShade1 py-[13px] border-[1px] border-transparent rounded-8"
                    InputName="search"
                    InputPlaceholder="Search here"
                    Value={searchInput}
                    InputType="text"
                    PreContent={<SearchIcon />}
                    onChange={(e: any) => handleChange(e)}
                />

                <div className="flex gap-x-2 w-[30%] lg:w-[50%] xl:w-[50%] 2xl:w-[40%] 3xl:w-[30%]">
                    <Calendar
                        wrapperClass="w-[100%] mt-[-3px]"
                        headerClass="max-w-[100%] bg-light "
                        label=""
                    />
                    <CustomSelect
                        placeholder="Equipment"
                        onChange={(e) => handleEquipmentChange(e)}
                        value={equipment}
                        options={[
                            { value: '1', label: 'One' },
                            { value: '2', label: 'Two' },
                            { value: '3', label: 'Three' },
                        ]}
                    />
                </div>
            </Header>
            <DataTable columns={columns} data={data} />
        </main>
    )
}

export default CarriesPage
