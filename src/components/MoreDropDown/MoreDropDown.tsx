import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

import MoreIcon from '../../images/more-icon.svg'
import LocationIcon from '../../images/location_icon.svg'
import EyeIcon from '../../images/eye-icon2.svg'
import DeleteIcon from '../../images/delete-icon.svg'


const DropLi = styled.li`
    ${tw``}
`
const DropDownWrapper = styled.div`
    &:hover .drop_down_otr{
        opacity: 1;
        visibility: visible;
    }
`

type Props = {
    id: string
    bidClick: (id: string) => void
    MyCarriers?: boolean
}
function MoreDropDown({ id, bidClick, MyCarriers }: Props) {
    return (
        <DropDownWrapper className='more_dropDown_otr relative'>
            <button className="more_icon_otr flex items-center justify-end w-[100%]">
                <img className='more_icon w-[20px] max-w-[20px] h-[20px] object-contain object-center' src={MoreIcon} alt='icon'/>
            </button>
            <div className="drop_down_otr absolute z-[10] right-0 top-[13px] pt-[14px] opacity-0 invisible duration-[.3s]">
                <ul className='drop_ul bg-light rounded-8 w-[160px] border-[1px] border-border-bordercolor shadow-Shadow3'>
                    {MyCarriers === false || MyCarriers === null ? (
                        <>
                            <DropLi className='drop_li border-b-[1px] border-[#d8d8d8]'>
                                <Link to='' className='drop_linkk flex items-center gap-[8px] py-[12px] px-[8px]'>
                                    <img className='linkk_icon w-[20px] h-[20px] object-contain object-center' src={LocationIcon} alt="icon" />
                                    <span className='linkk_text text-[14px] leading-[17px] text-dark'>
                                        View map
                                    </span>
                                </Link>
                            </DropLi>
                            <DropLi className='drop_li'>
                                <button onClick={() => {
                                    bidClick(id)
                                } }
                                    className='drop_linkk flex items-center gap-[8px] py-[12px] px-[8px]'>
                                    <img className='linkk_icon w-[20px] h-[20px] object-contain object-center' src={EyeIcon} alt="icon" />
                                    <span className='linkk_text text-[14px] leading-[17px] text-dark'>
                                        Open details
                                    </span>
                                </button>
                            </DropLi>
                        </>
                    ):
                        <DropLi className='drop_li'>
                            <button onClick={() => {
                                bidClick(id)
                            } }
                                className='drop_linkk flex items-center gap-[8px] py-[12px] px-[8px]'>
                                <img className='linkk_icon w-[20px] h-[20px] object-contain object-center' src={DeleteIcon} alt="icon" />
                                <span className='linkk_text text-[14px] leading-[17px] text-dark'>
                                    Delete
                                </span>
                            </button>
                        </DropLi>
                    }

                </ul>
            </div>
        </DropDownWrapper>
    )
}

export default MoreDropDown
