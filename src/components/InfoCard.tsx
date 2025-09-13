import React from "react";

interface InfoCardProps {
  title: string;
  value: string | number;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
  return (
    <div 
      className="bg-white flex flex-col mb-4"
      style={{

        height: '92px',
        gap: '8px',
        borderRadius: '16px',
        border: '2px solid #F2F2F2',
        padding: '16px 12px',
        boxSizing: 'border-box'
      }}
    >
      <p className="text-[#999999] text-sm font-medium m-0">{title}</p>
      <p className="text-[#8134AF] text-2xl font-semibold m-0">{value}</p>
    </div>
  );
};

export default InfoCard;
