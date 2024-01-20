export const checkItalics = (line) => {
  let italicsLine = "";
  let index = 0;
  let insideItalics = false;
  let italicText = "";
  let italicSymbol = "";

  while (index < line.length) {
    if ((line[index] === "*" || line[index] === "_") && !insideItalics) {
      insideItalics = true;
      italicSymbol = line[index];
      italicText = "";
      index++;
    } else if (line[index] === italicSymbol && insideItalics) {
      insideItalics = false;
      index++;
      italicsLine += "<em>" + italicText + "</em>";
    } else if (insideItalics) {
      italicText += line[index];
      index++;
    } else {
      italicsLine += line[index];
      index++;
    }
  }

  if (insideItalics) {
    italicsLine += italicSymbol + italicText;
  }

  return italicsLine;
};
