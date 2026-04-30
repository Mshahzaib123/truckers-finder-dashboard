import React, { useState, useRef, ReactNode } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { ReactComponent as ArrowDown } from '../../images/arrow-collapse.svg'
import { ReactComponent as ArrowUp } from '../../images/arrow-up.svg'

export interface Option {
    value: string
    label: string
}

type Props = {
    options: Option[]
    value?: Option
    onChange: (option: Option) => void
    icon?: ReactNode
    placeholder?: string
    label?: string
    SelectHeaderClass?: string
    wrapperClass?: string
    customStyle?: string
}

const Select = styled.div<{ selected: boolean; customStyle?: string }>(
    ({ selected, customStyle }) => [
        tw`flex items-center justify-between px-3 md:px-1 cursor-pointer text-gray-700 text-base md:text-xs font-normal bg-white rounded-lg h-[40px]`,
        selected ? tw`border-primarycolor border` : tw`border`,
        customStyle ? tw`h-[54px]` : '',
    ]
)

const SelectedValue = styled.div<{ selected: boolean }>(({ selected }) => [
    tw`flex-1 text-[14px] md:text-[10px] leading-[18px] font-normal`,
    selected ? tw`text-primarycolor` : tw`text-[#1B1B1A]`,
    `
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    `,
])

const DropdownIcon = styled.div`
    ${tw`ml-2`}
`

const OptionsContainer = styled.div`
    ${tw`absolute z-50 top-full left-0 w-full bg-white rounded-lg shadow-md`}
`

const OptionsList = styled.ul`
    ${tw`list-none p-0 m-0 max-h-48 overflow-y-auto rounded-lg hover:bg-primarycolor hover:text-white`}
`

const OptionItem = styled.li`
    ${tw`p-2 cursor-pointer text-base rounded-lg transition duration-300 hover:bg-primarycolor`}
`
const Label = styled.label`
    color: #3f3f3f;
    font-style: normal;
`
const CustomSelect = ({
    options,
    value,
    onChange,
    icon,
    placeholder = 'Select an option',
    label,
    SelectHeaderClass,
    wrapperClass,
    customStyle,
}: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSelectClick = () => {
        setIsOpen(!isOpen)
        if (isOpen && inputRef.current) {
            inputRef.current.blur()
        } else if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const handleOptionSelect = (option: Option) => {
        onChange(option)
        setIsOpen(false)
    }

    return (
        <div className={`${wrapperClass} relative text-left custom_select2`}>
            <Label className="text-xs font-medium leading-[15px]">
                {label}
            </Label>
            <Select
                selected={!!value}
                onClick={handleSelectClick}
                className={`select_header ${SelectHeaderClass} ${
                    isOpen ? 'open' : ''
                }`}
                customStyle={customStyle}
            >
                <div className="space-x-2 flex items-center">
                    {icon && icon}
                    <SelectedValue className="header_text" selected={!!value}>
                        {value ? value.label : placeholder}
                    </SelectedValue>
                </div>
                <DropdownIcon className="select_icon">
                    {isOpen ? <ArrowUp /> : <ArrowDown />}
                </DropdownIcon>
            </Select>
            {isOpen && (
                <OptionsContainer>
                    <OptionsList>
                        {options.map((option) => (
                            <OptionItem
                                key={option.value}
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option.label}
                            </OptionItem>
                        ))}
                    </OptionsList>
                </OptionsContainer>
            )}
        </div>
    )
}

export default CustomSelect
