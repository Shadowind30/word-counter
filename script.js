console.log('sucessful init')
const main = document.querySelector('#main');
const counter = document.querySelector('#counter');

let currentLength = main.value.length - 1;

const updateCounter = (wordCount) => {
  if (main.value === ''){
    counter.innerHTML = 'Paste your text in the form above';
  } else{
    counter.innerHTML = `Word Count: ${wordCount}`;
  }

}
const countWords = () => {
  let words = [];
  words = currentLength = main.value.split(' ').length;
  updateCounter(words);
};
