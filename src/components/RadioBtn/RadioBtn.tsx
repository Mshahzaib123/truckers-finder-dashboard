import React from 'react'
import styled ,{css} from 'styled-components'
import tw from 'twin.macro'

const CheckLabel = styled.label(({ }) => [
    tw`text-[14px] leading-[17px] text-dark flex items-center rounded-lg gap-[12px] max-w-fit bg-bgShade3 py-[16px] px-[20px]`,
    css`
    white-space: nowrap; // Prevent text from breaking to the next line
`,
]);
const CheckInput = styled.input.attrs({
  className: "check_input w-[auto]"
})``;
type Props = {
    CheckText: string,
    Groupname:string,
    onChange?: (option: string) => void;
}
function RadioBtn({CheckText,Groupname, onChange}:Props) {
    return (
        <>
            <CheckLabel className='check_otr'>
                <CheckInput
                    id="radio1"
                    name={Groupname}
                    type="radio"
                    className="radio"
                    onChange={() => onChange?.(CheckText)}
                />
                {CheckText}
            </CheckLabel>
        </>
    )
}

export default RadioBtn