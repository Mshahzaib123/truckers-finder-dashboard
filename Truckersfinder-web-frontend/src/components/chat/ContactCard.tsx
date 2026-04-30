import React from 'react'
import { styled, css } from 'styled-components'
import tw from 'twin.macro'
import { ReactComponent as UserImg } from '../../images/userImg.svg'

type Props = {
    Img?: string,
    name?:string,
    lastMsg?:string,
    date?:string,
    unReadMsgs?:number,
    onClick?:Function | undefined
}

const CardWrapper=styled.div`
${tw `flex gap-2 py-3 px-4 pl-0 mx-2 items-center cursor-pointer relative`}
${css `

border-bottom:1px solid #15151517;

&:before{
    content:"";
    left:0;
    top:0;
    width:0%;
    height:100%;
    background-color:#26CDF0;
    position:absolute;
    transition:0.2s;

}

&:hover{
    background: linear-gradient(90deg, rgba(44, 214, 249, 0.10) 0%, rgba(44, 214, 249, 0.03) 50%);
    &:before{
        width:1%;
    }
}

`}
`


const InfoDiv=styled.div`
${tw `flex w-8/12 flex-col gap-2`}
`
const DateDiv=styled.div`
${tw `flex w-2/12 flex-col gap-3 justify-end`}
`
const ContactName=styled.label`
${tw `text-[16px] font-semibold`}
`
const Date=styled.label`
${tw `text-[16px] text-[#15151585] flex justify-end`}
`
const UnReadCount=styled.label`
${tw `text-[12px] bg-primarycolor rounded-full w-min text-white py-[5px] px-[10px]`}
`
const LastMsg=styled.label`
${tw `text-[14px] text-[#15151585]`}
`

function ContactCard({Img,name,lastMsg,date,unReadMsgs,onClick}: Props) {
    return (
    <>
    <CardWrapper onClick={()=>onClick?.(name)}>
    <UserImg className='flex w-2/12' />
    <InfoDiv>
    <ContactName>{name}</ContactName>
    <LastMsg>{lastMsg}</LastMsg>
    </InfoDiv>
    <DateDiv>
    <Date>Jun 8</Date>
    <div className='flex justify-end'>
    <UnReadCount>2</UnReadCount>
    </div>
    </DateDiv>
    </CardWrapper>
    </>
    )
}

export default ContactCard
