import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

import ArrowDown from '../../images/arrow-down.svg'
import BagIcon from '../../images/bag-icon.svg'
import ProfileImg from '../../images/profile-img.png'
import brandLogoMobile from '../../images/brand-logo-mobile.png'
import hamburgerSvg from '../../images/hamburger-icon.svg'

const HeaderWrapper = styled.div.attrs({
    className:
        'header_wrapper relative z-[100]  w-[100%] py-[21px] md:py-[16px] px-[40px] lg:px-[24px] gap-[20px] md:gap-[16px]',
})``
export const SearchInput = styled.input(() => [
    tw`text-[16px] leading-[18px] text-textcolor1 bg-bgShade1 py-[13px] pl-[50px] pr-[12px] border-[1px] border-transparent rounded-8`,
])
const ProfileWrapper = styled.div`
    ${tw`relative`}
`
function Header() {
    const [dropDownState, dropDownSetState] = React.useState(false)
    const DropDownOpen = () => {
        dropDownSetState(!dropDownState)
    }
    return (
        <HeaderWrapper className="sm:bg-dark sm:rounded-b-16">
            <div className="sm:hidden flex items-center justify-between">
                <div className="search_otr relative w-[430px] lg:w-[100%] lg:flex-1">
                    {/* <img
                    className="search_icon absolute top-[50%] translate-y-[-50%] left-[16px] w-[24px] h-[24px] object-contain object-center"
                    src={SearchIcon}
                    alt="icon"
                /> */}
                </div>
                <div className="profile_icon_otr flex items-center">
                    <ProfileWrapper>
                        <button
                            className="flex items-center gap-[12px]"
                            onClick={DropDownOpen}
                        >
                            <img
                                className="profile_img w-[46px] h-[46px] rounded-10 object-cover object-center-top"
                                src={ProfileImg}
                                alt="profile"
                            />
                            <p className="profile_text flex flex-col items-start gap-[8px]">
                                <span className="user_name text-[14px] leading-[16px] text-textcolor4 flex items-center gap-[8px]">
                                    Azukalvb
                                    <img
                                        className="arrow_img w-[16px] h-[16px] object-contain object-center"
                                        src={ArrowDown}
                                        alt="profile"
                                    />
                                </span>
                                <span className="bag_text text-[12px] leading-[14px] text-textcolor3 flex items-center gap-[4px]">
                                    <img
                                        className="bag_icon w-[16px] h-[16px] object-contain object-center"
                                        src={BagIcon}
                                        alt="profile"
                                    />
                                    Legacy Logistics LLC
                                </span>
                            </p>
                        </button>
                        {dropDownState && (
                            <div className="dropDown_otr absolute top-[50px] right-0">
                                <ul className="dropDown_ul bg-light shadow-Shadow2 w-[200px] border-[1px] border-border-bordercolor rounded-8 overflow-hidden">
                                    <li className="dropDown_li border-b-[1px] border-border-bordercolor flex">
                                        <Link
                                            to="/profile"
                                            className="w-[100%] text-[16px] leading-[18px] text-dark p-[12px] duration-[.3s] hover:text-light hover:bg-primarycolor"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="dropDown_li flex">
                                        <Link
                                            to=""
                                            className="w-[100%] text-[16px] leading-[18px] text-dark p-[12px] duration-[.3s] hover:text-light hover:bg-primarycolor"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </ProfileWrapper>
                </div>
            </div>
            <div className="sm:flex hidden justify-between w-full items-center">
                <img
                    alt="logo"
                    src={brandLogoMobile}
                    className="w-[95px] h-[38px]"
                />
                <div className="flex space-x-6 items-center">
                    <img alt="hamburger" src={hamburgerSvg} />
                    <img
                        alt="profile"
                        src={ProfileImg}
                        className="w-[30px] h-[30px] rounded-full"
                    />
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header
