import React from 'react';
import styled from 'styled-components';
import BorderButton from '../Button/BorderButton';
const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContainer = styled.div`
  background-color: white;
  max-width: 90%;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 51;
`;

type Props = {
  setShowPopup?: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string | undefined
  deleteElement?: (id: string) => void | undefined
};

function CarrierAlertModal({ setShowPopup, deleteElement, id }: Props) {
  const handleClosePopup = () => {
    if (setShowPopup) {
      setShowPopup(false);
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <div className="modal-header rounded-t-[8px] bg-black text-white py-4 text-center">
          <h1 className="text-2xl font-bold">Delete Carrier</h1>
        </div>
        <div className="modal-content p-6">
          <div className="modal-body">
            <p className="text-sm text-gray-700 text-center">
              Are you sure you want to delete the carrier?
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <BorderButton ButtonText='Cancel' onClick={handleClosePopup}/>
     
          <button
            className="text-[14px] leading-[16px] py-[16px] px-[12px] rounded-8 min-w-[150px] bg-red-500 text-white hover:bg-red-600 focus:outline-none"
            type="button"
            onClick={() => id && deleteElement && deleteElement(id)}
            >
            Delete
          </button>
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default CarrierAlertModal;
