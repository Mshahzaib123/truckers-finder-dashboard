import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button/Button'
import tw from 'twin.macro'
import Input from '../../../components/Input/Input'
import { ReactComponent as MI } from '../../../images/mi.svg'
import { ReactComponent as Dollar } from '../../../images/dollar.svg'
import { ReactComponent as Percent } from '../../../images/percent.svg'
import 'react-international-phone/style.css'
import RadioBtn from '../../../components/RadioBtn/RadioBtn'
import BorderButton from '../../../components/Button/BorderButton'
import StateMap from '../../../components/StateMap/StateMap'

const OuterCard = styled.div`
    ${tw` p-[24px] bg-white rounded-16  sm:min-w-[100%]`}
`
const InputGroup = styled.div`
    ${tw`my-5 gap-12 sm:flex-col flex  md:flex-col  lg:flex-row xl:flex-row `}
`
const BottomButton = styled.div`
    ${tw`w-[100%] flex justify-end my-4 h-[7%] gap-4 min-w-[300px]`}
`

const LargeHeading = styled.h1`
    ${tw`text-[20px] font-bold`}
`
const SmallHeading = styled.h2`
    ${tw`text-[16px] font-bold`}
`

type StateDataItem = {
  id: number;
  clickHandler?: (event: any) => void;
  fill?: string; // Make 'fill' property optional
};

type StatesType = {
  [stateName: string]: StateDataItem;
};




function Preferences({ handleStep }: { handleStep: (step: number) => void }) {
  const [, setSelectedServiceArea] = useState('')
  const [usaStates, setUsaStates] = useState<StatesType>({
    "AL": {
      id: 1,

    },
    "AK": {
id: 2,

    },
    "AZ": {
id: 3,

    },
    "AR": {
id: 4,

    },
    "CA": {
id: 5,

    },
    "CO": {
id: 6,

    },
    "CT": {
id: 7,

    },
    "DE": {
id: 8,

    },
    "FL": {
id: 9,

    },
    "GA": {
id: 10,

    },
    "HI": {
id: 11,

    },
    "ID": {
id: 12,

    },
    "IL": {
id: 13,

    },
    "IN": {
id: 14,

    },
    "IA": {
id: 15,

    },
    "KS": {
id: 16,

    },
    "KY": {
id: 17,

    },
    "LA": {
id: 18,

    },
    "ME": {
id: 19,

    },
    "MD": {
id: 20,

    },
    "MA": {
id: 21,

    },
    "MI": {
id: 22,

    },
    "MN": {
id: 23,

    },
    "MS": {
id: 24,

    },
    "MO": {
id: 25,

    },
    "MT": {
id: 26,

    },
    "NE": {
id: 27,

    },
    "NV": {
id: 28,

    },
    "NH": {
id: 29,

    },
    "NJ": {
id: 30,

    },
    "NM": {
id: 31,

    },
    "NY": {
id: 32,

    },
    "NC": {
id: 33,

    },
    "ND": {
id: 34,

    },
    "OH": {
id: 35,

    },
    "OK": {
id: 36,

    },
    "OR": {
id: 37,

    },
    "PA": {
id: 38,

    },
    "RI": {
id: 39,

    },
    "SC": {
id: 40,

    },
    "SD": {
id: 41,

    },
    "TN": {
id: 42,

    },
    "TX": {
id: 43,

    },
    "UT": {
id: 44,

    },
    "VT": {
id: 45,

    },
    "VA": {
id: 46,

    },
    "WA": {
id: 47,

    },
    "WV": {
id: 48,

    },
    "WI": {
id: 49,

    },
    "WY": {
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
  
    const handleOnChange = (option: any) => {
        removeFillFromStates()
      setSelectedServiceArea(option)
    } 

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

 



    console.log("usa states",usaStates);
    return (
        <>
            <div className="flex flex-col w-[100%] h-[100%] PreferencesPage">
                <OuterCard>
                    <LargeHeading>Preferences</LargeHeading>

                    <InputGroup>
                        <Input
                            InputPlaceholder={'00.00'}
                            LabelFor={'Max Deadhead'}
                            LabelText={'Max Deadhead'}
                            InputName={'MaxDeadhead'}
                            InputType={'text'}
                            PostContent={<MI />}
                        />
                        <Input
                            InputPlaceholder={'00.00'}
                            LabelFor={'Ideal Mile Rate'}
                            LabelText={'Ideal Mile Rate'}
                            InputName={'IdealMileRate'}
                            InputType={'text'}
                            PostContent={<Dollar />}
                        />
                    </InputGroup>

                    <SmallHeading>Pay Out</SmallHeading>
                    <InputGroup>
                        <RadioBtn CheckText="Rates" Groupname="PayOut" />
                        <RadioBtn CheckText="Weekly Fees" Groupname="PayOut" />
                    </InputGroup>
                    <InputGroup>
                        <Input
                            InputPlaceholder={'00.00'}
                            LabelFor={'Dispatcher Commission'}
                            LabelText={'Dispatcher Commission'}
                            InputName={'DispatcherCommission'}
                            InputType={'text'}
                            PostContent={<Percent />}
                            CustomWidth='47%'
                        />
                    </InputGroup>

                    <SmallHeading>Route type</SmallHeading>
                    <InputGroup>
                        <RadioBtn CheckText="OTR" Groupname="RouteType" />
                        <RadioBtn CheckText="Regional" Groupname="RouteType" />
                        <RadioBtn CheckText="Local" Groupname="RouteType" />
                    </InputGroup>

                    <SmallHeading>Service area operation</SmallHeading>
                    <InputGroup>
                        <RadioBtn
                            CheckText="48 states"
                            Groupname="ServiceArea"
                            onChange={addFillToStates}
                        />
                        <RadioBtn
                            CheckText="Pick certain states"
                            Groupname="ServiceArea"
                            onChange={handleOnChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <StateMap states={usaStates} onStateChange={setUsaStates}/>
                    </InputGroup>
                </OuterCard>
                <BottomButton>
                    <BorderButton
                        ButtonText="Previous"
                        onClick={() => handleStep(1)}
                    />
                    <Button
                        ButtonText="NEXT"
                        color="primary"
                        onClick={() => handleStep(3)}
                    />
                </BottomButton>
            </div>
        </>
    )
}

export default Preferences
