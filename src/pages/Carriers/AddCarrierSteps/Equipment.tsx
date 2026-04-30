import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button/Button'
import tw from 'twin.macro'
import PageHeading from '../../../components/PageHeading/PageHeading'
import Input from '../../../components/Input/Input'
import { ReactComponent as Delete } from '../../../images/delete-icon.svg'
import { ReactComponent as Lb } from '../../../images/lb.svg'
import { ReactComponent as Ft } from '../../../images/ft.svg'
import 'react-international-phone/style.css'
import RadioBtn from '../../../components/RadioBtn/RadioBtn'
import FileInput from '../../../components/Input/customFileInput'
import { ReactComponent as File } from '../../../images/file-icon.svg'
import BorderButton from '../../../components/Button/BorderButton'

const OuterCard = styled.div`
    ${tw` p-[24px] bg-white mt-5 rounded-16 min-w-[650px]`}
`
const InputGroup = styled.div`
    ${tw`my-5 gap-12 sm:flex-col flex  md:flex-col  lg:flex-row xl:flex-row `}
`

const InputGroupRadio = styled.div`
    ${tw`my-5 gap-4 sm:flex-col flex  md:flex-wrap  lg:flex-wrap  lg:flex-row xl:flex-wrap 2xl:flex-wrap `}
`
const BottomButton = styled.div`
    ${tw`w-[100%] flex justify-end my-4 h-[7%] gap-4`}
`

const BottomAddButton = styled.div`
    ${tw`w-[100%] flex justify-start my-4 h-[7%]`}
`

const LargeHeading = styled.h1`
    ${tw`text-[20px] font-bold`}
`
const SmallHeading = styled.h2`
    ${tw`text-[16px] font-bold`}
`

const CardHead = styled.div`
    ${tw`flex justify-between`}
`
interface Truck {
    truckNumber: string
    insurance: File | null
    truckType: string
    capacity: {
        maxWeight: string
        length: string
    }
    driverName: string
    driverLicense: File | null
    [key: string]: string | File | null | { maxWeight: string; length: string }
}

function Equipment({ handleStep }: { handleStep: (step: number) => void }) {
    const [trucks, setTrucks] = useState<Truck[]>([
        {
            truckNumber: '',
            insurance: null,
            truckType: '',
            capacity: {
                maxWeight: '',
                length: '',
            },
            driverName: '',
            driverLicense: null,
        },
    ])

    const handleInputChange = (
        event: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
        index: number
    ) => {
        const { name, value, type } = event.target
        const updatedTrucks = [...trucks]
        if (type === 'file') {
            // Handle file input separately
            const fileInput = event.target as HTMLInputElement
            if (fileInput.files && fileInput.files.length > 0) {
                updatedTrucks[index][name] = fileInput.files[0]
            }
        } else if (name === 'maxWeight' || name === 'length') {
            // Handle nested property (capacity)
            updatedTrucks[index].capacity[name] = value
        } else {
            updatedTrucks[index][name] = value
        }

        setTrucks(updatedTrucks)
    }

    const addTruck = () => {
        setTrucks([...trucks, { ...trucks[0] }]) // Add a new truck with initial values
    }

    const handleDelete = (index: number) => {
        const updatedTrucks = [...trucks]
        if (updatedTrucks.length > 1) {
            updatedTrucks.splice(index, 1) // Remove the truck at the specified index
            setTrucks(updatedTrucks)
        }
    }

    return (
        <>
            <div className="flex flex-col w-[100%] h-[100%] EquipmentPage">
                {trucks.map((truck, index) => (
                    <OuterCard>
                        <CardHead>
                            <LargeHeading>Truck {index + 1}</LargeHeading>
                            <div
                                className="flex items-center text-red-600 text-[12px] cursor-pointer"
                                onClick={() => handleDelete(index)}
                            >
                                <Delete />
                                <p>Delete</p>
                            </div>
                        </CardHead>

                        <InputGroup>
                            <Input
                                InputPlaceholder={'Enter Truck Number'}
                                LabelFor={'Truck Number'}
                                LabelText={'Truck Number'}
                                InputName={'TruckNumber'}
                                InputType={'text'}
                            />
                            <FileInput
                                LabelFor={'Proof of Insurance'}
                                LabelText={'Proof of Insurance'}
                                InputName={'ProofOfInsurance'}
                                PostContent={<File />}
                                onFileChange={(e) =>
                                    handleInputChange(e, index)
                                }
                            />
                        </InputGroup>
                        <SmallHeading>Select Truck Type</SmallHeading>
                        <InputGroupRadio>
                            <RadioBtn
                                CheckText="Box Truck"
                                Groupname="TruckType"
                            />
                            <RadioBtn
                                CheckText="Car Hauler"
                                Groupname="TruckType"
                            />
                            <RadioBtn
                                CheckText="Hot Shot"
                                Groupname="TruckType"
                            />
                            <RadioBtn CheckText="Van" Groupname="TruckType" />
                            <RadioBtn
                                CheckText="Flat Bed"
                                Groupname="TruckType"
                            />
                            <RadioBtn
                                CheckText="Reefer"
                                Groupname="TruckType"
                            />
                            <RadioBtn
                                CheckText="Power Only"
                                Groupname="TruckType"
                            />
                        </InputGroupRadio>

                        <SmallHeading>Capacity & Size</SmallHeading>
                        <InputGroup className="w-[100%]">
                            <Input
                                InputPlaceholder={'00.00'}
                                LabelFor={'Max Weight'}
                                LabelText={'Max Weight'}
                                InputName={'MaxWeight'}
                                InputType={'text'}
                                PostContent={<Lb />}
                            />
                            <Input
                                InputPlaceholder={'00.00'}
                                LabelFor={'Length'}
                                LabelText={'Length'}
                                InputName={'Length'}
                                InputType={'text'}
                                PostContent={<Ft />}
                            />
                        </InputGroup>

                        <SmallHeading>Driver</SmallHeading>
                        <InputGroup>
                            <Input
                                InputPlaceholder={'00.00'}
                                LabelFor={'Driver Name'}
                                LabelText={'Driver Name'}
                                InputName={'DriverName'}
                                InputType={'text'}
                                PostContent={<Lb />}
                            />

                            <FileInput
                                LabelFor={'Copy of Driver’s License'}
                                LabelText={'Copy of Driver’s License'}
                                InputName={'DriverLicense'}
                                PostContent={<File />}
                                onFileChange={(e) =>
                                    handleInputChange(e, index)
                                }
                            />
                        </InputGroup>
                    </OuterCard>
                ))}
                <BottomAddButton>
                    <BorderButton
                        ButtonText="Add Truck"
                        onClick={() => {
                            addTruck()
                        }}
                    />
                </BottomAddButton>

                <BottomButton>
                    <BorderButton ButtonText="Previous" onClick={() => handleStep(2)} />

                    <Button ButtonText="NEXT" color="primary" onClick={() => handleStep(4)} />
                </BottomButton>
            </div>
        </>
    )
}

export default Equipment
