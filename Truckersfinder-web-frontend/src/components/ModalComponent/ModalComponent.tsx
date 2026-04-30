import React, { useState, useRef, useEffect } from 'react'
import BidComp from '../BidPopup/BidPopup'

const ModalComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const modalRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                closeModal()
            }
        }

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isModalOpen])

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <button
                onClick={openModal}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Open Modal
            </button>

            {isModalOpen && <div>{/* <BidComp /> */}</div>}
        </div>
    )
}

export default ModalComponent
