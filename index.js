const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  
  const part1 = tutorials.map((words) => words.split(" "));

  const part2 = part1.map(words => words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)))
  
  const part3 = part2.map((sentences) => sentences.join(" "));
  return part3
}
