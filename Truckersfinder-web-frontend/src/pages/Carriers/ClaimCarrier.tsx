import { ReactComponent as BriefIcon } from '../../images/briefcase.svg'
import { ReactComponent as Calendar } from '../../images/calendar-1.svg'
import { ReactComponent as LocationFill } from '../../images/location-fill.svg'
import { ReactComponent as EqBoxTuck } from '../../images/eq-box-truck.svg'
import React, { forwardRef } from 'react'
import CustomButton from '../../components/Button/Button'
import { ReactComponent as CloseSvg } from '../../images/close-icon.svg'

type ClaimProps = {
    onClick: () => void
    claimed: boolean
    onClose: () => void
}
const ClaimCarrier = forwardRef<HTMLDivElement, ClaimProps>(
    ({ onClick, claimed, onClose }, ref) => {
        return (
            <div className="flex flex-col bg-white" ref={ref}>
                <div className="bg-black p-4">
                    <div className="flex flex-row-reverse mb-2 cursor-pointer">
                        <CloseSvg onClick={onClose} />
                    </div>

                    <div className="flex justify-between rounded">
                        <div className="text-white">
                            <div className="flex gap-2">
                                <BriefIcon />
                                <span>155*****</span>
                            </div>
                            <span className="ml-7">MC no.</span>
                        </div>
                        <div className="text-white">
                            <div className="flex gap-2">
                                <Calendar />
                                <span className="text-white">09/12/23</span>
                            </div>
                            <span className="ml-7">Approved</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-4">
                    <div>
                        <div className="flex gap-2">
                            <LocationFill />
                            <span>Duluth, MS</span>
                        </div>
                        <span className="ml-7">Location</span>
                    </div>
                    <div className="flex mt-4 justify-start gap-4">
                        <div className="p-1 rounded bg-slate-100">AL</div>
                        <div className="p-1 rounded bg-slate-100">IN</div>
                        <div className="p-1 rounded bg-slate-100">MS</div>
                        <div className="p-1 rounded bg-slate-100">TX</div>
                    </div>
                </div>
                <hr />
                {/* <div className="flex"> */}
                <div className="flex justify-between p-4">
                    <div>
                        <div className="flex gap-2">
                            <EqBoxTuck />
                            <span>Box Truck</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2">x3</div>
                    </div>
                </div>
                {/* </div> */}
                <hr />
                <div className="flex p-4 justify-center">
                    <CustomButton
                        buttonClass=""
                        color="primary"
                        ButtonText={`${claimed ? 'Claimed' : 'Claim'}`}
                        onClick={() => onClick()}
                    />
                </div>
            </div>
        )
    }
)

export default ClaimCarrier
