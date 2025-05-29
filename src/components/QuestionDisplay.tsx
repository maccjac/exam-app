import React from 'react';
import { Questions, Answer } from '././questiontype/type-info';
import MultipleChoice from '././questiontype/MultipleChoice';
import TrueFalse from '././questiontype/TrueFalse';
import Identification from '././questiontype/Identification';

interface QuestionDisplayProps {
  question: Questions;
  userAnswer: Answer | undefined;
  onAnswerChange: (questionId: number, answer: string | boolean) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ 
  question, 
  userAnswer, 
  onAnswerChange 
}) => {
  const handleAnswerChange = (answer: string | boolean) => {
    onAnswerChange(question.id, answer);
  };

  const renderQuestionType = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <MultipleChoice 
            question={question} 
            userAnswer={userAnswer} 
            onAnswerChange={handleAnswerChange} 
          />
        );
      case 'true-false':
        return (
          <TrueFalse 
            question={question} 
            userAnswer={userAnswer} 
            onAnswerChange={handleAnswerChange} 
          />
        );
      case 'identification':
        return (
          <Identification 
            question={question} 
            userAnswer={userAnswer} 
            onAnswerChange={handleAnswerChange} 
          />
        );
      default:
        return <p>Unknown question type</p>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full mx-auto">
      <p className="text-xs text-gray-500 mb-2">
        {question.type === 'multiple-choice' 
          ? 'Multiple Choice' 
          : question.type === 'true-false' 
            ? 'True or False' 
            : 'Identification'}
      </p>
      <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
      {renderQuestionType()}
    </div>
  );
};

export default QuestionDisplay;