// compare.js：逐项比较（基线：一律给空表）
import { readColumns } from "./read.js";

export function compareAll(left, right) {
  const columns = readColumns(left, right);
  const marks = new Array(columns.left.length);
  let gt = 0;
  let lt = 0;
  let eq = 0;
  for (let i = 0; i < columns.left.length; i++) {
    if (columns.left[i] > columns.right[i]) {
      marks[i] = "gt";
      gt++;
    } else if (columns.left[i] < columns.right[i]) {
      marks[i] = "lt";
      lt++;
    } else {
      marks[i] = "eq";
      eq++;
    }
  }
  return { marks: marks, gt: gt, lt: lt, eq: eq };
}
