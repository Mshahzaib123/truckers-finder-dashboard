import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../../components/FormHeading/PageHeading';
import { PagContentWrapper } from '../ProfilePage';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Input from '../../components/Input/Input';
import { ReactComponent as Delete } from '../../images/delete-icon.svg';
import { ReactComponent as Visa } from '../../images/visa.svg';
import CustomSelect from '../../components/Select';
import { RouteTypeContainer } from "../Carriers/CarriersPage";
import RadioBtn from '../../components/RadioBtn/RadioBtn';
import { Route } from "../Carriers/CarriersPage";
import Collapse from '../../components/Collapse';
import { styled } from 'styled-components';
import tw from 'twin.macro';
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import FileInputWithText from '../../components/CustomFileInput/CustomFileInput';
import Button from '../../components/Button/Button';
import StateMap from '../../components/StateMap/StateMap';

const DataInputsWrapper = styled.span`
    ${tw`flex flex-col gap-[24px] py-[32px] my-[32px] border-t-[1px] border-b-[1px]`}
`

const ButtonWrapper = styled.span`
    ${tw`flex flex-col gap-[24px] py-[32px] border-t-[1px] border-b-[1px]`}
`

const ContactsWrapper = styled.span`
    ${tw`flex flex-col gap-[24px] pb-[32px] my-[32px] border-b-[1px]`}

`;

const InputsWrapper = styled.div.attrs({
    className: 'input_main'
  })`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  
    .inpuy_otr {
      width: calc(30% - 12px);
      min-width: 280px;
    }
  `;

const InfoWrapper = styled.div`
  ${tw`flex flex-col gap-4`}
  

`;

const PreferencesWrapper = styled.span`
    ${tw`flex flex-col gap-[24px] my-[2px] `}
`;

const StyledTextarea = styled.textarea`
    width: 546px;
    height: 110px;
    gap: 8px;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
`

const HeadingsWrapper = styled.p`
    ${tw`font-bold font-semibold text-base leading-5`}
`

const ParagraphWrapper = styled.p`
    ${tw`font-bold font-semibold text-textcolor5 text-[14px] leading-5`}
`

