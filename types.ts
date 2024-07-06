export interface Option {
  id: string;
  content: string;
}

export interface Question {
  id: number;
  type: string;
  content: string;
  options: Option[];
  correctAnswer: string;
}

export interface QuizCategory {
  questions: Question[];
}

export interface QuestionsType {
  html: QuizCategory;
  css: QuizCategory;
  javascript: QuizCategory;
  accessibility: QuizCategory;
}

export interface Topic {
  id: string;
  topic: string;
  icon: string;
  bg: string;
}
