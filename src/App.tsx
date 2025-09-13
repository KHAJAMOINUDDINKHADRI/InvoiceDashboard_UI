import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaCrown } from "react-icons/fa";
import { LuCalendarDays, LuCirclePlus } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import "./index.css";
import InfoCard from "./components/InfoCard";
import InfoInvoiceCard from "./components/InfoInvoiceCard";

// Add type assertions for the icon components
const RiArrowLeftSLineIcon = RiArrowLeftSLine as React.ComponentType<{ size: number }>;
const FaCrownIcon = FaCrown as React.ComponentType<{ size: number; color: string }>;
const LuCalendarDaysIcon = LuCalendarDays as React.ComponentType<{ size: number; color: string }>;
const LuCirclePlusIcon = LuCirclePlus as React.ComponentType<{ size: number; color: string }>;
const IoMdArrowDropdownIcon = IoMdArrowDropdown as React.ComponentType<{ size: number; color?: string }>;

const Dashboard = () => {
  const [chartState] = useState<{
    series: ApexOptions["series"];
    options: ApexOptions;
  }>({
    series: [
      {
        name: "income",
        type: "column",
        data: [3600, 5000, 6800, 3500, 5000, 0],
      },
      {
        name: "momGrowth",
        type: "line",
        data: [-12, 35, 60, -10, 36, -100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line" as const,
        toolbar: {
          show: true,
        },
        stacked: false,
      },
      stroke: {
        width: [0, 4],
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      xaxis: {
        type: "category" as const,
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yaxis: [
        {
          title: {
            text: "",
          },
          min: 0,
          max: 8000,
          tickAmount: 4,
          labels: {
            formatter: (value) => `$${value / 1000}k`,
          },
        },
        {
          opposite: true,
          title: {
            text: "",
          },
          min: -100,
          max: 100,
          tickAmount: 4,
          labels: {
            formatter: (value) => `${value}%`,
          },
          forceNiceScale: true,
        },
      ],
      colors: ["#a743ef", "#7f1e1d"],
      grid: {
        borderColor: "#e5e7eb",
        strokeDashArray: 4,
      },
    },
  });

  return (
    <div className="flex flex-col h-screen w-[390px] mx-auto bg-white">
      {/* Header */}
      <header className="bg-[#e8cdeb] h-[100px] z-10 p-4 border-b border-[#d8b2e3] w-full">
        <div className="flex items-center justify-between w-full">
          <button className="flex items-center justify-center text-lg bg-transparent rounded border-0 p-0">
            <RiArrowLeftSLineIcon size={28} />
            Back
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <img
            src="profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 absolute top-[72px] w-[422px] overflow-y-auto rounded-t-[46px] z-10">
        <div className="max-w-7xl mx-auto p-4 rounded-t-[46px] p-4 bg-white">
          {/* Create New Invoice Card (replaces stats row) */}
          <div className="bg-[#f4f2f5] h-[140px] rounded-[46px] p-4 flex flex-col items-center justify-center mb-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1">
              <LuCirclePlusIcon size={48} color="#9747FF" />
            </div>
            <h2
              className="text-lg mb-0
             bg-[linear-gradient(169.7deg,#DD2A7B_1.49%,#9747FF_42.07%,#334CCA_99.84%)] 
             bg-clip-text text-transparent"
            >
              Create New Invoice
            </h2>
            <p className="text-xs text-[#999999] text-center mt-1">
              Generate and send invoices in seconds.
            </p>
          </div>

          <div className="flex items-center justify-center mt-4 mb-6">
            <p className="text-[#8134AF] text-xs font-medium m-0">
              Or Upload an existing invoice and set payment reminder
            </p>
          </div>

          <div
            className="bg-white flex flex-col mb-4"
            style={{
              height: "132px",
              gap: "4px",
              borderRadius: "16px",
              border: "2px solid #F2F2F2",
              padding: "16px 12px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex justify-between">
              <p className="text-[#999999] text-sm font-medium m-0">
                Time Period
              </p>
              <p className="text-[#999999] text-sm font-semibold m-0">
                dd:mm:yyyy - dd:mm:yyyy
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <div
                className="bg-white w-[78px] h-[28px] gap-2 rounded-[16px] flex items-center justify-center"
                style={{
                  border: "1px solid #F2F2F2",
                  padding: "4px 12px",
                  boxSizing: "border-box",
                }}
              >
                <p className="text-[#999999] text-sm font-medium m-0">
                  1 Month
                </p>
              </div>
              <div
                className="bg-[#F3E8FF] w-[86px] h-[28px] gap-2 rounded-[16px] flex items-center justify-center"
                style={{
                  border: "1px solid #F2F2F2",
                  padding: "4px 12px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  className="text-sm m-0 
               bg-[linear-gradient(169.7deg,#DD2A7B_1.49%,#9747FF_42.07%,#334CCA_99.84%)] 
               bg-clip-text text-transparent"
                >
                  3 Months
                </p>
              </div>

              <div
                className="bg-white w-[98px] h-[28px] gap-2 rounded-[16px] flex items-center justify-center"
                style={{
                  border: "1px solid #F2F2F2",
                  padding: "4px 12px",
                  boxSizing: "border-box",
                }}
              >
                <p className="text-[#999999] text-sm font-medium m-0">1 Year</p>

                <FaCrownIcon size={24} color="#9747FF" />
              </div>
            </div>
            <div className="flex mt-2">
              <div
                className="bg-white w-[110px] h-[28px] gap-2 rounded-[16px] flex items-center justify-center"
                style={{
                  border: "1px solid #F2F2F2",
                  padding: "4px 12px",
                  boxSizing: "border-box",
                }}
              >
                <LuCalendarDaysIcon size={18} color="#999999" />
                <p className="text-[#999999] text-sm font-medium m-0">Custom</p>
              </div>
            </div>
          </div>

          <InfoCard title="Total Income" value="$1,25,000" />

          <div className="flex gap-4 w-full">
            <div className="flex-1">
              <InfoCard title="Payment Awaited" value="$25,000" />
            </div>
            <div className="flex-1">
              <InfoCard title="Payment Overdue" value="$25,000" />
            </div>
          </div>

          {/* Chart Section */}
          <div
            className="bg-white w-full h-auto gap-2 rounded-[16px] flex flex-col"
            style={{
              border: "1px solid #F2F2F2",
              padding: "16px",
              boxSizing: "border-box",
              marginBottom: "24px",
            }}
          >
            <div className="flex flex-col items-left ">
              <h2 className="text-lg font-medium text-[#6B7280] mb-0.5 mt-0">
                Income Trend
              </h2>
              <p className="text-sm text-[#999999] mt-0">
                Your monthly income and growth for the last 6 months.
              </p>
            </div>
            <div id="chart">
              <ReactApexChart
                options={chartState.options}
                series={chartState.series}
                type="line"
                height={350}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-[#999999] text-lg font-medium">
              Your Invoices
            </h1>
            <IoMdArrowDropdownIcon size={24} color="#000000" />
          </div>

          {/* Sample Invoice Cards */}
          <div className="space-y-3 mt-4">
            <InfoInvoiceCard
              title="Client Name"
              value="₹1,25,000, Due: 2024-06-15"
              status="Update Status"
            />
            <InfoInvoiceCard
              title="Client Name"
              value="₹1,25,000, Due: 2024-06-15"
              status="Unpaid"
            />
            <InfoInvoiceCard
              title="Income Trend"
              value="₹1,25,000, Due: 2024-06-15"
              status="Disrupted"
            />
            <InfoInvoiceCard
              title="Income Trend"
              value="₹1,25,000, Due: 2024-06-15"
              status="Paid"
            />
            <InfoInvoiceCard
              title="Income Trend"
              value="₹1,25,000, Due: 2024-06-15"
              status="Paid"
            />
            <InfoInvoiceCard
              title="Income Trend"
              value="₹1,25,000, Due: 2024-06-15"
              status="Partially Paid"
            />
            <InfoInvoiceCard
              title="Income Trend"
              value="₹1,25,000, Due: 2024-06-15"
              status="Paid"
            />
            <InfoInvoiceCard
              title="Income Trend"
              value="₹1,25,000, Due: 2024-06-15"
              status="Overdue"
            />
            <InfoInvoiceCard
              title="Income Trend"
              value="₹1,25,000, Due: 2024-06-15"
              status="Awaited"
            />
            <InfoInvoiceCard
              title="Income Trend"
              value="₹1,25,000, Due: 2024-06-15"
              status="Draft"
            />
            <InfoInvoiceCard
              title="Income Trend"
              value="₹1,25,000, Due: 2024-06-15"
              status="Paid"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
