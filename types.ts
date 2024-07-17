export interface Option {
  text: string;
}

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizCategory {
  title: string;
  icon: string;
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
