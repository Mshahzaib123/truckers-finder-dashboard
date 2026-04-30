import React, { useState, useEffect, useRef } from 'react'
import CustomButton from '../../components/Button/Button'
import Collapse from '../../components/Collapse'
import RadioBtn from '../../components/RadioBtn/RadioBtn'
import Calendar from '../../components/Calendar'
import CustomSelect from '../../components/Select'
import Input from '../../components/Input/Input'
import DataTable from '../../components/DataTable'
import { ReactComponent as Location } from '../../images/location.svg'
import { ReactComponent as EqBoxTuck } from '../../images/eq-box-truck.svg'
import { ReactComponent as EqFlatBed } from '../../images/eq-flatbed.svg'
import { ReactComponent as EqConestoga } from '../../images/eq-conestoga.svg'
import { ReactComponent as EqSpecialized } from '../../images/eq-specialized.svg'
import { ReactComponent as EqRGN } from '../../images/eq-RGN.svg'
import { ReactComponent as EqRefrigerated } from '../../images/eq-refrigerated.svg'
import { ReactComponent as EqStretch } from '../../images/eq-stretch.svg'
import { ReactComponent as EqLowBoy } from '../../images/eq-lowboy.svg'
import IconToolTip from '../../components/ToolTip/IconToolTip'
import styled from 'styled-components'
import tw from 'twin.macro'
import ClaimCarrier from './ClaimCarrier'
import Alert from '../../components/Alert/Alert'
const Heading = styled.span`
    ${tw`text-2xl font-semibold leading-normal mb-[22px] block`}
`
const Section = styled.section`
    ${tw`pb-[32px] mb-[32px] border-b border-border-bordercolor`}
`

const SectionHeading = styled.span`
    ${tw`text-xl font-semibold leading-normal mb-[22px] block`}
`
const TruckEventContainer = styled.div`
    ${tw`max-w-[720px] grid grid-cols-2  items-center gap-2`}
`
export const RouteTypeContainer = styled.div`
    ${tw`flex gap-5 items-center flex-wrap my-[20px]`}
`
export const Route = styled.div`
    ${tw`p-4 rounded-8 w-[auto]`}
`
const LocationDistanceContainer = styled.div`
    max-width: 720px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 12px;
`
const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
`

const EquipmentContainer = styled.div`
    ${tw`flex justify-start gap-x-1	`}
