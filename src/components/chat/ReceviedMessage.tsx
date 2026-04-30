import React from 'react'
import { styled } from 'styled-components'
import tw from 'twin.macro'

type Props = {
    sender?: string,
    message?:string,
    time?:string,
}

type CustomInputProps = {
    // ... other props
    messageType?: string;
  }

const MessageDiv = styled.div<CustomInputProps>(({messageType}) => [
    tw`flex justify-start`, // Apply left padding conditionally
  ]);



  const MessageWrapper=styled.div`
  ${tw `flex flex-col gap-2 py-2 px-2 pl-0 mx-2 items-start w-[50%]`}
  `
  
  const MessageCard = styled.div`
  ${tw`bg-[#F2F2F2] px-4 py-2 rounded-lg inline-block rounded-br-none text-dark max-w-[100%] break-all`}
  `;
  


const ContactName=styled.label`
${tw `text-[16px] font-semibold`}
`
const Time=styled.label`
${tw `text-[12px] font-semibold text-[#15151585]`}
`
const Msg=styled.label`
${tw `text-[16px]`}
`

function ReceivedMessage({sender,message,time}: Props) {
    return (
    <>
    <MessageDiv >
    <MessageWrapper>
    <ContactName>{sender}</ContactName>
    <div className={`flex justify-start `}>
        <MessageCard>        
        <Msg>{message}</Msg>
        </MessageCard>
        </div>
   <Time>Jun 12:41</Time>
    
    </MessageWrapper>
    </MessageDiv>
    </>
    )
}

export default ReceivedMessage
