import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const InputLabel = styled.label(() => [
    tw`text-[12px] leading-[15px] text-textcolor1`,
])

const InputWrapper = styled.div.attrs({
    className: 'phoneNumberInput inpuy_otr mt-[-6px]',
})``

type Props = {
onChange: (phone: string) => void,
value:string
}

function InnPhoneInput({
    onChange,
    value
  }: Props) {

  
    return (
      <InputWrapper className='phoneNumberInput inpuy_otr'>
        <InputLabel>Phone Number</InputLabel>
        <PhoneInput
          defaultCountry="us"
          inputClassName="phoneInput"
          value={value}
          onChange={onChange} // Pass the event handler function
        />
      </InputWrapper>
    );
  }

export default InnPhoneInput
