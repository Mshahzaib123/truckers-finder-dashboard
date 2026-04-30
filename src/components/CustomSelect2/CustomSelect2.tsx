import React, { useState } from 'react';

import ArrowDown from '../../images/arrow-down.svg'
import FlagImg from '../../images/flag-img1.png'
import FlagImg2 from '../../images/flag-img2.png'

interface Option {
    text: string;
    image: string;
}
type Props = {
    headerClass:string
}

function CustomSelect2({headerClass}:Props) {
    const options: Option[] = [
        { text: "Option 1", image: FlagImg },
        { text: "Option 2", image: FlagImg2 },
        { text: "Option 3", image: FlagImg },
        { text: "Option 4", image: FlagImg },
        { text: "Option 5", image: FlagImg },
        { text: "Option 6", image: FlagImg }
    ];

    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsActive(false);
    };

    return (
        <div className="custom_select relative z-[20]">
            <div className={`${headerClass} drop_header flex items-center gap-[4px] py-[16px] px-[12px] border-[1px] border-border-bordercolor rounded-l-8`} onClick={() => setIsActive(!isActive)}>
                <img src={selectedOption.image} alt="icon" className='default_icon w-[24px] h-[24px] object-contain object-center' />
                <img className='arrow_icon w-[14px] h-[14px] object-contain object-center' src={ArrowDown} alt="arrow" />
            </div>
            {isActive && (
                <div className="drop_down absolute w-[100%]">
                    <ul className='drop_ul flex flex-col bg-light h-[150px] overflow-y-auto'>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className='dropdown_li flex items-center justify-center py-[8px] px-[12px] cursor-pointer'
                                onClick={() => handleOptionClick(option)}
                            >
                                <div className='option_content'>
                                    <img src={option.image} alt="icon" className='w-[24px] h-[24px] object-contain object-center' />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CustomSelect2;
