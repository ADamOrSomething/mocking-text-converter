const inputNode = document.querySelector('#input');
const outputNode = document.querySelector('#output');

const convertText = text => {
  let capital = false;
  let result = '';

  for (let char of text) {
    if (capital) char = char.toUpperCase();
    else char = char.toLowerCase();
    capital = !capital;
    result += char;
  }

  return result;
};

inputNode.addEventListener('input', e => {
  let value = inputNode.value;
  let result = convertText(value);
  outputNode.value = result;
});