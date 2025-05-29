import { Question } from '../types';

export const examQuestions: Question[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does CPU stand for?',
    options: ['Central Processing Unit', 'Control Panel Unit', 'Computer Primary Unit', 'Central Peripheral Unit'],
    answer: 'Central Processing Unit'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is an input device?',
    options: ['Monitor', 'Mouse', 'Printer', 'Speaker'],
    answer: 'Mouse'
  },
  {
    id: 3,
    type: 'true-false',
    question: 'RAM is used to store data permanently.',
    answer: false
  },
  {
    id: 4,
    type: 'true-false',
    question: 'The keyboard is a type of input device.',
    answer: true
  },
  {
    id: 5,
    type: 'identification',
    question: 'What is the name of the software that manages computer hardware and software?',
    answer: 'Operating System'
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which one is a web browser?',
    options: ['Chrome', 'Windows', 'Excel', 'PowerPoint'],
    answer: 'Chrome'
  },
  {
    id: 7,
    type: 'identification',
    question: 'What device connects a computer to a network?',
    answer: 'Router'
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Which file extension is used for JavaScript files?',
    options: ['.js', '.html', '.css', '.exe'],
    answer: '.js'
  },
  {
    id: 9,
    type: 'true-false',
    question: 'HTML is a programming language.',
    answer: false
  },
  {
    id: 10,
    type: 'identification',
    question: 'What is the shortcut key to copy selected text in Windows?',
    answer: 'Ctrl + C'
  }
];

];