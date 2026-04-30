import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import arrowLeftSvg from '../../images/arrow-left.svg'
import { ReactComponent as ArrowDown } from '../../images/arrow-collapse.svg'
import { ReactComponent as ArrowUp } from '../../images/arrow-up.svg'

const CollapseContainer = styled.div`
    ${tw`bg-white rounded-8`}
`

const CollapseHeader = styled.div<{ isOpen: boolean; showborder?: boolean }>`
    ${tw`flex items-center cursor-pointer justify-between p-[24px] sm:p-[6px] sm:justify-center text-2xl font-medium`}
    ${({ isOpen, showborder }) =>
        isOpen && showborder && tw`border-b border-border-bordercolor`}
`

const CollapseContent = styled.div<{ isOpen: boolean }>`
    ${tw`overflow-hidden`}
    ${({ isOpen }) =>
        isOpen
            ? tw`py-[24px] sm:absolute sm:z-10 sm:top-[54px]  sm:left-0`
            : tw`max-h-0`}
`

const CountBadge = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #2cd6f9;
    align-items: center;
    justify-content: center;
    display: flex;
`

type Props = {
    count?: number
    defaultOpen?: boolean
    headerTitle: string
    mobileTitle?: string
    children: React.ReactNode
    displayCount?: boolean
    showborder?: boolean
}

const Collapse = ({
    defaultOpen = false,
    headerTitle,
    children,
    count = 0,
    displayCount = true,
    showborder,
    mobileTitle,
}: Props) => {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <CollapseContainer className="border-[0px]">
            <CollapseHeader
                onClick={toggleCollapse}
                isOpen={isOpen}
                showborder={showborder}
            >
                <span className="flex sm:justify-center gap-3">
                    <p className="sm:hidden">{headerTitle}</p>
                    <p className="hidden sm:block">{mobileTitle}</p>
                    {displayCount && <CountBadge>{count}</CountBadge>}
                </span>
                <span className="sm:hidden">
                    {isOpen ? (
                        <ArrowUp width={24} height={24} />
                    ) : (
                        <ArrowDown width={24} height={24} />
                    )}
                </span>
            </CollapseHeader>
            <CollapseContent isOpen={isOpen}>
                <div className="sm:block hidden p-4 bg-bgShade2">
                    <img
                        src={arrowLeftSvg}
                        alt="back"
                        className="mb-4 cursor-pointer"
                        onClick={toggleCollapse}
                    />

                    <span className="flex justify-between items-center">
                        <p className="hidden sm:block text-2xl">
                            {mobileTitle}
                        </p>
                        {displayCount && <CountBadge>{count}</CountBadge>}
                    </span>
                </div>
                <div className="sm:bg-white sm:py-6 sm:rounded-t-16">
                    {children}
                </div>
            </CollapseContent>
        </CollapseContainer>
    )
}

export default Collapse
