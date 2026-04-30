import { styled } from 'styled-components'
import ActiveFilter from '../../components/ActiveFIlter/activeFilter'

import PageHeading from '../../components/PageHeading/PageHeading'
import SearchIcon from '../../images/search-icon2.svg'
import tw from 'twin.macro'
import { tempJobHistoryData } from '../../utils'
import JobHistoryCard from '../../components/JobHistoryCard/jobHistoryCard'
import JobHistoryRightSideBar from '../../components/JobHistoryRightSideBar/jobHistoryRightSideBar'
import { useState } from 'react'
import Pagination from '../../components/Pagination/pagination'

const JobHistoryPage = () => {
    const [activeJob, setActiveJob] = useState<string | undefined>(undefined)
    return (
        <main className="flex justify-between">
            <div className="w-full py-6 px-6 md:px-3 ">
                <PageHeading HeadingText="Job History" />
                <ActiveFilter />

                <div className="search_otr relative mt-[24px] mb-[16px] w-[294px] md:w-[60%] sm:w-full  lg:flex-1">
                    <img
                        className="search_icon absolute top-[50%] translate-y-[-50%] left-[16px] w-[16px] h-[16px] object-contain object-center"
                        src={SearchIcon}
                        alt="icon"
                    />
                    <SearchInput
                        className="theme_input"
                        type="text"
                        name="search"
                        placeholder="MC No, Shipper, Load no"
                    />
                </div>
                <div className="space-y-2 mb-8">
                    {tempJobHistoryData.map((item) => (
                        <JobHistoryCard
                            key={item.id}
                            {...item}
                            onClick={setActiveJob}
                            active={item.id === activeJob}
                        />
                    ))}
                </div>
                <Pagination numberOfPages={3} />
            </div>
            {activeJob && (
                <JobHistoryRightSideBar
                    onClose={() => setActiveJob(undefined)}
                />
            )}
        </main>
    )
}

const SearchInput = styled.input`
    ${tw`text-[14px] leading-[21px] text-textcolor1 bg-bgShade1 py-[9px] pr-[12px] border-[1px] border-transparent rounded-8`}
    padding-left: 42px !important;
`
export default JobHistoryPage
