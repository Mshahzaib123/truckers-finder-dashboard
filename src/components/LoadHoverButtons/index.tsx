import React from 'react'
import CallIcon from '../../images/call-icon.svg'

type Props = {
    id: string
    bidClick: (id: string) => void
}

const LoadTableHoverButtons = ({ id, bidClick }: Props) => {
    return (
        <div className="action_otr flex gap-[8px] invisible opacity-0">
            <button className="call_btn p-[8px] rounded-8 bg-primarylight2">
                <img className="call_icon" src={CallIcon} alt="icon" />
            </button>
            <div className="bid_btn_otr">
                <button
                    className="bid_btn text-[14px] leading-[17px] text-light py-[7px] px-[22px] rounded-8 bg-primarycolor"
                    onClick={() => {
                        bidClick(id)
                    }}
                >
                    Bid
                </button>
            </div>
        </div>
    )
}

export default LoadTableHoverButtons
