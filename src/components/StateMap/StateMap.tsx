import React,{useState,useEffect} from 'react'
import styled , {css} from 'styled-components'
import tw from 'twin.macro'
import USAMap from 'react-usa-map';

const MapDiv = styled.div`
${tw`flex my-5 gap-12 w-[100%]`}
`

const CheckBox = styled.input`
    ${tw`w-[16px] rounded-xl`},
`
const CheckBoxWrapper = styled.div`
    ${tw`w-[10%] flex flex-row justify-between m-[2%] sm:gap-4 md:gap-4 lg:gap-2 xl:gap-2 2xl:gap-2 3xl:gap-2  4xl:gap-1`},
    ${css`
        input[type='checkbox'] {
            accent-color: #2cd6f9;
            color: white;
            border-radius: 0.5rem;
        }
    `}
`

type StateDataItem = {
    id: number
    clickHandler?: (event: any) => void
    fill?: string // Make 'fill' property optional
}

type StatesType = {
    [stateName: string]: StateDataItem
}

function StateMap({ onStateChange ,states }: any) {
    const [States, setStates] = useState<StatesType>(states || [])
    function generateRows() {
        const checkboxesPerRow = 3
        const stateEntries = Object.entries(States)

        const rows = []
        for (let i = 0; i < stateEntries.length; i += checkboxesPerRow) {
            const rowCheckboxes = stateEntries.slice(i, i + checkboxesPerRow)
            const row = (
                <div className="flex justify-start xl:gap-12 2xl:gap-15 3xl:gap-20 4xl:gap-20 my-1" key={i}>
                    {rowCheckboxes.map(([stateKey, stateData], index) => (
                        <CheckBoxWrapper
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                margin: 2,
                                width: '10%',
                            }}
                        >
                            <CheckBox
                                type="checkbox"
                                checked={stateData.fill ? true : false}
                                className="w-[45%]"
                            />
                            <label className="text-left">
                                {stateKey}{' '}
                                {/* Display the state key as the label */}
                            </label>
                        </CheckBoxWrapper>
                    ))}
                </div>
            )

            rows.push(row)
        }
        return rows
    }

    const statesCustomConfig = () => {
        return States
    }
    const [rows, setRows] = useState(generateRows())

    useEffect(() => {
        setRows(generateRows())
        onStateChange(States)

    }, [States,states])



    useEffect(()=>{
        const updatedStates: StatesType = { ...States };
        for (const stateName in updatedStates) {
        updatedStates[stateName].clickHandler = (event: any) =>
            stateClick(event.target.dataset);
        }
          setStates(updatedStates);

    },[])
    const stateClick = (data: { name: string }) => {
        setStates((prevStates) => {
            const stateDataItem = { ...prevStates[data.name] }

            if (stateDataItem) {
                if (stateDataItem.fill) {
                    delete stateDataItem.fill
                } else {
                    stateDataItem.fill = '#2CD6F9'
                }
            } else {
                // Handle the case when States[dataName] doesn't exist
            }

            return {
                ...prevStates,
                [data.name]: stateDataItem,
            }
        })
    }

    useEffect(()=>{

    },states)
    const mapHandler=(event: React.MouseEvent<HTMLDivElement>) => {
    };
    return (
        <MapDiv>
            {states?
            <>
               <USAMap  customize={statesCustomConfig()} onClick={(e:any)=>mapHandler(e)} />
        <div className="flex flex-col w-[45%]">{rows}</div>
        </>
            
            :""}
     

        </MapDiv>
    )
}

export default StateMap