const StyledButton = styled.button`
    ${tw`bg-white border border-[#38008F] text-[#38008F] hover:bg-[#38008F] font-semibold text-base leading-5 py-2 px-4 rounded text-center w-[102px] text-xs rounded-lg `}
`;
type StateDataItem = {
    id: number;
    clickHandler?: (event: any) => void;
    fill?: string; // Make 'fill' property optional
  };

type StatesType = {
    [stateName: string]: StateDataItem;
  };
const MyCarrierDetails = () => {
    const [phone, setPhone] = useState('')
    const [mcCertificate, setMcCertificate] = useState<string | null>(null)
    const [wdCertificate, setWdCertificate] = useState<string | null>(null)
    const [poi, setPoi] = useState<string | null>(null)
    const [driverLicense, setDriverLicense] = useState<string | null>(null)
    const [trucks, setTrucks] = useState([
        {
            truckNumber: '',
            proofOfInsurance: '',
            truckType: '',
            maxWeight: '',
            length: '',
            driverName: '',
            driverLicense: '',
        },
    ]);
    const [usaStates, setUsaStates] = useState<StatesType>({
        "AL": {
          id: 1,

        },
        AK: {
            id: 2,
        },
        AZ: {
            id: 3,
        },
        AR: {
            id: 4,
        },
        CA: {
            id: 5,
        },
        CO: {
            id: 6,
        },
        CT: {
            id: 7,
        },
        DE: {
            id: 8,
        },
        FL: {
            id: 9,
        },
        GA: {
            id: 10,
        },
        HI: {
            id: 11,
        },
        ID: {
            id: 12,
        },
        IL: {
            id: 13,
        },
        IN: {
            id: 14,
        },
        IA: {
            id: 15,
        },
        KS: {
            id: 16,
        },
        KY: {
            id: 17,
        },
        LA: {
            id: 18,
        },
        ME: {
            id: 19,
        },
        MD: {
            id: 20,
        },
        MA: {
            id: 21,
        },
        MI: {
            id: 22,
        },
        MN: {
            id: 23,
        },
        MS: {
            id: 24,
        },
        MO: {
            id: 25,
        },
        MT: {
            id: 26,
        },
        NE: {
            id: 27,
        },
        NV: {
            id: 28,
        },
        NH: {
            id: 29,
        },
        NJ: {
            id: 30,
        },
        NM: {
            id: 31,
        },
        NY: {
            id: 32,
        },
        NC: {
            id: 33,
        },
        ND: {
            id: 34,
        },
        OH: {
            id: 35,
        },
        OK: {
            id: 36,
        },
        OR: {
            id: 37,
        },
        PA: {
            id: 38,
        },
        RI: {
            id: 39,
        },
        SC: {
            id: 40,
        },
        SD: {
            id: 41,
        },
        TN: {
            id: 42,
        },
        TX: {
            id: 43,
        },
        UT: {
            id: 44,
        },
        VT: {
            id: 45,
        },
        VA: {
            id: 46,
        },
        WA: {
            id: 47,
        },
        WV: {
            id: 48,
        },
        WI: {
            id: 49,
        },
        WY: {
            id: 50,
        },
    })

    const removeFillFromStates = () => {
        const updatedStates = { ...usaStates };
        for (const stateName in updatedStates) {
          if (updatedStates.hasOwnProperty(stateName)) {
            delete updatedStates[stateName].fill;
          }
        }
        // Update the state with the 'fill' properties removed
        setUsaStates(updatedStates);
      };

      const addFillToStates = () => {
        const updatedStates = { ...usaStates };
        for (const stateName in updatedStates) {
          if (updatedStates.hasOwnProperty(stateName)) {
            updatedStates[stateName].fill = '#2CD6F9';
          }
        }
        // Update the state with the new 'fill' properties
        setUsaStates(updatedStates);
      };
    const addTruck = () => {
        const newTruck = { ...trucks[trucks.length - 1] }
        setTrucks([...trucks, newTruck])
    }

    const deleteTruck = (index: number) => {
        const updatedTrucks = [...trucks]
        updatedTrucks.splice(index, 1)
        setTrucks(updatedTrucks)
    }

    const handleFileInputChange = (
        certificateType: 'mc-certificate' | 'wd' | 'poi' | 'dl',
        fileName: string
    ) => {
        if (certificateType === 'mc-certificate') {
            setMcCertificate(fileName)
        } else if (certificateType === 'wd') {
            setWdCertificate(fileName)
        } else if (certificateType === 'poi') {
            setPoi(fileName)
        } else if (certificateType === 'dl') {
            setDriverLicense(fileName)
        }
    }

    return (
        <main className="p-6">
            <PageHeading HeadingText={'View Trucker'}></PageHeading>
            <div className="mt-[20px] mb-[20px]" style={{ color: '#38008F' }}>
                <Link to="/my-carriers">Back</Link>
            </div>
            <div className="profile_content flex gap-[24px]">
                <div className="profile_content_otr w-full">
                    <PagContentWrapper className="profile_content_inr mb-[40px]">
                        <div className="flex flex-col gap-[24px]">
                            <SectionHeading HeadingText="MC No." />
                            <InfoWrapper>
                                <InputsWrapper>
                                    <Input
                                        LabelFor="mc-no"
                                        LabelText="MC No."
                                        InputName="mc-no"
                                        InputType="text"
                                        InputPlaceholder="1231512"
                                    />
                                    <FileInputWithText
                                        id="mc-certificate"
                                        label="MC Certificate"
                                        name="mc-certificate"
                                        value={mcCertificate}
                                        onChange={(fileName: string) => handleFileInputChange('mc-certificate', fileName)}

                                    />
                                    <FileInputWithText
                                        id="wd"
                                        label="W-9"
                                        name="wd"
                                        value={wdCertificate}
                                        onChange={(fileName: string) => handleFileInputChange('wd', fileName)}

                                    />
                                </InputsWrapper>
                            </InfoWrapper>
                        </div>
                        <DataInputsWrapper>
                            <SectionHeading HeadingText="Main Information" />
                            <InfoWrapper>
                                <InputsWrapper>
                                    <Input
                                        LabelFor="usdot"
                                        LabelText="USDOT"
                                        InputName="usdot"
                                        InputType="usdot"
                                        InputPlaceholder="1231512"
                                    />
                                    <Input
                                        LabelFor="business-name"
                                        LabelText="Business Name"
                                        InputName="business-name"
                                        InputType="business-name"
                                        InputPlaceholder="U-T LOGISTICS LLC"
                                   
                                    />
                                    <Input
                                        LabelFor="owner-name"
                                        LabelText="Owner Name"
                                        InputName="owner-name"
                                        InputType="owner-name"
                                        InputPlaceholder="Manny Tebby"
                                    

                                    />
                                </InputsWrapper>
                            </InfoWrapper>
                        </DataInputsWrapper>
                        <ContactsWrapper>
                            <SectionHeading HeadingText="Contacts" />
                            <InfoWrapper>
                                <InputsWrapper>
                                    <Input
                                        LabelFor="email"
                                        LabelText="Email"
                                        InputName="email"
                                        InputType="email"
                                        InputPlaceholder="azukao@icloud.com"
                                    />
                                    <div className="phoneNumberInput inpuy_otr">
                                        <p>Phone Number</p>
                                        <PhoneInput defaultCountry="us" className="w-[calc(30% - 12px)]" inputClassName="phoneInput" value={phone} onChange={(phone) => setPhone(phone)}/>
                                    </div>
                                </InputsWrapper>
                                <InputsWrapper>
                                    <Input
                                        LabelFor="street-house"
                                        LabelText="Street & House"
                                        InputName="street-house"
                                        InputType="street-house"
                                        InputPlaceholder="26223 SERENITY OAKS DR -5407"
                                    />
                                    <Input
                                        LabelFor="city"
                                        LabelText="City"
                                        InputName="city"
                                        InputType="text"
                                        InputPlaceholder="RICHMOND"
                                    />
                                </InputsWrapper>
                                <InputsWrapper>
                                    <div style={{ width: "calc(30% - 12px)",minWidth:"280px" }}>
                                        <CustomSelect
                                            label="State"
                                            placeholder="Select from ..."
                                            onChange={(e) => {
                                                console.log(e)
                                            }}
                                            options={[
                                                { value: '1', label: 'TX' },
                                                { value: '2', label: 'NY' },
                                                { value: '3', label: 'SA' },
                                            ]}
                                        />
                                    </div>
                                    <Input
                                        LabelFor="zip-code"
                                        LabelText="Zip Code"
                                        InputName="zip-code"
                                        InputType="name"
                                        InputPlaceholder="0"
                                    />
                                </InputsWrapper>
                            </InfoWrapper>
                        </ContactsWrapper>
                        <PreferencesWrapper>
                            <SectionHeading HeadingText="Preferences" />
                            <InfoWrapper>
                                <InputsWrapper>
                                    <Input
                                        LabelFor="zip-code"
                                        LabelText="Max Deadhead"
                                        InputName="max_deadhead"
                                        InputType="name"
                                        InputPlaceholder="0"
                                        PostContent="mi"
                                    />
                                    <Input
                                        LabelFor="zip-code"
                                        LabelText="Ideal Mile Rate"
                                        InputName="ideal_mile_rate"
                                        InputType="name"
                                        InputPlaceholder="0"
                                        PostContent="$"
                                    />
                                </InputsWrapper>
                                <HeadingsWrapper>Pay out</HeadingsWrapper>
                                <RouteTypeContainer>
                                    <Route>
                                        <RadioBtn
                                            CheckText="Rates"
                                            Groupname="pay_out"
                                        />
                                    </Route>
                                    <Route>
                                        <RadioBtn
                                            CheckText="Weekly Fees"
                                            Groupname="pay_out"
                                        />
                                    </Route>
                                </RouteTypeContainer>
                                <InputsWrapper>
                                    <Input
                                        LabelFor="dispatcher-commission"
                                        LabelText="Dispatcher Commission"
                                        InputName="dispatcher-commission"
                                        InputType="name"
                                        InputPlaceholder="00.00"
                                        PostContent="%"
                                    />
                                </InputsWrapper>
                                <HeadingsWrapper>Route type</HeadingsWrapper>
                                <RouteTypeContainer>
                                    <Route>
                                        <RadioBtn
                                            CheckText="OTR"
                                            Groupname="range_type"
                                        />
                                    </Route>
                                    <Route>
                                        <RadioBtn
                                            CheckText="Regional"
                                            Groupname="range_type"
                                        />
                                    </Route>
                                    <Route>
                                        <RadioBtn
                                            CheckText="Local"
                                            Groupname="range_type"
                                        />
                                    </Route>
                                </RouteTypeContainer>
                                <HeadingsWrapper>
                                    Service area operation
                                </HeadingsWrapper>
                                <RouteTypeContainer>
                                    <Route>
                                        <RadioBtn CheckText="48 states" Groupname='service_area' onChange={addFillToStates}/>
                                    </Route>
                                    <Route>
                                        <RadioBtn
                                            CheckText="Pick certain states"
                                            Groupname="service_area"
                                            onChange={removeFillFromStates}
                                        />
                                    </Route>
                                </RouteTypeContainer>
                                <HeadingsWrapper>Service area operation</HeadingsWrapper>
                                <ParagraphWrapper>Pick states on the map or from the list</ParagraphWrapper>
                                <div className='w-full '>
                                <StateMap states={usaStates} onStateChange={setUsaStates}/>
                                </div>
                            </InfoWrapper>
                        </PreferencesWrapper>
                        <SectionHeading HeadingText="Equipment" />

                        {trucks.map((truck, index) => (
                            <div
                                key={index}
                                className={`mb-[0px] pb-[0px] border-[0px] ${
                                    index !== 0 ? 'border-t-[1px]' : ''
                                }`}
                            >
                                <Collapse
                                    defaultOpen={index !== 0}
                                    displayCount={false}
                                    showborder={false}
                                    headerTitle={`Truck ${index + 1}`}
                                >
                                    <InputsWrapper className="pb-[30px] bb-[0px]">
                                        <Input
                                            LabelFor={`truck-number-${
                                                index + 1
                                            }`}
                                            LabelText={`Truck Number ${
                                                index + 1
                                            }`}
                                            InputName={`Truck Number ${
                                                index + 1
                                            }`}
                                            InputType="text"
                                            InputPlaceholder="Enter Truck Number"
                                        />
                                        <FileInputWithText
                                            id={`proof-of-insurance-${
                                                index + 1
                                            }`}
                                            label="Proof of Insurance"
                                            name={`Proof of Insurance ${
                                                index + 1
                                            }`}
                                            value={poi}
                                            onChange={(fileName: string) =>
                                                handleFileInputChange(
                                                    'poi',
                                                    fileName
                                                )
                                            }
                                        />
                                    </InputsWrapper>
                                    <HeadingsWrapper>
                                        Select Truck Type
                                    </HeadingsWrapper>
                                    <RouteTypeContainer>
                                        <Route>
                                            <RadioBtn
                                                CheckText="Box Truck"
                                                Groupname="truck_type"
                                            />
                                        </Route>
                                        <Route>
                                            <RadioBtn
                                                CheckText="Car Hauler"
                                                Groupname="truck_type"
                                            />
                                        </Route>
                                        <Route>
                                            <RadioBtn
                                                CheckText="Hot Shot"
                                                Groupname="truck_type"
                                            />
                                        </Route>
                                        <Route>
                                            <RadioBtn
                                                CheckText="Van"
                                                Groupname="truck_type"
                                            />
                                        </Route>
                                        <Route>
                                            <RadioBtn
                                                CheckText="Flat Bed"
                                                Groupname="truck_type"
                                            />
                                        </Route>
                                        <Route>
                                            <RadioBtn
                                                CheckText="Reefer"
                                                Groupname="truck_type"
                                            />
                                        </Route>
                                        <Route>
                                            <RadioBtn
                                                CheckText="Power Only"
                                                Groupname="truck_type"
                                            />
                                        </Route>
                                    </RouteTypeContainer>
                                    <div className="mt-[30px]">
                                        <p className="mb-[15px]">
                                            Capacity & Size
                                        </p>
                                        <InputsWrapper>
                                            <Input
                                                LabelFor={`max-weight-${
                                                    index + 1
                                                }`}
                                                LabelText="Max Weight"
                                                InputName={`Max Weight ${
                                                    index + 1
                                                }`}
                                                InputType="name"
                                                InputPlaceholder="00.00"
                                                PostContent="lb"
                                            />
                                            <Input
                                                LabelFor={`length-${index + 1}`}
                                                LabelText="Length"
                                                InputName={`Length ${
                                                    index + 1
                                                }`}
                                                InputType="name"
                                                InputPlaceholder="00.00"
                                                PostContent="ft"
                                            />
                                        </InputsWrapper>
                                    </div>
                                    <div className="mt-[30px]">
                                        <p className="mb-[15px]">Driver</p>
                                        <InputsWrapper>
                                            <Input
                                                LabelFor={`driver-name-${
                                                    index + 1
                                                }`}
                                                LabelText="Driver Name"
                                                InputName={`Driver Name ${
                                                    index + 1
                                                }`}
                                                InputType="name"
                                                InputPlaceholder="Enter driver name"
                                                PostContent="lb"
                                            />
                                            <FileInputWithText
                                                id={`licence-${index + 1}`}
                                                label="Copy of Driver's License"
                                                name={`Driver's License ${
                                                    index + 1
                                                }`}
                                                value={driverLicense}
                                                onChange={(fileName: string) =>
                                                    handleFileInputChange(
                                                        'dl',
                                                        fileName
                                                    )
                                                }
                                            />
                                        </InputsWrapper>
                                    </div>
                                    <div
                                        className="flex items-center mt-[20px] text-xs cursor-pointer"
                                        onClick={() => deleteTruck(index)}
                                    >
                                        <Delete />
                                        <p className="text-red-500 ml-[8px]">
                                            Delete
                                        </p>
                                    </div>
                                </Collapse>
                            </div>
                        ))}

                        <ButtonWrapper className="my-[10px]">
                            <StyledButton onClick={addTruck}>
                                + Add Truck
                            </StyledButton>
                        </ButtonWrapper>

                        <div className="flex flex-col gap-[10px] mt-[10px]">
                            <SectionHeading HeadingText="Factoring" />
                            <RouteTypeContainer>
                                <Route>
                                    <RadioBtn
                                        CheckText="Yes"
                                        Groupname="factoring"
                                    />
                                </Route>
                                <Route>
                                    <RadioBtn
                                        CheckText="No"
                                        Groupname="factoring"
                                    />
                                </Route>
                            </RouteTypeContainer>
                            <InputsWrapper className="mt-[10px]">
                                <Input
                                    LabelFor="factoring-company"
                                    LabelText="Factoring Company"
                                    InputName="factoring-company"
                                    InputType="name"
                                    InputPlaceholder="Enter factoring company"
                                />
                                <div className="phoneNumberInput inpuy_otr">
                                    <p>Phone Number</p>
                                    <PhoneInput
                                        defaultCountry="us"
                                        className="w-[calc(30% - 12px)]"
                                        inputClassName="phoneInput"
                                        value={phone}
                                        onChange={(phone) => setPhone(phone)}
                                    />
                                </div>
                            </InputsWrapper>
                            <InputsWrapper className="mt-[10px]">
                                <Input
                                    LabelFor="email"
                                    LabelText="Email"
                                    InputName="email"
                                    InputType="name"
                                    InputPlaceholder="Enter Email"
                                />
                                <Input
                                    LabelFor="address"
                                    LabelText="Address"
                                    InputName="address"
                                    InputType="name"
                                    InputPlaceholder="Enter Address"
                                />
                            </InputsWrapper>
                        </div>
                        <DataInputsWrapper>
                            <SectionHeading HeadingText="Payment" />
                            <h1>Credit Card</h1>
                            <div className="border-[1px] w-[384px] h-[230px]">
                                <div className="mt-[25px] ml-[30px] flex">
                                    <div
                                        style={{ flex: '10%' }}
                                        className="mt-[30px]"
                                    >
                                        <Visa />
                                    </div>
                                    <div style={{ flex: '70%' }}>
                                        <div className="mt-[0px]">
                                            <InputsWrapper
                                                className="mt-[10px]"
                                                style={{ order: 2 }}
                                            >
                                                <Input
                                                    LabelFor="card-number"
                                                    LabelText="Card Number"
                                                    InputName="card-number"
                                                    InputType="name"
                                                    InputPlaceholder="1234 1234 1234 1234"
                                                    CustomWidth="260px"
                                                />
                                            </InputsWrapper>
                                            <div className="mt-[30px] w-[100%] flex">
                                                <InputsWrapper
                                                    style={{ order: 2 }}
                                                >
                                                    <div className="w-[100px]">
                                                        <Input
                                                            LabelFor="expiry-date"
                                                            LabelText="Expiry Date"
                                                            InputName="expiry-date"
                                                            InputType="name"
                                                            InputPlaceholder="MM/YY"
                                                            CustomWidth="123px"
                                                        />
                                                    </div>
                                                </InputsWrapper>
                                                <InputsWrapper
                                                    style={{ order: 2 }}
                                                >
                                                    <div className="ml-[35px] w-[100px]">
                                                        <Input
                                                            LabelFor="cvv"
                                                            LabelText="CVV"
                                                            InputName="cvv"
                                                            InputType="name"
                                                            InputPlaceholder="000"
                                                            CustomWidth="123px"
                                                        />
                                                    </div>
                                                </InputsWrapper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Your card will not be charged unless a load is
                                successfully dispatched for you
                            </p>
                            <h1>ACH/eCheck</h1>
                            <div className="border-[1px] w-[350px]">
                                <div className="m-[30px]">
                                    <InputsWrapper className="mt-[10px]">
                                        <Input
                                            LabelFor="routing-number"
                                            LabelText="Routing Number"
                                            InputName="routing-number"
                                            InputType="name"
                                            InputPlaceholder="0000000000000"
                                        />
                                    </InputsWrapper>
                                    <InputsWrapper className="mt-[20px]">
                                        <Input
                                            LabelFor="account-number"
                                            LabelText="Account Number"
                                            InputName="account-number"
                                            InputType="name"
                                            InputPlaceholder="00000000000000"
                                        />
                                    </InputsWrapper>
                                </div>
                            </div>
                        </DataInputsWrapper>
                        <PreferencesWrapper style={{ border: '0px' }}>
                            <SectionHeading HeadingText="Note" />
                            <div>
                                <p className="text-sm">Notes</p>
                                <StyledTextarea placeholder="Enter a note or a comment here" />
                            </div>
                        </PreferencesWrapper>
                    </PagContentWrapper>
                </div>
            </div>
            <div className="flex justify-end">
                <Button color="primary" ButtonText="Update" />
            </div>
        </main>
    )
}

export default MyCarrierDetails
