import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const CustomSelectWrapper = styled.div`
  ${tw`relative inline-block text-gray-700`}
`;

const CustomSelectButton = styled.button`
  ${tw`border border-gray-300 bg-white text-textcolor5 text-[14px] leading-[18px] py-[11px] px-[12px] rounded-8 focus:outline-none focus:border-blue-500`}
`;

const CustomSelectOptions = styled.div<{ isOpen: boolean }>`
  ${tw`absolute left-0 top-[46px] max-h-[160px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10`}
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const CustomOption = styled.div`
  ${tw`cursor-pointer justify-center hover:bg-gray-100 py-[8px] px-[12px]`}
`;

const InputLabel = styled.label(() => [
  tw`text-[12px] leading-[15px] font-medium text-textcolor1`,
]);

interface TimePickerProps {
  onChange: (selectedTime: string) => void;
  LabelFor: string;
  LabelText: string;
  timePickerClass: string
  headerText: string
}

function TimePicker({ onChange, LabelFor, LabelText,timePickerClass,headerText }: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('00:00');

  const timeOptions = Array.from({ length: 24 * 4 }, (_, i) => {
    const hour = Math.floor(i * 15 / 60).toString().padStart(2, '0');
    const minute = (i * 15 % 60).toString().padStart(2, '0');
    return `${hour}:${minute}`;
  });

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (time: string) => {
    setSelectedTime(time);
    onChange(time);
    setIsOpen(false);
  };

  return (
    <div className={`custom_time_picker w-[100%] flex flex-col gap-[4px] ${timePickerClass}`}>
      <InputLabel className='time_label' htmlFor={LabelFor}>{LabelText}</InputLabel>
      <CustomSelectWrapper className='time_wrapper'>
        <CustomSelectButton className={`time_btn ${headerText}`} onClick={handleSelectClick}>
          {selectedTime}
        </CustomSelectButton>
        <CustomSelectOptions className='time_option_otr' isOpen={isOpen}>
          {timeOptions.map((time) => (
            <CustomOption
              className='time_option border-b-[1px] border-[#d8d8d8] last-of-type:border-[0px]'
              key={time}
              onClick={() => handleOptionClick(time)}
            >
              {time}
            </CustomOption>
          ))}
        </CustomSelectOptions>
      </CustomSelectWrapper>
    </div>
  );
}

export default TimePicker;
