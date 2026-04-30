import { JobHistoryCardProps } from '../../types'
import originPointSvg from '../../images/origin-point.svg'
import destinationPointSvg from '../../images/destination-point.svg'
import dashedLineSvg from '../../images/dashed-line.svg'
import calenderIconSvg from '../../images/calender-black.svg'
import truckIconSvg from '../../images/truck-black.svg'
import bagIconSvg from '../../images/bag-black.svg'
import boxIconSvg from '../../images/box-black.svg'
import moment from 'moment'
import numeral from 'numeral'

const JobHistoryCard = ({
    id,
    onClick,
    originPoint,
    destinationPoint,
    distance,
    rate,
    total,
    shipperName,
    loadNumber,
    mcNumber,
    truckType,
    startDate,
    endDate,
    active,
    cargo,
    weight,
}: JobHistoryCardProps) => {
    return (
        <div
            onClick={() => onClick(id)}
            className={`p-5 sm:p-4 rounded-16 cursor-pointer ${
                active
                    ? 'shadow-[inset_5px_0px_0px_0px_#2CD6F9] job-card-bg sm:bg-white sm:shadow-none'
                    : 'bg-white'
            }`}
        >
            <div className="grid grid-cols-5 sm:grid-cols-none justify-between border-b border-border-bordercolor pb-4 mb-5">
                <div className="grid grid-cols-3 items-center col-span-3">
                    <div className="flex items-center space-x-2">
                        <img
                            alt="origin-point"
                            src={originPointSvg}
                            className="w-6 h-6 md:w-4 md:h-4 sm:hidden object-contain object-center"
                        />
                        <div>
                            <p className="font-medium md:font-normal text-xl md:text-base">
                                {originPoint}
                            </p>
                            <p className="text-xs md:text-[10px] text-grey_01">
                                Origin point
                            </p>
                        </div>
                    </div>
                    <div className="w-max flex flex-col items-center space-y-1">
                        <p>{distance}</p>
                        <img src={dashedLineSvg} alt="dashed-line" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <img
                            alt="destination-point"
                            src={destinationPointSvg}
                            className="w-6 h-6 md:w-4 md:h-4 sm:hidden object-contain object-center"
                        />
                        <div>
                            <p className="font-medium md:font-normal text-xl md:text-base">
                                {destinationPoint}
                            </p>
                            <p className="text-xs md:text-[10px] text-grey_01">
                                Destination point
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden col-span-2 flex space-x-4 items-center justify-end">
                    <p className="text-primarycolor text-2xl md:text-base font-medium">
                        ${numeral(total).format('0,000')}
                    </p>
                    <p className="text-grey_01 text-sm md:text-xs font-medium">
                        {rate}/mi
                    </p>
                </div>
            </div>
            <div className="sm:flex justify-between items-center hidden border-b border-border-bordercolor pb-4 mb-5">
                <div className="h-10 space-y-1 font-medium">
                    <div className="flex items-center space-x-1 md:space-x-[2px]">
                        <img
                            src={calenderIconSvg}
                            alt="calender"
                            className="sm:w-[12px] sm:h-[12px]"
                        />
                        <p className="text-sm sm:text-sm">
                            {moment(startDate).format('MM/DD')} -{' '}
                            {moment(endDate).format('MM/DD')}
                        </p>
                    </div>
                    <p className="text-xs sm:text-sm text-grey_01">Date</p>
                </div>
                <div className="space-y-1">
                    <p className="text-primarycolor text-lg  font-medium">
                        ${numeral(total).format('0,000')}
                    </p>
                    <p className="text-grey_01 text-sm font-medium">
                        {rate}/mi
                    </p>
                </div>
            </div>

            <div className="sm:hidden grid grid-cols-5 items-center">
                <div className="h-10 space-y-1 font-medium">
                    <div className="flex items-center space-x-1 md:space-x-[2px]">
                        <img
                            src={calenderIconSvg}
                            alt="calender"
                            className="md:w-[10px] md:h-[10px]"
                        />
                        <p className="text-sm md:text-[11px]">
                            {moment(startDate).format('MM/DD')} -{' '}
                            {moment(endDate).format('MM/DD')}
                        </p>
                    </div>
                    <p className="text-xs md:text-[11px] text-grey_01">Date</p>
                </div>
                <div className="h-10 space-y-1 font-medium">
                    <div className="flex items-center space-x-1 md:space-x-[2px]">
                        <img
                            src={truckIconSvg}
                            alt="truck"
                            className="md:w-[10px] md:h-[10px]"
                        />
                        <p className="text-sm md:text-[11px]"> {truckType} </p>
                    </div>
                    <p className="text-xs md:text-[11px] text-grey_01">
                        Truck type
                    </p>
                </div>
                <div className="h-10 space-y-1 font-medium">
                    <div className="flex items-center space-x-1 md:space-x-[2px]">
                        <img
                            src={bagIconSvg}
                            alt="bag"
                            className="md:w-[10px] md:h-[10px]"
                        />
                        <p className="text-sm md:text-[11px]">{mcNumber} </p>
                    </div>
                    <p className="text-xs md:text-[11px] text-grey_01">MC No</p>
                </div>
                <div className="h-10 space-y-1 font-medium">
                    <div className="flex items-center space-x-1 md:space-x-[2px]">
                        <img
                            src={boxIconSvg}
                            alt="load"
                            className="md:w-[10px] md:h-[10px]"
                        />
                        <p className="text-sm md:text-[11px]"> {loadNumber} </p>
                    </div>
                    <p className="text-xs md:text-[11px] text-grey_01">
                        Load number
                    </p>
                </div>
                <div className="h-10 space-y-1 font-medium">
                    <div className="flex items-center space-x-1 md:space-x-[2px]">
                        <img
                            src={bagIconSvg}
                            alt="bag"
                            className="md:w-[10px] md:h-[10px]"
                        />
                        <p className="text-sm md:text-[11px]">
                            {' '}
                            {shipperName}{' '}
                        </p>
                    </div>
                    <p className="text-xs md:text-[11px] text-grey_01">
                        Shipper
                    </p>
                </div>
            </div>

            <div className="hidden sm:grid grid-cols-3 gap-4 items-center">
                <div className="h-10 space-y-1">
                    <p className="text-xs text-dark">{loadNumber}</p>
                    <p className="text-xs text-grey_01">Load number</p>
                </div>

                <div className="h-10 space-y-1">
                    <p className="text-xs text-dark">{mcNumber} </p>

                    <p className="text-sm text-grey_01">MC No</p>
                </div>

                <div className="h-10 space-y-1">
                    <p className="text-xs text-dark"> {shipperName} </p>

                    <p className="text-xs md:text-[11px] text-grey_01">
                        Shipper
                    </p>
                </div>
                <div className="h-10 space-y-1">
                    <div className="flex items-center space-x-1 md:space-x-[2px]">
                        <img
                            src={boxIconSvg}
                            alt="load"
                            className="md:w-[10px] md:h-[10px] sm:hidden"
                        />
                        <p className="text-xs text-dark"> {truckType} </p>
                    </div>
                    <p className="text-xs md:text-[11px] text-grey_01">
                        Truck type
                    </p>
                </div>
                <div className="h-10 space-y-1">
                    <p className="text-xs text-dark"> {weight} </p>

                    <p className="text-xs md:text-[11px] text-grey_01">
                        Weight
                    </p>
                </div>
                <div className="h-10 space-y-1">
                    <p className="text-xs text-dark"> {cargo} </p>

                    <p className="text-xs md:text-[11px] text-grey_01">Cargo</p>
                </div>
            </div>
        </div>
    )
}

export default JobHistoryCard
