import React from 'react';

interface ProgressBarProps {
  currentIndex: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentIndex, total }) => {
  const percentage = ((currentIndex + 1) / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
      <div
        className="bg-blue-600 h-3 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
