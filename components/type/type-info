export interface questions {
  id: number;
  type: 'multiple-choice' | 'true-false' | 'identification';
  question: string;
  options?: string[];
  answer: string | boolean;
}

export interface Answer {
  questionId: number;
  answer: string | boolean | null;
}

export interface ExamResult {
  score: number;
  totalQuestions: number;
  answers: Answer[];
}