`

const sampleData = [
    {
        approval_date: '10/05/2023',
        mc_no: '123******',
        equipment: (
            <EquipmentContainer>
                <IconToolTip icon={<EqBoxTuck />} label="EqBoxTruck" />
                <IconToolTip icon={<EqConestoga />} label="EqConestoga" />
                <EqSpecialized />
            </EquipmentContainer>
        ),
        no_of_equipments: '8',
        location: 'Atlanta, GA',
    },
    {
        approval_date: '08/20/2023',
        mc_no: '456******',
        equipment: (
            <EquipmentContainer>
                <EqBoxTuck />
                <EqFlatBed />
                <EqRGN />
                <EqRefrigerated />
                <EqStretch />
                <EqConestoga />
                <EqSpecialized />
            </EquipmentContainer>
        ),
        no_of_equipments: '5',
        location: 'Chicago, IL',
    },
    {
        approval_date: '07/15/2023',
        mc_no: '789******',
        equipment: (
            <EquipmentContainer>
                <EqBoxTuck />
                <EqFlatBed />
            </EquipmentContainer>
        ),
        no_of_equipments: '14',
        location: 'Los Angeles, CA',
    },
    {
        approval_date: '09/30/2023',
        mc_no: '234******',
        equipment: (
            <EquipmentContainer>
                <EqFlatBed />
                <EqConestoga />
            </EquipmentContainer>
        ),
        no_of_equipments: '3',
        location: 'New York City, NY',
    },
    {
        approval_date: '11/12/2023',
        mc_no: '567******',
        equipment: (
            <EquipmentContainer>
                <EqBoxTuck />
                <EqFlatBed />
                <EqConestoga />
                <EqSpecialized />
            </EquipmentContainer>
        ),
        no_of_equipments: '10',
        location: 'Houston, TX',
    },
    {
        approval_date: '06/25/2023',
        mc_no: '890******',
        equipment: (
            <EquipmentContainer>
                <EqBoxTuck />
                <EqFlatBed />
                <EqLowBoy />
                <EqConestoga />
                <EqSpecialized />
            </EquipmentContainer>
        ),
        no_of_equipments: '7',
        location: 'Miami, FL',
    },
    {
        approval_date: '12/10/2023',
        mc_no: '345******',
        equipment: (
            <EquipmentContainer>
                <EqFlatBed />
                <EqConestoga />
            </EquipmentContainer>
        ),
        no_of_equipments: '11',
        location: 'San Francisco, CA',
    },
    {
        approval_date: '04/18/2023',
        mc_no: '678******',
        equipment: (
            <EquipmentContainer>
                <EqFlatBed />
                <EqConestoga />
            </EquipmentContainer>
        ),
        no_of_equipments: '4',
        location: 'Dallas, TX',
    },
    {
        approval_date: '03/08/2023',
        mc_no: '901******',
        equipment: (
            <EquipmentContainer>
                <EqFlatBed />
                <EqConestoga />
            </EquipmentContainer>
        ),
        no_of_equipments: '6',
        location: 'Seattle, WA',
    },
    {
        approval_date: '02/14/2023',
        mc_no: '123******',
        equipment: (
            <EquipmentContainer>
                <EqFlatBed />
                <EqConestoga />
            </EquipmentContainer>
        ),
        no_of_equipments: '9',
        location: 'Boston, MA',
    },
    {
        approval_date: '01/02/2023',
        mc_no: '456******',
        equipment: (
            <EquipmentContainer>
                <EqFlatBed />
                <EqConestoga />
            </EquipmentContainer>
        ),
        no_of_equipments: '10',
        location: 'Denver, CO',
    },
    {
        approval_date: '03/27/2023',
        mc_no: '789******',
        equipment: (
            <EquipmentContainer>
                <EqFlatBed />
                <EqConestoga />
            </EquipmentContainer>
        ),
        no_of_equipments: '5',
        location: 'Phoenix, AZ',
    },
    {
        approval_date: '05/08/2023',
        mc_no: '234******',
        equipment: (
            <EquipmentContainer>
                <EqFlatBed />
                <EqConestoga />
            </EquipmentContainer>
        ),
        no_of_equipments: '6',
        location: 'Philadelphia, PA',
    },
    {
        approval_date: '07/19/2023',
        mc_no: '567******',
        equipment: (
            <EquipmentContainer>
                <EqFlatBed />
                <EqConestoga />
            </EquipmentContainer>
        ),
        no_of_equipments: '12',
        location: 'San Diego, CA',
    },
    {
        approval_date: '09/14/2023',
        mc_no: '890******',
        equipment: (
            <EquipmentContainer>
                <EqFlatBed />
                <EqConestoga />
            </EquipmentContainer>
        ),
        no_of_equipments: '9',
        location: 'Las Vegas, NV',
    },
    {
        approval_date: '11/01/2023',
        mc_no: '345******',
        equipment: (
            <EquipmentContainer>
                <EqBoxTuck />
                <EqFlatBed />
                <EqLowBoy />
                <EqConestoga />
                <EqSpecialized />
            </EquipmentContainer>
        ),
        no_of_equipments: '7',
        location: 'Portland, OR',
    },
    {
        approval_date: '10/22/2023',
        mc_no: '678******',
        equipment: (
            <EquipmentContainer>
                <EqBoxTuck />
                <EqFlatBed />
                <EqLowBoy />
                <EqConestoga />
                <EqSpecialized />
            </EquipmentContainer>
        ),
        no_of_equipments: '8',
        location: 'Orlando, FL',
    },
    {
        approval_date: '08/09/2023',
        mc_no: '901******',
        equipment: (
            <EquipmentContainer>
                <EqBoxTuck />
                <EqFlatBed />
                <EqLowBoy />
                <EqConestoga />
                <EqSpecialized />
            </EquipmentContainer>
        ),
        no_of_equipments: '11',
        location: 'Nashville, TN',
    },
    {
        approval_date: '06/03/2023',
        mc_no: '123******',
        equipment: (
            <EquipmentContainer>
                <EqBoxTuck />
                <EqFlatBed />
                <EqLowBoy />
                <EqConestoga />
                <EqSpecialized />
            </EquipmentContainer>
        ),
        no_of_equipments: '4',
        location: 'Austin, TX',
    },
    {
        approval_date: '04/12/2023',
        mc_no: '456******',
        equipment: (
            <EquipmentContainer>
                <EqBoxTuck />
                <EqFlatBed />
                <EqLowBoy />
                <EqConestoga />
                <EqSpecialized />
            </EquipmentContainer>
        ),
        no_of_equipments: '13',
        location: 'Raleigh, NC',
    },
]

const columns = [
    {
        key: 'approval_date',
        label: 'Approval Date',
    },
    {
        key: 'mc_no',
        label: 'Mc No.',
        sortable: true,
    },
    {
        key: 'equipment',
        label: 'Equipment',
    },
    {
        key: 'no_of_equipments',
        label: 'Number of equipments',
    },
    {
        key: 'location',
        label: 'Location',
    },
]

const CarriesPage = () => {
    const [isToggled, setToggled] = useState(false)
    const claimRef = useRef<HTMLDivElement | null>(null)
    const tableRef = useRef<HTMLDivElement | null>(null)
    const rowClick = (data: any) => {
        setToggled(true)
    }
    const [showAlert, setShowAlert] = React.useState(false)

    const closeAlert = () => {
        setShowAlert(false)
    }
    const openAlert = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000)
    }

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            // Check if the clicked element is not a descendant of the monitored element
            if (
                claimRef.current &&
                tableRef.current &&
                !claimRef.current.contains(event.target as Node) &&
                !tableRef.current.contains(event.target as Node)
            ) {
                setToggled(false)
            }
        }

        // Add a mousedown event listener to the document
        document.addEventListener('mousedown', handleOutsideClick)

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [])

    return (
        <main className="p-6">
            <Alert
                text="Carrier Claimed successfully, please check your Claimed Carrier page"
                heading="Success"
                variant="success"
                isOpen={showAlert}
                onClose={closeAlert}
            />
            <Heading>Available Carriers</Heading>
            <Collapse headerTitle="Active filters">
                <div className="px-6">
                    <Section>
                        <SectionHeading>Approval Date</SectionHeading>
                        <Calendar
                            wrapperClass=""
                            headerClass=""
                            label="Approval date/ period"
                        />
                    </Section>
                    <Section>
                        <SectionHeading>Truck & Equipment</SectionHeading>
                        <TruckEventContainer>
                            <CustomSelect
                                SelectHeaderClass=""
                                wrapperClass=""
                                label="Truck types"
                                placeholder="Select truck types"
                                onChange={(e) => {}}
                                options={[
                                    { value: '1', label: 'One' },
                                    { value: '2', label: 'Two' },
                                    { value: '3', label: 'Three' },
                                ]}
                            />
                            <Input
                                InputClass=""
                                LableClass=""
                                LabelFor="name"
                                LabelText="Number of equipment"
                                InputName="name"
                                InputType="name"
                                InputPlaceholder="Enter the number of equipment"
                            />
                        </TruckEventContainer>
                    </Section>
                    <Section>
                        <SectionHeading>Route & Region</SectionHeading>
                        <LocationDistanceContainer>
                            <Input
                                InputClass=""
                                LableClass=""
                                LabelFor="name"
                                LabelText="Location"
                                InputName="name"
                                InputType="name"
                                InputPlaceholder="Enter the city or region"
                                PreContent={<Location />}
                            />
                            <Input
                                InputClass=""
                                LableClass=""
                                LabelFor="name"
                                LabelText="Distance"
                                InputName="name"
                                InputType="name"
                                InputPlaceholder="0"
                                PreContent="+"
                                PostContent="mi"
                            />
                        </LocationDistanceContainer>
                        <RouteTypeContainer>
                            <Route>
                                <RadioBtn
                                    CheckText="OTR"
                                    Groupname="RouteType"
                                />
                            </Route>
                            <Route>
                                <RadioBtn
                                    CheckText="Regional"
                                    Groupname="RouteType"
                                />
                            </Route>
                            <Route>
                                <RadioBtn
                                    CheckText="Local"
                                    Groupname="RouteType"
                                />
                            </Route>
                        </RouteTypeContainer>
                        <CustomSelect
                            SelectHeaderClass=""
                            wrapperClass="!w-[25%]"
                            label="Operating states"
                            placeholder="All 48 state"
                            onChange={(e) => {}}
                            options={[
                                { value: '1', label: 'One' },
                                { value: '2', label: 'Two' },
                                { value: '3', label: 'Three' },
                            ]}
                        />{' '}
                    </Section>
                    <Footer>
                        <CustomButton
                            buttonClass=""
                            color="secondary"
                            ButtonText="Clear Filters"
                        />
                        <CustomButton
                            buttonClass=""
                            color="primary"
                            ButtonText="Apply Filters"
                        />
                    </Footer>
                </div>
            </Collapse>
            <br />
            <div
                className={` transition-width ease-in-out duration-300 flex gap-4`}
            >
                <div
                    ref={tableRef}
                    className="flex-auto lg:w-[30%] xl:w-[50%] 2xl:w-[60%] 3xl:w-[100%] 4xl:w-[100%] 5xl:w-[100%]"
                >
                    <DataTable
                        columns={columns}
                        data={sampleData}
                        rowClick={rowClick}
                    />
                </div>
                <div
                    className={`flex-1 ${
                        isToggled
                            ? 'w-2/12 max-h-screen transition-max-h ease-in-out duration-800'
                            : 'hidden'
                    }`}
                >
                    <ClaimCarrier
                        ref={claimRef}
                        onClick={openAlert}
                        claimed={showAlert}
                        onClose={() => setToggled(false)}
                    />
                </div>
            </div>
        </main>
    )
}

export default CarriesPage
