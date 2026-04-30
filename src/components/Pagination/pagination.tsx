import { useState } from 'react'
import { css, styled } from 'styled-components'
import tw from 'twin.macro'
import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg'
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg'
import { generateArray } from '../../utils'

const Pagination = ({ numberOfPages }: { numberOfPages: number }) => {
    const [activePage, setActivePage] = useState(1)
    const _handleNextPage = () => {
        setActivePage((prev) => (prev < numberOfPages ? prev + 1 : prev))
    }
    const _handlePrevPage = () => {
        setActivePage((prev) => (prev > 1 ? prev - 1 : prev))
    }
    return (
        <div className=" justify-center flex space-x-2">
            <PaginationButton control onClick={_handlePrevPage}>
                <ArrowLeft />
            </PaginationButton>
            {generateArray(numberOfPages).map((item) => (
                <PaginationButton
                    key={item}
                    active={item === activePage}
                    onClick={() => setActivePage(item)}
                >
                    {item}
                </PaginationButton>
            ))}
            <PaginationButton control onClick={_handleNextPage}>
                <ArrowRight />
            </PaginationButton>
        </div>
    )
}

const PaginationButton = styled.button<{ active?: boolean; control?: boolean }>`
    ${tw`cursor-pointer w-9 h-9 flex items-center justify-center rounded-[3px] rounded-lg border-[none]`}
    ${(props) => css`
        ${props.control
            ? tw`bg-[#DCDCDC]`
            : props.active
            ? tw`bg-[black] text-[white]`
            : tw`bg-white`}
    `}
`
export default Pagination
