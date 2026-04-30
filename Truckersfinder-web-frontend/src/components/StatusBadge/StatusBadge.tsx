import React from 'react';
import { ReactComponent as More } from '../../images/more-action.svg'

interface StatusBadgeProps {
  text: string;
  type: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ text, type }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'completed':
        return '#CCE9DD';
      case 'pending':
        return '#FFDD22';
      case 'rejected':
        return '#FF0000';
      case 'assigned':
        return '#D6E5EB';
      case 'accepted':
        return '#CCE9DD';
      default:
        return '';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'completed':
        return '#008F53';
      case 'pending':
        return '#FF70AC';
      case 'rejected':
        return '#FFFFFF';
      case 'assigned':
        return '#29485A';
      case 'accepted':
        return '#008F53';
      default:
        return '';
    }
  };

  return (
    <div className="flex justify-between">
      <span
        className={`${type === 'pending' || type === 'rejected' ? 'pl-[18px]' : 'pl-[8px]'} py-[6px] px-[8px] text-[14px] rounded-8 flex items-center`}
        style={{
          backgroundColor: getBackgroundColor(),
          color: getTextColor(),
        }}
      >
        {text}
      </span>
      {type !== 'assigned' && type !== 'accepted' ? (
        <button>
          <More />
        </button>
      ) : null}
    </div>
  );
};

export default StatusBadge;

