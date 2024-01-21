export const code = (line) => {
  let codeText = "";
  let index = 0;
  let codeLine = "";
  let insideCode = false;

  while (index < line.length) {
    if (line[index] === "`" && !insideCode) {
      insideCode = true;
      codeText = "";
      index++;
    } else if (line[index] === "`" && insideCode) {
      insideCode = false;
      index++;
      codeLine += `<code>${codeText}</code>`;
    } else if (insideCode) {
      codeText += line[index];
      index++;
    } else {
      codeLine += line[index];
      index++;
    }
  }
  if (insideCode) {
    codeLine += "`" + codeText;
  }
  return codeLine;
};
