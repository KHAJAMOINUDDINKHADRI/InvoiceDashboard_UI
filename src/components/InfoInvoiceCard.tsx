import React from "react";
import { IoMdArrowDropdown, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

// Add type assertions for the icon components
const IoMdArrowDropdownIcon = IoMdArrowDropdown as React.ComponentType<{ size: number }>;
const IoMdNotificationsOutlineIcon = IoMdNotificationsOutline as React.ComponentType<{ size: number; color: string }>;
const MdOutlineEditIcon = MdOutlineEdit as React.ComponentType<{ size: number; color: string }>;

type StatusType =
  | "Update Status"
  | "Unpaid"
  | "Disrupted"
  | "Paid"
  | "Partially Paid"
  | "Overdue"
  | "Awaited"
  | "Draft";

interface InvoiceCardProps {
  title: string;
  value: string;
  status: StatusType;
}

const InfoInvoiceCard: React.FC<InvoiceCardProps> = ({
  title,
  value,
  status,
}) => {
  const statusStyles = {
    "Update Status": "bg-[#8134AF] text-white",
    Unpaid: "bg-[#F2F2F2] text-[#999999]",
    Disrupted: "bg-[#FFB1B1] text-[#FF2D55]",
    Paid: "bg-[#9CEFB8] text-[#34C759]",
    "Partially Paid": "bg-[#FFFAE5] text-[#FFCC00]",
    Overdue: "bg-[#FFB1B1] text-[#FF2D55]",
    Awaited: "bg-[#FFFAE5] text-[#FFCC00]",
    Draft: "bg-[#F2F2F2] text-[#999999]",
  };

  return (
    <div
      className="bg-white w-full h-auto gap-2 rounded-[16px] flex flex-col"
      style={{
        border: "1px solid #F2F2F2",
        padding: "16px",
        boxSizing: "border-box",
        marginBottom: "12px",
      }}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <p className="text-[#6B7280] text-md font-medium m-0">{title}</p>
          <p className="text-[#999999] text-sm font-normal m-0">{value}</p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs h-[32px] px-4 py-1 rounded-full ${statusStyles[status]} flex items-center`}
          >
            {status}
            {status === "Update Status" && (
              <span className="ml-1 flex items-center justify-center">
                <IoMdArrowDropdownIcon size={14} />
              </span>
            )}
          </span>
          {status === "Overdue" && <IoMdNotificationsOutlineIcon color="#999999" size={24} />}
          {status === "Awaited" && <IoMdNotificationsOutlineIcon color="#999999" size={24} />}
          {status === "Draft" && <MdOutlineEditIcon color="#999999" size={24} />}
        </div>
      </div>
    </div>
  );
};

export default InfoInvoiceCard;
