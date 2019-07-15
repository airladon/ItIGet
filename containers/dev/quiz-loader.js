// https://webpack.js.org/api/loaders/

function convertMultiChoice(str, name) {
  const lines = str.trim().split('\n').map(l => l.trim());
  let out = `
<html>
<div class="lesson__multiple_choice">`;
  lines.forEach((line) => {
    const value = line.charAt(0) === '+' ? 'correct' : 'incorrect';
    const html = `
  <div class="lesson__quiz_selection">
    <div class="lesson__quiz__radio_mark"></div>
    <div class="lesson__quiz__radio_button">
      <input type="radio" name="${name}" value="${value}">
      ${line.slice(1).trim()}
    </div>
  </div>`;
    out = `${out}${html}`;
  });
  out = `${out}
  <div class="lesson__quiz__submit">
    <button class="lesson__quiz__submit_button">Check</button>
  </div>
</div>
</html>
`;
  return out;
}

function convertQuiz(str, nameIndex) {
  const match = /<quiz(.*)>/.exec(str);
  const type = match[1].trim().toLowerCase();
  const contents = /<quiz[^>]*>([\s\S]*)<\/quiz>/.exec(str)[1];
  if (type === 'multichoice') {
    return convertMultiChoice(contents, `${nameIndex}`);
  }
  return '';
}

// This loader looks for [[label]]((method,parameter,color)) strings
// and replaces them with <a> links
async function quizparser(callback, source, map, meta) {
  const re = /<quiz([\s\S]*?)<\/quiz>/;
  let out = source;
  let match = re.exec(out);
  let nameIndex = 0;
  while (match != null) {
    const { index } = match;
    const [str] = match;
    out = `${out.substring(0, index)}${convertQuiz(str, nameIndex)}${out.substring(index + str.length)}`;
    match = re.exec(out);
    nameIndex += 1;
  }
  callback(null, out, map, meta);
}

// eslint-disable-next-line func-names
module.exports = function (source, map, meta) {
  let callback = (a, b) => {
    // eslint-disable-next-line no-console
    console.log(b);
  };
  if (this.async != null) {
    callback = this.async();
  }
  quizparser(callback, source, map, meta);
};
