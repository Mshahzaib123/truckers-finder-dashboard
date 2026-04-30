import React, { useState } from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import { SearchInput } from '../../components/Header/Header'
import Calendar from '../../components/Calendar'
import SearchIcon from '../../images/search-icon.svg'
import { ReactComponent as Card } from '../../images/card.svg'
import { ReactComponent as GreenArrowUp } from '../../images/up-arrow-green.svg'
import { ReactComponent as DollarWallet } from '../../images/dollar-wallet-icon.svg'
import { ReactComponent as Withdraw } from '../../images/withdraw.svg'
import { ReactComponent as PendingMoney } from '../../images/pending-money.svg'
import { ReactComponent as WithdrawButton } from '../../images/withdraw-button-image.svg'
import CustomSelect from '../../components/Select'
import DataTable from '../../components/DataTable'
import { BarChart, Bar, Tooltip, XAxis, YAxis } from 'recharts'
import { styled, css } from 'styled-components'
import tw from 'twin.macro'
import StatusBadge from '../../components/StatusBadge/StatusBadge'

const Heading = styled.h1(() => [
    tw`text-[36px] font-[600] leading-[41.51px] text-black`,
])

const AmountWrapper = styled.div`
    ${tw`w-auto h-[42px] text-[29px] leading-[41.51px] font-[600]`}
`
const TitleWrapper = styled.p`
    ${tw`text-[20px] font-[400] ml-[5px] m-[auto] mb-4 text-[#B8B8B8] leading-[23.06px]`}
`
const RecipientName = styled.p`
    ${tw`text-[16px] font-[400] text-[#1B1B1A;]`}
`
const RecipientEmail = styled.p`
    ${tw`text-[14px] font-[400] text-textcolor5`}
`
function Wallet() {
    const chartData = [
        { name: 'Jan', uv: 1000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Mar', uv: 600, pv: 2400, amt: 2400 },
        { name: 'Apr', uv: 700, pv: 2400, amt: 2400 },
        { name: 'May', uv: 200, pv: 2400, amt: 2400 },
        { name: 'Jun', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Jul', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Aug', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Sep', uv: 900, pv: 2400, amt: 2400 },
    ]

    const columns = [
        {
            key: 'invoice_date',
            label: 'Invoice date',
        },
        {
            key: 'recipient',
            label: 'Recipient',
        },
        {
            key: 'amount',
            label: 'Amount',
        },
        {
            key: 'fee',
            label: 'Fee',
        },
        {
            key: 'status',
            label: 'Status',
        },
    ]

  let sampleData = [
  {
    invoice_date: '12/12/23',
    recipient:  <div className='flex flex-col gap-2'> 
    <RecipientName>Theresa Webb</RecipientName>
    <RecipientEmail>email@example.com</RecipientEmail>
    </div>,
    amount: (
      <div className='flex items-center gap-2'> <span>$1,050.24</span><GreenArrowUp /></div>
    ),
    fee: '$1.1',
    status: <StatusBadge text={"Completed"} type="completed" />
  },
  {
    invoice_date: '12/12/23',
    recipient:  <div className='flex flex-col gap-2'> 
    <RecipientName>Theresa Webb</RecipientName>
    <RecipientEmail>email@example.com</RecipientEmail>
    </div>,
    amount: (
      <div className='flex items-center gap-2'> <span>$1,050.24</span><GreenArrowUp /></div>
    ),
    fee: '$1.1',
    status: <StatusBadge text={"Pending"} type="pending" />
  },
  {
    invoice_date: '12/12/23',
    recipient:  <div className='flex flex-col gap-2'> 
    <RecipientName>Theresa Webb</RecipientName>
    <RecipientEmail>email@example.com</RecipientEmail>
    </div>,
    amount: (
      <div className='flex items-center gap-2'> <span>$1,050.24</span><GreenArrowUp /></div>
    ),
    fee: '$1.1',
    status: <StatusBadge text={"Rejected"} type="rejected" />
  },
  {
    invoice_date: '12/12/23',
    recipient:  <div className='flex flex-col gap-2'> 
    <RecipientName>Theresa Webb</RecipientName>
    <RecipientEmail>email@example.com</RecipientEmail>
    </div>,
    amount: (
      <div className='flex items-center gap-2'> <span>$1,050.24</span><GreenArrowUp /></div>
    ),
    fee: '$1.1',
    status: <StatusBadge text={"Completed"} type="completed" />
  }
  ]

    const WithDrawBtn = styled.div`
        ${tw`rounded-[8px] gap-[16px] flex justify-center w-[80%] items-center text-white text-[20px] px-[30px] py-[16px]`}
        ${css`
            border: 1px solid #fff;
            background: rgba(255, 255, 255, 0.1);
        `}
    `
    const GradientBox = styled.div`
        ${tw`
  w-[100%] rounded-[8px]  h-[auto] py-[24px] px-[16px] relative
  `}
        ${css`
            background: linear-gradient(
                94deg,
                #612cf9 0.74%,
                #2c4df9 49.69%,
                #2cd6f9 104.02%
            );
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
        `}
    `

    const StateCard = styled.div`
        ${tw`
  bg-light p-[16px] flex gap-10 items-center justify-between
  `}
        ${css`
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            border-bottom-left-radius: 0px;
        `}
    `

  const [data] = useState(sampleData)

    return (
        <div className="p-6">
            <div className="flex flex-col bg-gradient-to-b from-blue-100 h-[auto] pb-[50px] mb-[50px] bg-white">
                <div className="relative">
                    <Heading className="p-[24px] mt-2">Wallet</Heading>
                    <div className="absolute top-[20px] left-[140px] w-[20px] h-[10.35px]">
                        <Card />
                    </div>
                </div>

                <div className="mt-[50px] flex items-center lg:justify-center lg:flex-col xl:flex-col 2xl:flex-col xl:justify-center 2xl:justify-between 3xl:justify-between 4xl:justify-between p-[50px]">
                    <div className="flex items-stretch  lg:w-[100%] xl:w-[80%] 2xl:w-[50%] 3xl:w-[45%] 4xl:w-[45%] mb-3">
                        <GradientBox>
                            <div className="flex flex-col h-full justify-between ">
                                <div>
                                    <p className="font-THICCCBOI text-[20px] font-[400] leading-[23px] text-left text-white pb-[20px]">
                                        Available Money
                                    </p>
                                    <h1 className="font-THICCCBOI text-[36px] leading-[42px] text-white pb-[30px] ">
                                        $5,342.00
                                    </h1>
                                </div>
                                <WithDrawBtn>
                                    <div className='min-w-[24px]'>
                                    <WithdrawButton/>
                                    </div>
                                    <p>Withdraw</p>
                                </WithDrawBtn>
                            </div>
                        </GradientBox>
                        <div className="flex flex-col">
                            <StateCard className="rounded-tr-[8px]">
                                <div>
                                    <TitleWrapper>Withdrawn</TitleWrapper>
                                    <AmountWrapper>$7,00.00</AmountWrapper>
                                </div>
                                <Withdraw />
                            </StateCard>
                            <StateCard className="border-y-2">
                                <div>
                                    <TitleWrapper>Pending Money</TitleWrapper>
                                    <AmountWrapper>$1,050.00</AmountWrapper>
                                </div>
                                <PendingMoney />
                            </StateCard>
                            <StateCard className="rounded-br-[8px]">
                                <div>
                                    <TitleWrapper>Net Income</TitleWrapper>
                                    <AmountWrapper>$12,100.00</AmountWrapper>
                                </div>
                                <DollarWallet />
                            </StateCard>
                        </div>
                    </div>
                    <div className="lg:w-[100%] xl:w-[100%] 2xl:w-[60%]">
                        <BarChart
                            className="m-[0px] w-[100%]"
                            width={630}
                            height={370}
                            data={chartData}
                        >
                            <XAxis dataKey="name" stroke="#8884d8" />
                            <YAxis />
                            <Tooltip
                                cursor={false}
                                content={(props) =>
                                    props.active ? (
                                        <div className="w-[180px] h-[81px] rounded-[8px] p-[16px] gap-[8px]">
                                            <div className="font-[400] text-[18px]">
                                                September 2023
                                            </div>{' '}
                                            <p className="text-[20px]">
                                                $5342.00
                                            </p>
                                        </div>
                                    ) : null
                                }
                                wrapperStyle={{
                                    margin: 10,
                                    width: 180,
                                    height: 81,
                                    backgroundColor: 'white',
                                }}
                            />
                            <Bar
                                dataKey="uv"
                                fill="#2CD6F9"
                                barSize={39}
                                height={80}
                            />
                        </BarChart>
                    </div>
                </div>
            </div>
            <PageHeading
                HeadingText={'Transactions'}
                HeadingWrapperClass={''}
            ></PageHeading>
            <div className="flex justify-between gap-4 items-center">
                <div className="relative w-[366px]">
                    <img
                        className="search_icon absolute top-[50%] translate-y-[-50%] left-[16px] w-[24px] h-[24px] object-contain object-center"
                        src={SearchIcon}
                        alt="icon"
                    />
                    <SearchInput
                        className="theme_input h-[54px]"
                        type="text"
                        name="search"
                        placeholder="Search here"
                    />
                </div>
                <div className="flex space-x-4">
                    <div className="w-[232px]">
                        <Calendar label="" customStyle="h-[54px]" />
                    </div>
                    <div className="w-[232px] m-[4px]">
                        <CustomSelect
                            customStyle="w-[54px]"
                            placeholder="Status"
                            onChange={(e) => {
                                console.log(e)
                            }}
                            options={[
                                { value: '1', label: 'Completed' },
                                { value: '2', label: 'Pending' },
                                { value: '3', label: 'Rejected' },
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[20px]">
                <DataTable columns={columns} data={data} />
            </div>
        </div>

  )
}

export default Wallet
