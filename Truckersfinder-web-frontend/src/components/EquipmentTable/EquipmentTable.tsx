import React from 'react'
import styled from 'styled-components'


const EquipmentOtr = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`
const EquipmentIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    object-position: center;
`
const EquipmentText = styled.span`
    font-size: 14px;
    line-height: 17px;
    color: #151515;
`

type Props = {
    Icon: string,
    Text:string,
}
function EquipmentTable({Icon,Text}:Props) {
    return (
        <EquipmentOtr>
            <EquipmentIcon src={Icon} alt="icon" />
            <EquipmentText>{Text}</EquipmentText>
        </EquipmentOtr>
    )
}

export default EquipmentTable