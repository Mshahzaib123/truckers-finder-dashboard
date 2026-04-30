import { ReactComponent as SearchIcon } from '../../images/search-icon.svg'
import { ReactComponent as Import } from '../../images/import.svg'
import { ReactComponent as SelectIcon } from '../../images/elements.svg'
import { ReactComponent as ArrowDown } from '../../images/arrow-collapse.svg'
import { ReactComponent as ArrowUp } from '../../images/arrow-up.svg'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import PageHeading from '../../components/PageHeading/PageHeading'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Calendar from '../../components/Calendar/index'
import DataTable from '../../components/DataTable'
import {
    getCarrierDbData,
    filterByDate,
    filterByCargoCarried,
    filterByOperation,
} from '../../store/slices/CarrierDb'
import { useEffect, useState } from 'react'
import Checkbox from '../../components/Checkbox/Checkbox'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import CustomSelect from '../../components/Select'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks'

const CarrierDbPage = styled.div`
    ${tw`p-6`}
    .inpuy_otr {
        width: 25%;
        input {
            padding: 1rem 2.2rem;
        }
    }
    .eCSHGS {
        height: 52px;
    }

    .theme_btn {
        font-size: 16px;
    }
`

const HeadContent = styled.div`
    ${tw`w-full flex items-center justify-between my-5`}
`

const Filters = styled.div`
    ${tw`gap-5 flex items-center justify-between xl:flex`}
`

const DateDiv = styled.div`
    ${tw`gap-2 flex items-center justify-between lg:w-[100%] xl:w-[80%] 2xl:w-[70%] 3xl:w-[55%] 4xl:w-[55%]`}
`
const ContentBody = styled.div`
    ${tw`gap-5 flex items-stretch justify-between mt-5`}
`
const Table = styled.div<{ selectOpen: boolean }>`
    ${(props) =>
        props.selectOpen
            ? tw`xl:w-8/12 2xl:w-9/12 3xl:w-10/12 4xl:w-10/12 5xl:w-10/12`
            : tw`w-full`}
`

const ColumnsDivContainer = styled.div<{ selectOpen: boolean }>`
    ${(props) =>
        props.selectOpen
            ? tw`xl:w-4/12 2xl:w-3/12 3xl:w-2/12 4xl:w-2/12 5xl:w-2/12`
            : tw`hidden`}
    ${tw`rounded-xl bg-light p-3 px-0 duration-700`}
  max-height: 740px;
    overflow-y: hidden;
`
const ColumnsDiv = styled.div`
    ${tw`w-full`}
    max-height: 740px;
    overflow-y: scroll;

    /* Apply custom scrollbar styles using & */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: #e1e1e1;
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: transparent;
    }
`
const ColumnsHeading = styled.div`
    ${tw`p-4`}
`

const SingleColumn = styled.div`
    ${tw`w-full flex gap-3 py-4 px-6`}
    ${css`
        border-top: 1px solid #dcdcdc;
        border-bottom: 1px solid #dcdcdc;
    `}
`

const SelectBar = styled.div`
    ${tw`h-[52px] bg-light flex justify-evenly w-[50%] items-center rounded-lg cursor-pointer`}
`
const SelectPlaceHolder = styled.p`
    ${tw`text-[16px] text-dark `}
`

