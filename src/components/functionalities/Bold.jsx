export const checkBold = (line) => {
  let boldLine = "";
  let index = 0;

  while (index < line.length) {
    if (
      (line[index] === "*" && line[index + 1] === "*") ||
      (line[index] === "_" && line[index + 1] === "_")
    ) {
      index += 2;
      let boldText = "";
      let endFound = false;

      while (index < line.length) {
        if (
          (line[index] === "*" && line[index + 1] === "*") ||
          (line[index] === "_" && line[index + 1] === "_")
        ) {
          index += 2;
          endFound = true;
          break;
        } else {
          boldText += line[index];
          index++;
        }
      }
      if (endFound) {
        boldLine += `<strong>${boldText}</strong>`;
      } else {
        boldLine += `**${boldText}`;
      }
    } else {
      boldLine += line[index];
      index++;
    }
  }
  return boldLine;
};
