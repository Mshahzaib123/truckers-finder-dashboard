import React, { useState } from 'react'
import { ReactComponent as ArrowDown } from '../../images/sort-down.svg'
import { ReactComponent as ArrowUp } from '../../images/sort-up.svg'
import { ReactComponent as ArrowDownActive } from '../../images/sort-down-primary.svg'
import { ReactComponent as ArrowUpActive } from '../../images/sort-up-primary.svg'
import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg'
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg'

import styled, { css } from 'styled-components'
import tw from 'twin.macro'

interface PaginationButtonProps {
    active?: boolean // Make 'active' prop optional with a boolean type
}

const MainTable = styled.div`
    ${tw`w-full border-collapse`}
`
const TableContainer = styled.div`
    ${tw`bg-white rounded-lg xlg:overflow-auto`}
    &::-webkit-scrollbar {
        height: 5px;
        border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
        background: #38008f;
        border-radius: 0 0 12px 12px;
    }
`

const Th = styled.th`
    ${tw`h-[66px] text-left px-[8px] py-[9px]`}
`

const Td = styled.td`
    ${tw`h-[66px] text-left px-[8px] py-[9px] border-t-[#dcdcdc] h-[66px] border-t border-solid font-normal`}
`

const Pagination = styled.div`
    ${tw`flex justify-center gap-[8px]`}
`

const PaginationButton = styled.button<PaginationButtonProps>`
    ${tw`bg-[white] cursor-pointer flex items-center justify-center w-[36px] h-[36px] rounded-[3px] rounded-lg border-[none]`}
    ${(props) =>
        props.active &&
        css`
            ${tw`bg-[black] text-[white]`}
        `}
`

const RecordPerPage = styled.div`
    ${tw`flex items-center gap-[12px]`}
`

const RecordPerPageSelect = styled.select`
    ${tw`cursor-pointer bg-[white] p-[8px] rounded-[4px] rounded-lg`}
    border: none;
    outline: none;
`

const RecordPerPageSpan = styled.span`
    ${tw`text-textcolor2 font-normal text-base`}
`

type Props = {
    data: Array<{ [key: string]: any }>
    // columns : string[];
    columns: {
        key: string
        label: string
        className?: string
        sortable?: boolean
        index?: number
    }[]
    rowClick?: Function
    tableClass?: string
}

const DataTable = ({ data, columns, rowClick, tableClass }: Props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const totalPages = Math.ceil(data.length / itemsPerPage)

    const [sortColumn, setSortColumn] = useState<string>('')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage)
    }

    const handleSort = (columnKey: string) => {
        if (columnKey === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSortColumn(columnKey)
            setSortDirection('asc')
        }
    }

    const handleItemsPerPageChange = (value: number) => {
        setCurrentPage(1)
        setItemsPerPage(value)
    }

    const paginatedData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const sortedData = sortColumn
        ? [...paginatedData].sort((a, b) =>
              sortDirection === 'asc'
                  ? a[sortColumn] < b[sortColumn]
                      ? -1
                      : 1
                  : a[sortColumn] > b[sortColumn]
                  ? -1
                  : 1
          )
        : [...paginatedData]

    return (
        <MainTable className={tableClass}>
            <TableContainer>
                <table className="w-full">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <Th
                                    key={column.key}
                                    onClick={() =>
                                        column.sortable &&
                                        handleSort(column.key)
                                    }
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium text-neutral-700">
                                            {column.label}
                                        </span>
                                        <span>
                                            {sortColumn === column.key && (
                                                <span className="flex flex-col gap-1 ml-1">
                                                    {sortDirection === 'asc' ? (
                                                        <ArrowUpActive />
                                                    ) : (
                                                        <ArrowUp />
                                                    )}
                                                    {sortDirection ===
                                                    'desc' ? (
                                                        <ArrowDownActive />
                                                    ) : (
                                                        <ArrowDown />
                                                    )}
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                </Th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-[#f0f9ff] relative data_table_row ${
                                    rowClick ? 'cursor-pointer' : ''
                                } `}
                                onClick={() => rowClick && rowClick(row)}
                            >
                                {columns.map((column) => (
                                    <Td key={column.key}>
                                        {column.key === 'actions'
                                            ? row.actions && (
                                                  <div className="flex justify-between">
                                                      {row.actions.map(
                                                          (
                                                              action: any,
                                                              index: number
                                                          ) => (
                                                              <button
                                                                  className="flex items-center gap-[8px]"
                                                                  onClick={() =>
                                                                      action.onClick(
                                                                          row
                                                                      )
                                                                  }
                                                                  key={index}
                                                              >
                                                                  <span
                                                                      className={`${action.className} text-primarycolor text-[16px] leading-[18px] underline`}
                                                                  >
                                                                      {
                                                                          action.label
                                                                      }
                                                                  </span>
                                                              </button>
                                                          )
                                                      )}
                                                  </div>
                                              )
                                            : row[column.key]}
                                    </Td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableContainer>

            <div className="flex items-center justify-between mt-[32px]">
                <RecordPerPage>
                    <RecordPerPageSpan>Show entries</RecordPerPageSpan>
                    <RecordPerPageSelect
                        value={itemsPerPage}
                        onChange={(e) =>
                            handleItemsPerPageChange(Number(e.target.value))
                        }
                    >
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </RecordPerPageSelect>
                </RecordPerPage>
                <Pagination>
                    {currentPage > 1 && (
                        <PaginationButton
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <ArrowLeft />
                        </PaginationButton>
                    )}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <PaginationButton
                            key={index}
                            active={currentPage === index + 1}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </PaginationButton>
                    ))}
                    {currentPage < totalPages && (
                        <PaginationButton
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            <ArrowRight />
                        </PaginationButton>
                    )}
                </Pagination>
            </div>
        </MainTable>
    )
}

export default DataTable
