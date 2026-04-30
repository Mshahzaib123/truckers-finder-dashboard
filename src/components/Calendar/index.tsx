import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Calendar } from './Calendar'
import { ReactComponent as CalendarIcon } from '../../images/calendar.svg'
import { ReactComponent as PrimaryCalendar } from '../../images/calendar-primary.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 4px;
`

const ToggleButton = styled.div<{
    selected: boolean
    buttonCustomStyle?: string
}>(({ selected, buttonCustomStyle }) => [
    tw`bg-white py-[8px] px-[12px] md:px-[10px] rounded-8 cursor-pointer max-w-[350px] flex items-center gap-2 px-3`,
    selected ? tw`border-primarycolor border` : tw`border`,
    buttonCustomStyle ? tw`h-[54px]` : '',
])

const DateText = styled.span<{ selected: boolean }>`
    ${(props) =>
        props.selected
            ? tw`text-sm md:text-[11px] text-primarycolor`
            : tw`text-sm md:text-[11px] text-textcolor2`}

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const Label = styled.label`
    color: #3f3f3f;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
`
interface Props {
    label?: string
    classNames?: string
    customStyle?: string
    wrapperClass?: string
    headerClass?: string
    onDateChange?: Function
}
const Index = ({
    label,
    classNames,
    customStyle,
    wrapperClass,
    headerClass,
    onDateChange,
}: Props) => {
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState<Date>()

    const handleDateSelect = (date: Date) => {
        setValue(date)
        if (onDateChange) {
            onDateChange(date)
        }
        setToggle(false)
    }

    return (
        <Container className={`date_picker_comp ${wrapperClass}`}>
            <Label>{label}</Label>
            <ToggleButton
                className={`${headerClass} ${classNames}`}
                buttonCustomStyle={customStyle}
                selected={!!value}
                onClick={() => setToggle(!toggle)}
            >
                {value ? (
                    <PrimaryCalendar className="h-6 md:h-4 md:w-4" />
                ) : (
                    <CalendarIcon className="h-6 md:h-4 md:w-4" />
                )}
                <DateText selected={!!value}>
                    {value
                        ? value.toLocaleDateString()
                        : 'Select date or period'}
                </DateText>
            </ToggleButton>
            {toggle && <Calendar onSelectDate={handleDateSelect} />}
        </Container>
    )
}

export default Index
