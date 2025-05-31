import React, { useState } from 'react';
import QuestionDisplay from './components/QuestionDisplay';
import ProgressBar from './components/ProgressBar';
import Buttons from './components/Buttons';
import questions from './data/react_questions.json';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (answer: any) => {
    const updated = [...answers];
    updated[currentIndex] = answer;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitted answers:', answers);
    navigate('/result', { state: { answers } });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <ProgressBar currentIndex={currentIndex} total={questions.length} />

      <div className="mt-6">
        <QuestionDisplay
          question={questions[currentIndex]}
          userAnswer={answers[currentIndex]}
          onAnswer={handleAnswer}
        />
      </div>

      <Buttons
        onNext={handleNext}
        onPrev={handlePrevious}
        onSubmit={handleSubmit}
        currentIndex={currentIndex}
        total={questions.length}
      />
    </div>
  );
};

export default MainPage;
