import React from 'react';

interface ButtonsProps {
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
  currentIndex: number;
  total: number;
}

const Buttons: React.FC<ButtonsProps> = ({
  onNext,
  onPrev,
  onSubmit,
  currentIndex,
  total,
}) => {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className={`px-5 py-2 rounded ${
          currentIndex === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        Previous
      </button>

      {currentIndex === total - 1 ? (
        <button
          onClick={onSubmit}
          className="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Buttons;
