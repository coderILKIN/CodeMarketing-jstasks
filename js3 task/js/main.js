const height = 7;
const width = 7;

for (let i = 0; i < height; i++) {
  let line = "";
  for (let j = 0; j < width; j++) {
    if (i === 0 || i === height - 1) {
      line += "*";
    } else if (j === 0) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
