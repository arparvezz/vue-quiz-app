import { reactive } from "vue";

let Quizez = reactive([
  {
    question: "1. What is Vue.js?",
    answers:[
      "a) A server-side scripting language",
      "b) A JavaScript framework for building user interfaces",
      "c) A database management system",
      "d) A programming language for robotics"
    ],
    Answer:"b) A JavaScript framework for building user interfaces",
    checked: ""
  },{
    question: "2. What does JavaScript do in web development?",
    answers:[
      "a) Handles server-side operations",
      "b) Manipulates HTML and CSS to create dynamic web content",
      "c) Stores and manages data in databases",
      "d) Encrypts sensitive user information"
    ],
    Answer: "b) Manipulates HTML and CSS to create dynamic web content",
    checked: ""
  },{
    question: "3. Which of the following best describes Vue.js directives?",
    answers:[
      "a) JavaScript functions used to modify HTML elements",
      "b) Special attributes provided by Vue.js to perform reactive actions in the DOM",
      "c) CSS classes used for styling Vue.js components",
      "d) Database queries for Vue.js applications"
    ],
    Answer: "b) Special attributes provided by Vue.js to perform reactive actions in the DOM",
    checked: ""
  },
  {
    question: "4. What is a computed property in Vue.js?",
    answers:[
      "a) A function that computes values based on other properties",
      "b) A reserved keyword in Vue.js for declaring variables",
      "c) A method used to fetch data from external APIs",
      "d) An advanced feature for handling asynchronous operations"
    ],
    Answer: "a) A function that computes values based on other properties",
    checked: ""
  },
  {
    question: "5. How does Vue.js differ from other JavaScript frameworks like React or Angular?",
    answers:[
      "a) Vue.js is primarily for server-side rendering, while React and Angular are for client-side rendering.",
      "b) Vue.js has a simpler syntax and smaller footprint compared to React and Angular.",
      "c) Vue.js is developed and maintained by Facebook, while React and Angular are community-driven.",
      "d) Vue.js is only compatible with certain browsers, unlike React and Angular."
    ],
    Answer: "b) Vue.js has a simpler syntax and smaller footprint compared to React and Angular.",
    checked: ""
  }
])

export default Quizez;


   