const CarrierDb: React.FC = () => {
    const { DbData, FilterData } = useAppSelector((state) => state.CarrierDb)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCarrierDbData())
    }, [])

    type Column = {
        key: string
        label: string
        sortable: boolean
    }
    const [columns, setColumns] = useState([
        { key: 'mcNumber', label: 'MC No', sortable: true },
        { key: 'usdot', label: 'USDOT', sortable: true },
        { key: 'legalName', label: 'Legal-Name', sortable: true },
        { key: 'dbaName', label: 'DBA Name', sortable: false },
        {
            key: 'carrierOperation',
            label: 'Operation-classification',
            sortable: false,
        },
        { key: 'street', label: 'Street', sortable: false },
        { key: 'city', label: 'City', sortable: false },
        { key: 'state', label: 'State', sortable: false },
        { key: 'zip', label: 'ZIP', sortable: false },
        { key: 'country', label: 'Country', sortable: false },
        { key: 'telephone', label: 'Telephone', sortable: true },
        { key: 'emailAddress', label: 'Email', sortable: false },
        { key: 'mcs150Date', label: 'MCS150 Date', sortable: false },
        { key: 'mcs150Mileage', label: 'MCS150 Mileage', sortable: false },
        {
            key: 'mcs150MileageYear',
            label: 'MCS150 Mileage Year',
            sortable: false,
        },
        { key: 'approvalDate', label: 'Add Date', sortable: false },
        { key: 'powerUnits', label: 'Power Units', sortable: false },
        { key: 'drivers', label: 'Drivers', sortable: false },
        {
            key: 'operationClassification',
            label: 'Operation Classification',
            sortable: false,
        },
        { key: 'cargoCarried', label: 'Cargo Carried', sortable: false },
        { key: 'inspection', label: 'Inspection', sortable: false },
        { key: 'crashes', label: 'Crashes', sortable: false },
    ])

    const [selectedColumns, setSelectedColumns] = useState<Column[]>([
        { key: 'mcNumber', label: 'MC No', sortable: true },
        { key: 'usdot', label: 'USDOT', sortable: true },
        { key: 'legalName', label: 'Legal-Name', sortable: true },
        { key: 'telephone', label: 'Telephone', sortable: true },
        { key: 'emailAddress', label: 'Email', sortable: false },
        { key: 'approvalDate', label: 'Add Date', sortable: false },
        {
            key: 'carrierOperation',
            label: 'Operation-classification',
            sortable: false,
        },
        { key: 'dbaName', label: 'DBA Name', sortable: false },
        { key: 'street', label: 'Street', sortable: false },
        { key: 'city', label: 'City', sortable: false },
        { key: 'state', label: 'State', sortable: false },
        { key: 'zip', label: 'ZIP', sortable: false },
        { key: 'country', label: 'Country', sortable: false },
    ])

    const arrangeColumns = (newSelectedColumns: Column[]) => {
        // Define an array to hold the pre-initialized columns
        const preInitializedColumns = [
            { key: 'mcNumber', label: 'MC No', sortable: true },
            { key: 'usdot', label: 'USDOT', sortable: true },
            { key: 'legalName', label: 'Legal-Name', sortable: true },
            { key: 'telephone', label: 'Telephone', sortable: true },
            { key: 'emailAddress', label: 'Email', sortable: false },
            { key: 'approvalDate', label: 'Add Date', sortable: false },
            {
                key: 'carrierOperation',
                label: 'Operation-classification',
                sortable: false,
            },
            { key: 'dbaName', label: 'DBA Name', sortable: false },
            { key: 'street', label: 'Street', sortable: false },
            { key: 'city', label: 'City', sortable: false },
            { key: 'state', label: 'State', sortable: false },
            { key: 'zip', label: 'ZIP', sortable: false },
            { key: 'country', label: 'Country', sortable: false },
        ]

        const arrangedColumns = []

        for (const preInitColumn of preInitializedColumns) {
            const selectColumn = newSelectedColumns.find(
                (column) => column.key === preInitColumn.key
            )
            if (selectColumn) {
                arrangedColumns.push(selectColumn)
            }
        }

        for (const selectColumn of newSelectedColumns) {
            if (
                !preInitializedColumns.some(
                    (column) => column.key === selectColumn.key
                )
            ) {
                arrangedColumns.push(selectColumn)
            }
        }
        setSelectedColumns(arrangedColumns)
    }

    const [selectOpen, setSelectOpen] = useState(false)

    const ToggleSelect = () => {
        setSelectOpen(!selectOpen)
    }

    const isChecked = (name: string) => {
        const containsSpecifiedValue = selectedColumns.some((column) =>
            column.key.includes(name)
        )

        if (containsSpecifiedValue) {
            return true
        } else {
            return false
        }
    }

    const toggleColumn = (columnKey: any) => {
        let newSelectedColumns = []

        if (selectedColumns.some((col) => col.key === columnKey)) {
            // If the column with the specified key is already selected, remove it
            newSelectedColumns = selectedColumns.filter(
                (col) => col.key !== columnKey
            )
        } else {
            // If the column is not selected, add it
            const selectedColumn = columns.find(
                (column) => column.key === columnKey
            )
            if (selectedColumn) {
                newSelectedColumns = [...selectedColumns, selectedColumn]
            } else {
                newSelectedColumns = selectedColumns // No change to the array if selectedColumn is undefined
            }
        }
        arrangeColumns(newSelectedColumns)
    }

    const DownlaodData = () => {
        const tableColumnFieldsFilter = selectedColumns.map(
            (column) => column.key
        )
        const tableColumnFields = selectedColumns.map((column) => column.label)
        const csvContent = [
            tableColumnFields.join(','), // Header row
            ...FilterData.map((item) => {
                const rowData = tableColumnFieldsFilter.map((column) => {
                    switch (column) {
                        case 'mcNumber':
                            return item.mcNumber
                        case 'usdot':
                            return item.usdot
                        case 'legalName':
                            return item.legalName
                        case 'dbaName':
                            return item.dbaName
                        case 'carrierOperation':
                            return item.carrierOperation
                        case 'street':
                            return item.street
                        case 'city':
                            return item.city
                        case 'state':
                            return item.state
                        case 'zip':
                            return item.zip
                        case 'country':
                            return item.country
                        case 'telephone':
                            return item.telephone
                        case 'emailAddress':
                            return item.emailAddress
                        case 'mcs150Date':
                            return item.mcs150Date
                        case 'mcs150Mileage':
                            return item.mcs150Mileage
                        case 'mcs150MileageYear':
                            return item.mcs150MileageYear
                        case 'approvalDate':
                            return item.approvalDate
                        case 'powerUnits':
                            return item.powerUnits
                        case 'drivers':
                            return item.drivers
                        case 'operationClassification':
                            return item.operationClassification
                        case 'cargoCarried':
                            return item.cargoCarried
                        case 'inspection':
                            return item.inspection
                        case 'crashes':
                            return item.crashes
                        default:
                            return '' // Skip columns not in tableColumnFields
                    }
                })

                return rowData.join(',')
            }),
        ].join('\n')
        const blob = new Blob([csvContent], { type: 'text/csv' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'data.csv'
        a.click()
        URL.revokeObjectURL(url)
    }

    const dateChange = (date: any) => {
        const newDate = new Date(date)

        const year = newDate.getFullYear() // Get the year (e.g., 2023)
        const month = newDate.getMonth() + 1 // Get the month (0-indexed, so add 1, e.g., 9 for September)
        const day = newDate.getDate() // Get the day of the month (e.g., 2)

        // Create a formatted date string
        const formattedDate = `${year}-${month
            .toString()
            .padStart(2, '0')}-${day.toString().padStart(1, '0')}`
        dispatch(filterByDate(formattedDate))
    }

    return (
        <>
            <CarrierDbPage>
                <HeadContent>
                    <PageHeading HeadingText="Carriers" />
                    <Button
                        iconPosition="left"
                        ButtonText="Download"
                        onClick={DownlaodData}
                        color="primary"
                        icon={<Import />}
                    />
                </HeadContent>

                <Filters>
                    <Input
                        InputName="tableSearch"
                        PreContent={<SearchIcon />}
                        CustomWidth="100%"
                        InputType="text"
                        InputPlaceholder="Search here"
                    />
                    <DateDiv>
                        <Calendar
                            customStyle="h-[52px]"
                            onDateChange={dateChange}
                            wrapperClass="min-w-[194px] lg:min-w-[156px] xl:min-w-[156px] 2xl:min-w-[196px] 3xl:min-w-[200px]"
                        />
                        <CustomSelect
                            SelectHeaderClass=""
                            placeholder="OPERATION CLASSIFICATION"
                            wrapperClass="min-w-[256px] lg:min-w-[156px] xl:min-w-[156px] 2xl:min-w-[190px]  3xl:min-w-[200px]"
                            customStyle="h-[52px]"
                            onChange={(e) => {
                                dispatch(filterByOperation(e.label))
                            }}
                            options={[
                                { value: '1', label: 'Authorized For Hire' },
                                { value: '2', label: 'Exempt For Hire' },
                                { value: '3', label: 'Private(Property)' },
                                { value: '4', label: 'Priv. Pass. (Business)' },
                                { value: '5', label: 'Federal Government' },
                                { value: '6', label: 'U.S. Mail' },
                                { value: '7', label: 'Migrant' },
                                { value: '8', label: 'Indian Nation' },
                                { value: '9', label: 'State Government' },
                                { value: '10', label: 'Local Government' },
                            ]}
                        />
                        <CustomSelect
                            SelectHeaderClass=""
                            placeholder="CARGO CARRIED"
                            wrapperClass="min-w-[186px] lg:min-w-[156px] xl:min-w-[156px] 2xl:min-w-[184px] 3xl:min-w-[170px]"
                            customStyle="h-[52px]"
                            onChange={(e) => {
                                dispatch(filterByCargoCarried(e.label))
                            }}
                            options={[
                                { value: '1', label: 'General Freight' },
                                { value: '2', label: 'Household Goods' },
                                {
                                    value: '3',
                                    label: 'Metal: sheets, coils, rolls',
                                },
                                { value: '4', label: 'Motor Vehicles' },
                                { value: '5', label: 'Drive/Tow away' },
                                {
                                    value: '6',
                                    label: 'Logs, Poles, Beams, Lumber',
                                },
                                { value: '7', label: 'Building Materials' },
                                { value: '8', label: 'Mobile Homes' },
                                {
                                    value: '9',
                                    label: 'Machinery, Large Objects',
                                },
                                { value: '10', label: 'Fresh Produce' },
                                { value: '11', label: 'Liquids/Gas' },
                                { value: '12', label: 'Intermodal Cont.' },
                                { value: '13', label: 'Passengers' },
                                { value: '14', label: 'Oilfield Equipment' },
                                { value: '15', label: 'Livestock' },
                                { value: '16', label: 'Grain, Feed, Hay' },
                                { value: '17', label: 'Coal/Coke' },
                                { value: '18', label: 'Meat' },
                                { value: '19', label: 'US Mail' },
                                { value: '20', label: 'Chemicals' },
                                { value: '21', label: 'Commodities Dry Bulk' },
                                { value: '22', label: 'Refrigerated Food' },
                                { value: '23', label: 'Beverages' },
                                { value: '24', label: 'Paper Products' },
                                { value: '25', label: 'Utilities' },
                                {
                                    value: '26',
                                    label: 'Agricultural/Farm Supplies',
                                },
                                { value: '27', label: 'Construction' },
                                { value: '28', label: 'Water Well' },
                            ]}
                        />
                        <SelectBar onClick={() => ToggleSelect()}>
                            <SelectIcon />
                            <SelectPlaceHolder>Columns</SelectPlaceHolder>
                            {selectOpen ? <ArrowUp /> : <ArrowDown />}
                        </SelectBar>
                    </DateDiv>
                </Filters>
                <ContentBody>
                    <Table selectOpen={selectOpen}>
                        <DataTable
                            tableClass="text-[14px] "
                            data={FilterData ? FilterData : []}
                            columns={selectedColumns}
                        />
                    </Table>
                    <ColumnsDivContainer selectOpen={selectOpen}>
                        <ColumnsHeading>
                            <SectionHeading HeadingText="Columns" />
                        </ColumnsHeading>
                        <ColumnsDiv>
                            {columns &&
                                columns.map((col, i) => (
                                    <SingleColumn>
                                        <Checkbox
                                            key={i}
                                            checked={isChecked(col.key)}
                                            onChangeFun={toggleColumn}
                                            CheckBoxText={col.key}
                                            Linkk1={''}
                                            LinkkText={''}
                                            Linkk2={''}
                                            LinkkText2={''}
                                        />
                                    </SingleColumn>
                                ))}
                        </ColumnsDiv>
                    </ColumnsDivContainer>
                </ContentBody>
            </CarrierDbPage>
        </>
    )
}

export default CarrierDb
