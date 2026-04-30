import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface CalendarProps {
    startDate?: Date
    endDate?: Date
    onSelectDate: (date: Date) => void
}

const DateCalendar = styled.div`
    ${tw`w-[350px] max-w-[350px] border border-border-bordercolor rounded-8 bg-white shadow-md py-[16px] px-[12px] absolute z-50 top-[62px]`};
`

const CalendarHeader = styled.div`
    ${tw`flex justify-between items-center font-normal`};
`

const PrevButton = styled.button`
    ${tw`border-none w-[32px] h-[32px] bg-primarycolor text-white cursor-pointer rounded-6`};
`

const NextButton = styled.button`
    ${tw`border-none w-[32px] h-[32px] bg-primarycolor text-white cursor-pointer rounded-6`};
`

const CalendarDays = styled.div`
    ${tw`grid grid-cols-7 text-center font-bold border-b border-gray-300 my-4`};
`

const Day = styled.div`
    ${tw`p-1 font-semibold`};
`

const CalendarGrid = styled.div`
    ${tw`grid grid-cols-7 gap-1`};
`

const CalendarDay = styled.div<{ selected: boolean }>(({ selected }) => [
    tw`font-normal p-2 text-center cursor-pointer transition duration-200 ease-in-out hover:bg-gray-200 hover:text-black rounded-8`,
    selected && tw`bg-primarycolor text-white`,
])

const Calendar: React.FC<CalendarProps> = ({
    startDate,
    endDate,
    onSelectDate,
}) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [year, setYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth())

    const handleDateClick = (date: Date) => {
        if (
            (!startDate || date >= startDate) &&
            (!endDate || date <= endDate)
        ) {
            setSelectedDate(date)
            onSelectDate(date)
        }
    }

    const handleMonthChange = (increment: number) => {
        const newDate = new Date(year, month + increment, 1)
        setYear(newDate.getFullYear())
        setMonth(newDate.getMonth())
    }

    const handleYearChange = (increment: number) => {
        setYear(year + increment)
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    return (
        <DateCalendar className='date_calender_wrapper'>
            <CalendarHeader>
                <div className='flex items-center gap-[8px]'>
                    <PrevButton onClick={() => handleYearChange(-1)}>
                        &lt;&lt;
                    </PrevButton>
                    <PrevButton onClick={() => handleMonthChange(-1)}>
                        &lt;
                    </PrevButton>
                </div>
                <span className="font-medium text-[18px] leading-[24px]">
                    {new Date(year, month).toLocaleString(undefined, {
                        year: 'numeric',
                        month: 'long',
                    })}
                </span>
                <div className='flex items-center gap-[8px]'>
                    <NextButton onClick={() => handleMonthChange(1)}>
                        &gt;
                    </NextButton>
                    <NextButton onClick={() => handleYearChange(1)}>
                        &gt;&gt;
                    </NextButton>
                </div>
            </CalendarHeader>
            <CalendarDays>
                <Day>Sun</Day>
                <Day>Mon</Day>
                <Day>Tue</Day>
                <Day>Wed</Day>
                <Day>Thu</Day>
                <Day>Fri</Day>
                <Day>Sat</Day>
            </CalendarDays>
            <CalendarGrid>
                {[...Array(firstDayOfMonth)].map((_, index) => (
                    <div key={`empty-${index}`} className="empty-day"></div>
                ))}
                {Array.from({ length: daysInMonth }, (_, index) => {
                    const day = index + 1
                    const date = new Date(year, month, day)
                    return (
                        <CalendarDay
                            key={`day-${index}`}
                            selected={
                                selectedDate?.toDateString() ===
                                date.toDateString()
                            }
                            onClick={() => handleDateClick(date)}
                        >
                            {day}
                        </CalendarDay>
                    )
                })}
            </CalendarGrid>
        </DateCalendar>
    )
}

export { Calendar }
