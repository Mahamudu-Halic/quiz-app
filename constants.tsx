import { nanoid } from "nanoid";

export const Topics = [
  {
    id: nanoid(),
    topic: "HTML",
    icon: "./icon-html.svg",
    bg: "#FFF1E9",
  },
  {
    id: nanoid(),
    topic: "CSS",
    icon: "./icon-css.svg",
    bg: "#E0FDEF",
  },
  {
    id: nanoid(),
    topic: "Javascript",
    icon: "./icon-js.svg",
    bg: "#EBF0FF",
  },
  {
    id: nanoid(),
    topic: "Accessibility",
    icon: "./icon-accessibility.svg",
    bg: "#F4E5FD",
  },
];

export const Questions = {
  html: {
    questions: [
      {
        id: 1,
        type: "text",
        content: "What does HTML stand for?",
        options: [
          { id: "a", content: "Hyper Text Markup Language" },
          { id: "b", content: "Hyperlinks and Text Markup Language" },
          { id: "c", content: "Home Tool Markup Language" },
          { id: "d", content: "Hyperlinks Text Manipulation Language" },
        ],
        correctAnswer: "a",
      },
      {
        id: 2,
        type: "text",
        content: "Who is making the Web standards?",
        options: [
          { id: "a", content: "Mozilla" },
          { id: "b", content: "Google" },
          { id: "c", content: "Microsoft" },
          { id: "d", content: "The World Wide Web Consortium" },
        ],
        correctAnswer: "d",
      },
      {
        id: 3,
        type: "text",
        content: "Choose the correct HTML element for the largest heading:",
        options: [
          { id: "a", content: "<heading>" },
          { id: "b", content: "<h1>" },
          { id: "c", content: "<h6>" },
          { id: "d", content: "<head>" },
        ],
        correctAnswer: "b",
      },
      {
        id: 4,
        type: "text",
        content: "What is the correct HTML element for inserting a line break?",
        options: [
          { id: "a", content: "<br>" },
          { id: "b", content: "<lb>" },
          { id: "c", content: "<break>" },
          { id: "d", content: "<newline>" },
        ],
        correctAnswer: "a",
      },
      {
        id: 5,
        type: "text",
        content: "What is the correct HTML for adding a background color?",
        options: [
          { id: "a", content: "<body bg='yellow'>" },
          { id: "b", content: "<body style='background-color:yellow;'>" },
          { id: "c", content: "<background>yellow</background>" },
          { id: "d", content: "<body bgcolor='yellow'>" },
        ],
        correctAnswer: "b",
      },
      {
        id: 6,
        type: "text",
        content: "Choose the correct HTML element to define important text",
        options: [
          { id: "a", content: "<b>" },
          { id: "b", content: "<important>" },
          { id: "c", content: "<i>" },
          { id: "d", content: "<strong>" },
        ],
        correctAnswer: "d",
      },
      {
        id: 7,
        type: "text",
        content:
          "Which HTML element is used to specify a footer for a document or section?",
        options: [
          { id: "a", content: "<bottom>" },
          { id: "b", content: "<footer>" },
          { id: "c", content: "<foot>" },
          { id: "d", content: "<section>" },
        ],
        correctAnswer: "b",
      },
      {
        id: 8,
        type: "text",
        content: "Which HTML attribute is used to define inline styles?",
        options: [
          { id: "a", content: "style" },
          { id: "b", content: "styles" },
          { id: "c", content: "class" },
          { id: "d", content: "font" },
        ],
        correctAnswer: "a",
      },
      {
        id: 9,
        type: "text",
        content: "Which HTML element is used to define a navigation link?",
        options: [
          { id: "a", content: "<nav>" },
          { id: "b", content: "<navigate>" },
          { id: "c", content: "<navigation>" },
          { id: "d", content: "<a>" },
        ],
        correctAnswer: "a",
      },
      {
        id: 10,
        type: "text",
        content: "What is the correct HTML for creating a hyperlink?",
        options: [
          { id: "a", content: "<a>http://www.example.com</a>" },
          { id: "b", content: "<a url='http://www.example.com'>example</a>" },
          { id: "c", content: "<a href='http://www.example.com'>example</a>" },
          { id: "d", content: "<a link='http://www.example.com'>example</a>" },
        ],
        correctAnswer: "c",
      },
    ],
  },
  css: {
    questions: [
      {
        id: 1,
        type: "text",
        content: "What does CSS stand for?",
        options: [
          { id: "a", content: "Cascading Style Sheets" },
          { id: "b", content: "Colorful Style Sheets" },
          { id: "c", content: "Creative Style Sheets" },
          { id: "d", content: "Computer Style Sheets" },
        ],
        correctAnswer: "a",
      },
      {
        id: 2,
        type: "text",
        content: "Which property is used to change the background color?",
        options: [
          { id: "a", content: "color" },
          { id: "b", content: "bgcolor" },
          { id: "c", content: "background-color" },
          { id: "d", content: "background" },
        ],
        correctAnswer: "c",
      },
      {
        id: 3,
        type: "text",
        content: "How do you add a background color for all <h1> elements?",
        options: [
          { id: "a", content: "h1 {background-color:#FFFFFF;}" },
          { id: "b", content: "h1.all {background-color:#FFFFFF;}" },
          { id: "c", content: "all.h1 {background-color:#FFFFFF;}" },
          { id: "d", content: "h1.all.background {color:#FFFFFF;}" },
        ],
        correctAnswer: "a",
      },
      {
        id: 4,
        type: "text",
        content:
          "Which CSS property is used to change the text color of an element?",
        options: [
          { id: "a", content: "text-color" },
          { id: "b", content: "fgcolor" },
          { id: "c", content: "color" },
          { id: "d", content: "font-color" },
        ],
        correctAnswer: "c",
      },
      {
        id: 5,
        type: "text",
        content: "Which property is used to change the font of an element?",
        options: [
          { id: "a", content: "font-weight" },
          { id: "b", content: "font-style" },
          { id: "c", content: "font-family" },
          { id: "d", content: "font-decoration" },
        ],
        correctAnswer: "c",
      },
      {
        id: 6,
        type: "text",
        content:
          "How do you make each word in a text start with a capital letter?",
        options: [
          { id: "a", content: "text-transform:uppercase" },
          { id: "b", content: "text-transform:capitalize" },
          { id: "c", content: "text-transform:lowercase" },
          { id: "d", content: "text-transform:initial" },
        ],
        correctAnswer: "b",
      },
      {
        id: 7,
        type: "text",
        content:
          "Which property is used to change the space between characters in a text?",
        options: [
          { id: "a", content: "text-spacing" },
          { id: "b", content: "letter-spacing" },
          { id: "c", content: "font-spacing" },
          { id: "d", content: "character-spacing" },
        ],
        correctAnswer: "b",
      },
      {
        id: 8,
        type: "text",
        content: "How do you select an element with id 'demo'?",
        options: [
          { id: "a", content: ".demo" },
          { id: "b", content: "demo" },
          { id: "c", content: "#demo" },
          { id: "d", content: "*demo" },
        ],
        correctAnswer: "c",
      },
      {
        id: 9,
        type: "text",
        content: "How do you select elements with class name 'test'?",
        options: [
          { id: "a", content: ".test" },
          { id: "b", content: "#test" },
          { id: "c", content: "test" },
          { id: "d", content: "*test" },
        ],
        correctAnswer: "a",
      },
      {
        id: 10,
        type: "text",
        content:
          "Which property is used to change the left margin of an element?",
        options: [
          { id: "a", content: "indent" },
          { id: "b", content: "margin-left" },
          { id: "c", content: "padding-left" },
          { id: "d", content: "margin" },
        ],
        correctAnswer: "b",
      },
    ],
  },
  javascript: {
    questions: [
      {
        id: 1,
        type: "text",
        content: "Which of the following is a JavaScript data type?",
        options: [
          { id: "a", content: "String" },
          { id: "b", content: "Number" },
          { id: "c", content: "Boolean" },
          { id: "d", content: "All of the above" },
        ],
        correctAnswer: "d",
      },
      {
        id: 2,
        type: "text",
        content: "Which symbol is used for comments in JavaScript?",
        options: [
          { id: "a", content: "//" },
          { id: "b", content: "/* */" },
          { id: "c", content: "<!-- -->" },
          { id: "d", content: "#" },
        ],
        correctAnswer: "a",
      },
      {
        id: 3,
        type: "text",
        content: "How do you create a function in JavaScript?",
        options: [
          { id: "a", content: "function = myFunction()" },
          { id: "b", content: "function:myFunction()" },
          { id: "c", content: "function myFunction()" },
          { id: "d", content: "create function myFunction()" },
        ],
        correctAnswer: "c",
      },
      {
        id: 4,
        type: "text",
        content: "Which event occurs when the user clicks on an HTML element?",
        options: [
          { id: "a", content: "onchange" },
          { id: "b", content: "onmouseclick" },
          { id: "c", content: "onmouseover" },
          { id: "d", content: "onclick" },
        ],
        correctAnswer: "d",
      },
      {
        id: 5,
        type: "text",
        content: "How do you declare a JavaScript variable?",
        options: [
          { id: "a", content: "var myVariable;" },
          { id: "b", content: "variable myVariable;" },
          { id: "c", content: "v myVariable;" },
          { id: "d", content: "let myVariable;" },
        ],
        correctAnswer: "a",
      },
      {
        id: 6,
        type: "text",
        content:
          "What is the correct syntax to write 'Hello World' in an alert box?",
        options: [
          { id: "a", content: "alert('Hello World');" },
          { id: "b", content: "msg('Hello World');" },
          { id: "c", content: "msgBox('Hello World');" },
          { id: "d", content: "alertBox('Hello World');" },
        ],
        correctAnswer: "a",
      },
      {
        id: 7,
        type: "text",
        content:
          "How do you find the number with the highest value of x and y?",
        options: [
          { id: "a", content: "Math.ceil(x, y)" },
          { id: "b", content: "Math.max(x, y)" },
          { id: "c", content: "ceil(x, y)" },
          { id: "d", content: "top(x, y)" },
        ],
        correctAnswer: "b",
      },
      {
        id: 8,
        type: "text",
        content:
          "Which method can be used to round a number to its nearest integer?",
        options: [
          { id: "a", content: "Math.round()" },
          { id: "b", content: "Math.floor()" },
          { id: "c", content: "Math.ceil()" },
          { id: "d", content: "Math.rnd()" },
        ],
        correctAnswer: "a",
      },
      {
        id: 9,
        type: "text",
        content: "How can you add a comment in JavaScript?",
        options: [
          { id: "a", content: "'This is a comment" },
          { id: "b", content: "<!-- This is a comment -->" },
          { id: "c", content: "// This is a comment" },
          { id: "d", content: "* This is a comment *" },
        ],
        correctAnswer: "c",
      },
      {
        id: 10,
        type: "text",
        content: "How do you define a JavaScript array?",
        options: [
          { id: "a", content: "var myArray = (1, 2, 3);" },
          { id: "b", content: "var myArray = {1, 2, 3};" },
          { id: "c", content: "var myArray = [1, 2, 3];" },
          { id: "d", content: "var myArray = 1, 2, 3;" },
        ],
        correctAnswer: "c",
      },
    ],
  },
  accessibility: {
    questions: [
      {
        id: 1,
        type: "text",
        content: "What does WCAG stand for?",
        options: [
          { id: "a", content: "Web Content Accessibility Guidelines" },
          { id: "b", content: "Worldwide Accessibility Group" },
          { id: "c", content: "Web Accessibility Compliance Group" },
          { id: "d", content: "Web Accessibility Criteria and Guidelines" },
        ],
        correctAnswer: "a",
      },
      {
        id: 2,
        type: "text",
        content:
          "Which HTML attribute is used to provide an alternative text for an image?",
        options: [
          { id: "a", content: "alt" },
          { id: "b", content: "title" },
          { id: "c", content: "aria-label" },
          { id: "d", content: "description" },
        ],
        correctAnswer: "a",
      },
      {
        id: 3,
        type: "text",
        content: "Which HTML element is used to define a clickable button?",
        options: [
          { id: "a", content: "<button>" },
          { id: "b", content: "<link>" },
          { id: "c", content: "<span>" },
          { id: "d", content: "<div>" },
        ],
        correctAnswer: "a",
      },
      {
        id: 4,
        type: "text",
        content: "What does ARIA stand for?",
        options: [
          { id: "a", content: "Accessible Rich Internet Applications" },
          {
            id: "b",
            content: "Accessible Resource and Information Accessibility",
          },
          { id: "c", content: "Adaptive Responsive Internet Applications" },
          { id: "d", content: "Advanced Responsive Internet Applications" },
        ],
        correctAnswer: "a",
      },
      {
        id: 5,
        type: "text",
        content:
          "Which attribute is used to define the language of a web page?",
        options: [
          { id: "a", content: "lang" },
          { id: "b", content: "language" },
          { id: "c", content: "locale" },
          { id: "d", content: "region" },
        ],
        correctAnswer: "a",
      },
      {
        id: 6,
        type: "text",
        content: "What is the purpose of semantic HTML elements?",
        options: [
          { id: "a", content: "To improve SEO rankings" },
          { id: "b", content: "To enhance website performance" },
          { id: "c", content: "To provide meaning and structure to content" },
          { id: "d", content: "To reduce file size" },
        ],
        correctAnswer: "c",
      },
      {
        id: 7,
        type: "text",
        content:
          "What is the recommended color contrast ratio for text to meet WCAG AAA standards?",
        options: [
          { id: "a", content: "3:1" },
          { id: "b", content: "4.5:1" },
          { id: "c", content: "5:1" },
          { id: "d", content: "7:1" },
        ],
        correctAnswer: "b",
      },
      {
        id: 8,
        type: "text",
        content:
          "Which attribute is used to provide an accessible name to an HTML element for screen readers?",
        options: [
          { id: "a", content: "accessibility-label" },
          { id: "b", content: "aria-label" },
          { id: "c", content: "alt" },
          { id: "d", content: "accessibility-name" },
        ],
        correctAnswer: "b",
      },
      {
        id: 9,
        type: "text",
        content:
          "What is the purpose of skip navigation links in web accessibility?",
        options: [
          { id: "a", content: "To provide links to skip to the next page" },
          { id: "b", content: "To skip to the main content of the page" },
          { id: "c", content: "To skip to the footer of the page" },
          { id: "d", content: "To skip over decorative elements" },
        ],
        correctAnswer: "b",
      },
      {
        id: 10,
        type: "text",
        content: "What is the purpose of ARIA roles in web accessibility?",
        options: [
          { id: "a", content: "To provide alternate text for images" },
          { id: "b", content: "To define keyboard navigation behavior" },
          { id: "c", content: "To improve page load times" },
          {
            id: "d",
            content:
              "To define roles and properties for accessible web components",
          },
        ],
        correctAnswer: "d",
      },
    ],
  },
};
