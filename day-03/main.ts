import { readFileSync } from "fs";

export {};

const main = (vs: string[], slopeX: number, slopeY: number) => {
  let [x, y] = [0, 0];
  let count = 0;

  while (y < vs.length) {
    if (vs[y][x] === "#") {
      count++;
    }
    x = (x + slopeX) % vs[0].length;
    y += slopeY;
  }

  return count;
};

const main2 = (vs: string[]) => {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ].map(([x, y]) => main(vs, x, y));

  return slopes.reduce((t, c) => t * c, 1);
};

const vt = readFileSync(`${__dirname}/inputT.txt`).toString().split("\n");
const v = readFileSync(`${__dirname}/input.txt`).toString().split("\n");

console.log("First Half");
console.log("test", main(vt, 3, 1));
console.log("final", main(v, 3, 1));
console.log("==========");
console.log("Second Half");
console.log("test", main2(vt));
console.log("final", main2(v));
