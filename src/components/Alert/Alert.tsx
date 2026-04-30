import React from 'react';
import styled, { css } from 'styled-components';

type AlertProps = {
  heading: string;
  text: string;
  isOpen: boolean;
  onClose: () => void;
  variant?: 'success' | 'error' | 'info';
};
type AlertVariantProps = {
    isOpen?: boolean;
    variant?: 'success' | 'error' | 'info';
  };

const getVariantStyles = (variant?: AlertVariantProps['variant']) => {
  switch (variant) {
    case 'success':
      return css`
        background-color: #d1f2eb;
        border-color: #4caf50;
        color: #4caf50;
      `;
    case 'error':
      return css`
        background-color: #f8d7da;
        border-color: #dc3545;
        color: #dc3545;
      `;
    case 'info':
      return css`
        background-color: #d6e9f9;
        border-color: #2196f3;
        color: #2196f3;
      `;
    default:
      return css`
        background-color: #e6f7ff;
        border-color: #1a82e2;
        color: #1a82e2;
      `;
  }
};

const AlertWrapper = styled.div<AlertVariantProps>`
  position: fixed;
  right: 1%;
  width: 300px;
  word-wrap: wrap;
  border-top: 4px solid;
  border-radius: 0 0 4px 4px;
  padding: 12px 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateX(${(props) => (props.isOpen ? '0' : '110%')});
  transition: transform 0.3s ease-in-out;
  ${(props) => getVariantStyles(props.variant)}

  .flex {
    display: flex;
    align-items: center;
  }

  .py-1 {
    margin-right: 1rem;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
};
`
const Alert: React.FC<AlertProps> = ({ heading, text, isOpen, onClose, variant }) => {
  return (
    <AlertWrapper isOpen={isOpen} variant={variant}>
      <div className="flex">
        <div className="py-1">
          <svg
            className="fill-current h-6 w-6 text-teal-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">{heading}</p>
          <p className="text-sm">{text}</p>
        </div>
      </div>
      <button onClick={onClose}>
        <svg
          className="h-4 w-4 fill-current text-teal-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 111.414-1.414L10 8.586z" />
        </svg>
      </button>
    </AlertWrapper>
  );
};

export default Alert;