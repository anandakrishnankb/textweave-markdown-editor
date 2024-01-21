export const unorderedList = (markdownText) => {
  let inUnorderedList = false;
  const lines = markdownText.split("\n");
  const parsedList = [];

  for (const line of lines) {
    if (line.startsWith("-")) {
      if (!inUnorderedList) {
        inUnorderedList = true;
        parsedList.push("<ul>");
      }
      newList.push(`<li>${line.substring(2)}</li>`);
    } else {
      if (inUnorderedList) {
        inUnorderedList = false;
        newList.push("</ul>");
      }
    }
    if (inUnorderedList) {
      newList.push("</ul>");
    }
    return parsedList.join("\n");
  }
};
