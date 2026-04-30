import React from 'react'
import { styled, css } from 'styled-components'
import tw from 'twin.macro'
import { ReactComponent as UserImg } from '../../images/userImg.svg'

type Props = {
    Img?: string,
    name?:string,
    company?:string,
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
${tw `flex w-10/12 flex-col gap-2`}
`
const ContactName=styled.label`
${tw `text-[16px] font-semibold`}
`

const Company=styled.label`
${tw `text-[14px] text-[#15151585]`}
`

function DriverCard({Img,name,company,onClick}: Props) {
    return (
    <>
    <CardWrapper onClick={()=>onClick?.(name)}>
    <UserImg className='flex w-2/12' />
    <InfoDiv>
    <ContactName>{name}</ContactName>
    <Company>{company}</Company>
    </InfoDiv>
    </CardWrapper>
    </>
    )
}

export default DriverCard
