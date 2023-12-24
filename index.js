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
// splits words in each sentence into seperate parts of each object within array
  const part2 = part1.map(words => words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)))
  // takes split words and replaces first letter with a capital letter at the start of each word
  const part3 = part2.map((sentences) => sentences.join(" "));
  // combines all of the now capitalized words into sentences again
  return part3
}
