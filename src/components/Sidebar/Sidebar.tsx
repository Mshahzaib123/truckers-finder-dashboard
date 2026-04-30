import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import tw from 'twin.macro'

import LogoImg from '../../images/brand-logo.png'
import menuIcon1 from '../../images/carrier-icon-white.svg'
import menuIcon2 from '../../images/load-icon-white.svg'
import menuIcon3 from '../../images/home-icon.svg'
import menuIcon4 from '../../images/carrier-icon.svg'
import menuIcon5 from '../../images/load-icon.svg'
import menuIcon6 from '../../images/liveload-icon.svg'
import menuIcon7 from '../../images/job-icon.svg'
import menuIcon8 from '../../images/wallet-icon.svg'
import menuIcon9 from '../../images/message-icon.svg'
import menuIcon10 from '../../images/load-icon-dark.svg'
import menuIcon11 from '../../images/carrier-icon-dark.svg'

const SidebarWrapper = styled.div.attrs({
    className:
        'sidebar_wrapper max-w-[240px] w-[100%] h-[100vh] bg-dark rounded-tr-[24px] p-[24px] sm:hidden',
})``
const LinkkText = styled.span(({}) => [tw`text-[16px] leading-[18px]`])
function Sidebar() {
    return (
        <SidebarWrapper>
            <Link to="/" className="flex pb-[20px]">
                <img
                    className="logo_img h-[60px] w-[100%] object-contain object-left"
                    src={LogoImg}
                    alt="logo"
                />
            </Link>
            <div className="menu_otr overflow-y-auto">
                <div className="action_otr">
                    <NavLink to="/add-carrier" className="btn_otr">
                        <img className="btn_icon" src={menuIcon1} alt="icon" />
                        <img
                            className="btn_hover_icon"
                            src={menuIcon11}
                            alt="icon"
                        />
                        <LinkkText className="btn_text">Add Carrier</LinkkText>
                    </NavLink>
                    <NavLink to="/create-loads" className="btn_otr">
                        <img className="btn_icon" src={menuIcon2} alt="icon" />
                        <img
                            className="btn_hover_icon"
                            src={menuIcon10}
                            alt="icon"
                        />
                        <LinkkText className="btn_text">Create Load</LinkkText>
                    </NavLink>
                </div>
                <div className="menu_inr">
                    <ul className="menu_ul">
                        <li className="menu_li">
                            <NavLink to="/carriers" className="menu_linkk">
                                <img
                                    className="menu_icon"
                                    src={menuIcon3}
                                    alt="icon"
                                />
                                <LinkkText className="menu_text">
                                    Available Carriers
                                </LinkkText>
                            </NavLink>
                        </li>
                        <li className="menu_li">
                            <NavLink to="/my-carriers" className="menu_linkk">
                                <img
                                    className="menu_icon"
                                    src={menuIcon4}
                                    alt="icon"
                                />
                                <LinkkText className="menu_text">
                                    My Carriers
                                </LinkkText>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="menu_ul">
                        <li className="menu_li">
                            <NavLink
                                to="/available-loads"
                                className="menu_linkk"
                            >
                                <img
                                    className="menu_icon"
                                    src={menuIcon5}
                                    alt="icon"
                                />
                                <LinkkText className="menu_text">
                                    Loadboard
                                </LinkkText>
                            </NavLink>
                        </li>
                        <li className="menu_li">
                            <NavLink to="/my-live-load" className="menu_linkk">
                                <img
                                    className="menu_icon"
                                    src={menuIcon6}
                                    alt="icon"
                                />
                                <LinkkText className="menu_text">
                                    My Live Loads
                                </LinkkText>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="menu_ul">
                        <li className="menu_li">
                            <NavLink to="/job-history" className="menu_linkk">
                                <img
                                    className="menu_icon"
                                    src={menuIcon7}
                                    alt="icon"
                                />
                                <LinkkText className="menu_text">
                                    Job History
                                </LinkkText>
                            </NavLink>
                        </li>
                        <li className="menu_li">
                            <NavLink to="wallet" className="menu_linkk">
                                <img
                                    className="menu_icon"
                                    src={menuIcon8}
                                    alt="icon"
                                />
                                <LinkkText className="menu_text">
                                    Wallet
                                </LinkkText>
                            </NavLink>
                        </li>
                        <li className="menu_li">
                            <NavLink to="/chat" className="menu_linkk">
                                <img
                                    className="menu_icon"
                                    src={menuIcon9}
                                    alt="icon"
                                />
                                <LinkkText className="menu_text">
                                    Messages
                                </LinkkText>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </SidebarWrapper>
    )
}

export default Sidebar
