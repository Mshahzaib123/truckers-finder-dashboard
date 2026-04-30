import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    CheckBoxText: string
    Linkk1?: string
    LinkkText?: string
    Linkk2?: string
    LinkkText2?: string
    checked?: boolean
    onChangeFun?: (value: any) => void
}
function Checkbox({
    CheckBoxText,
    Linkk1,
    LinkkText,
    Linkk2,
    LinkkText2,
    onChangeFun,
    checked = false,
}: Props) {
    return (
        <label className="checkbox">
            <input
                type="checkbox"
                name="color"
                value="red"
                id="red"
                checked={checked}
                onChange={
                    onChangeFun ? (e) => onChangeFun(CheckBoxText) : undefined
                }
            />
            <span className="checkmark"></span>
            <p>
                {CheckBoxText}
                {Linkk1 && LinkkText && (
                    <Link to={Linkk1} className="inline text-primarycolor">
                        {LinkkText}
                    </Link>
                )}
                {Linkk2 && LinkkText2 && (
                    <Link to={Linkk2} className="inline text-primarycolor">
                        {LinkkText2}
                    </Link>
                )}
            </p>
        </label>
    )
}

export default Checkbox
