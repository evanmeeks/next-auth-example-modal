import React from "react";

interface CircularProgressBarProps {
  sqSize?: number;
  percentage?: number;
  strokeWidth?: number;
  ariaLabel?: string;
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  sqSize = 100,
  percentage = 25,
  strokeWidth = 5,
  ariaLabel = "Circular progress bar",
}) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg
      strokeLinecap="round"
      width={sqSize}
      height={sqSize}
      viewBox={viewBox}
      aria-label={ariaLabel}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={percentage}
      role="progressbar"
    >
      <circle
        stroke="blue"
        fill="none"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        stroke="#d3e1ff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}.9px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset * -1,
        }}
      />
      <text
        className="circle-text font-bold text-3xl"
        fill="blue"
        x="50%"
        y="50%"
        dy="0.35em"
        textAnchor="middle"
      >
        {`${percentage}`}
      </text>
    </svg>
  );
};
