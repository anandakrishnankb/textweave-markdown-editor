export const checkStrikethrough = (line) => {
  let strikedLine = "";
  let index = 0;
  let strikedText = "";
  let insideStrikethrough = false;
  while (index < line.length) {
    if (
      line[index] === "~" &&
      index + 1 < line.length &&
      line[index + 1] === "~" &&
      !insideStrikethrough
    ) {
      insideStrikethrough = true;
      index += 2;
      strikedText = "";
    } else if (
      line[index] === "~" &&
      index + 1 < line.length &&
      line[index + 1] === "~" &&
      insideStrikethrough
    ) {
      insideStrikethrough = false;
      index += 2;
      strikedLine += `<del>${strikedText}</del>`;
    } else if (insideStrikethrough) {
      strikedText += line[index];
      index++;
    } else {
      strikedLine += line[index];
      index++;
    }
  }
  if (insideStrikethrough) {
    strikedLine += "~~" + strikedText;
  }
  return strikedLine;
};
