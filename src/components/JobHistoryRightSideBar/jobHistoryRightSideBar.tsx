import calenderWhiteSvg from '../../images/calender-white.svg'
import dollarWhiteSvg from '../../images/dollar-white.svg'
import dashedVerticalLineSvg from '../../images/dashed-vertical-line.svg'
import originPointSvg from '../../images/origin-point.svg'
import destinationPointSvg from '../../images/destination-point.svg'
import dumpTruckSvg from '../../images/truck-icon.svg'
import boxSvg from '../../images/box-icon2.svg'
import bagSvg from '../../images/bag-icon-2.svg'
import dollarSvg from '../../images/dollar-icon.svg'
import Button from '../Button/Button'
import BorderButton from '../Button/BorderButton'
import invoiceIconSvg from '../../images/invoice-icon.svg'
import routeIconSvg from '../../images/route-icon.svg'
import { Link } from 'react-router-dom'
import closeSvg from '../../images/close-icon.svg'
import PageHeading from '../PageHeading/PageHeading'
import arrowLeftSvg from '../../images/arrow-left.svg'

const JobHistoryRightSideBar = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="w-[280px] flex flex-col bg-dark sm:bg-bgShade2 sm:absolute sm:w-full">
            <div className="sm:block hidden p-4 pb-0 ">
                <img
                    src={arrowLeftSvg}
                    alt="back"
                    className="mb-4 cursor-pointer"
                    onClick={onClose}
                />
                <PageHeading HeadingText="Job History" />
            </div>
            <div className="flex sm:hidden w-full flex-row-reverse p-2">
                <img
                    alt="close"
                    src={closeSvg}
                    className="cursor-pointer w-3 h-3"
                    onClick={onClose}
                />
            </div>
            <div className="px-4 pb-4 bg-dark text-white flex justify-between sm:rounded-t-16 sm:pt-4">
                <div className="flex">
                    <div className="space-y-1">
                        <div className="flex space-x-2 md:space-x-1 items-center">
                            <img
                                src={dollarWhiteSvg}
                                alt="dollar"
                                className="w-6 h-6 md:w-5 md:h-5"
                            />
                            <p className="text-xl font-semi-bold">$800</p>
                        </div>
                        <p className="text-grey_02 text-sm ml-8 md:ml-7">
                            $2.55/mi
                        </p>
                    </div>
                </div>
                <div className="w-[1px] h-10 bg-textcolor1 sm:block hidden" />
                <div className="flex">
                    <div className="space-y-1">
                        <div className="flex space-x-2 md:space-x-1 items-center">
                            <img
                                src={calenderWhiteSvg}
                                alt="calender"
                                className="w-6 h-6 md:w-5 md:h-5"
                            />

                            <p className="text-xl font-semi-bold">09/12</p>
                        </div>
                        <p className="text-grey_02 text-sm ml-8 md:ml-7">
                            Friday
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white px-4 flex flex-col flex-1">
                <section className="py-5 border-b border-border-bordercolor">
                    <div className="flex space-x-2 items-center">
                        <img src={originPointSvg} alt="origin" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium">Cheyenne, WM</p>
                            <p className="text-[10px]  text-textcolor5">
                                4001 Anderson Road, Nashville WM 37217
                            </p>
                        </div>
                    </div>
                    <img
                        src={dashedVerticalLineSvg}
                        alt="line"
                        className="mx-[10px]"
                    />
                    <div className="flex space-x-2 items-center">
                        <img src={destinationPointSvg} alt="destination" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium">Bangor, MN</p>
                            <p className="text-[10px] text-textcolor5">
                                8642 Yule Street, Arvada MN 80007
                            </p>
                        </div>
                    </div>
                    <div className="space-y-1 mt-8">
                        <div className="flex space-x-2 items-center">
                            <img src={routeIconSvg} alt="route" />
                            <p className="text-sm font-medium">314 mi</p>
                        </div>
                        <p className="text-textcolor5 text-[10px] ml-8">
                            5h 32min
                        </p>
                    </div>
                </section>
                <section className="sm:grid grid-cols-3 sm:space-y-0 sm:gap-4 py-5 space-y-8 border-b border-border-bordercolor">
                    <div className="flex space-x-2 sm:space-x-1 items-center">
                        <img
                            src={dumpTruckSvg}
                            alt="truck"
                            className="w-6 h-6 sm:w-5 sm:h-5"
                        />
                        <p className="font-medium text-sm">Dump truck</p>
                    </div>
                    <div className="flex space-x-2 sm:space-x-1 items-center">
                        <img
                            src={boxSvg}
                            alt="box"
                            className="w-6 h-6 sm:w-5 sm:h-5"
                        />
                        <p className="font-medium text-sm">P21655231</p>
                    </div>
                    <div className="flex space-x-2 sm:space-x-1 items-center">
                        <img
                            src={bagSvg}
                            alt="bag"
                            className="w-6 h-6 sm:w-5 sm:h-5"
                        />
                        <p className="font-medium text-sm">1211514</p>
                    </div>
                    <div className="flex space-x-2 sm:space-x-1 items-center">
                        <img
                            src={dollarSvg}
                            alt="dollar"
                            className="w-6 h-6 sm:w-5 sm:h-5"
                        />
                        <p className="font-medium text-sm">$100.00</p>
                    </div>
                </section>
                <section className="py-5 space-y-4 border-b border-border-bordercolor">
                    <div className="space-y-1 text-xs font-medium text-grey_01">
                        <p className="text-dark text-sm">
                            12000 Bellaire Boulevard, Houston, TX, USA
                        </p>
                        <p>Shipper Address</p>
                    </div>
                    <div className="space-y-1 text-xs font-medium text-grey_01">
                        <p className="text-dark text-sm">2316505162</p>
                        <p>Shipper Phone</p>
                    </div>
                    <div className="space-y-1 text-xs font-medium text-grey_01">
                        <p className="text-dark text-sm">sales@chrobison.com</p>
                        <p>Shipper Email</p>
                    </div>
                    <div className="space-y-1 text-xs font-medium text-grey_01">
                        <p className="text-dark text-sm">$5.00</p>
                        <p>Charge Amount</p>
                    </div>
                </section>
                <section className="flex-1 flex flex-col items-center pb-4 pt-5 justify-end">
                    <div className="w-full flex justify-center mb-6">
                        <Link to={'/job-details/1'}>
                            <p className="text-primarycolor text-base font-medium cursor-pointer">
                                View details
                            </p>
                            <div className="bg-primarycolor w-[89px] mt-1 h-[1px]" />
                        </Link>
                    </div>

                    <BorderButton
                        ButtonText="Send invoice"
                        onClick={() => {}}
                        icon={<img alt="invoice" src={invoiceIconSvg} />}
                        iconPosition="left"
                        buttonClassName=" w-full mb-2"
                    />
                    <Button
                        color="primary"
                        ButtonText="Charge"
                        onClick={() => {}}
                        icon={<img alt="dollar" src={dollarWhiteSvg} />}
                        iconPosition="left"
                        buttonClass="w-full"
                    />
                </section>
            </div>
        </div>
    )
}

export default JobHistoryRightSideBar
