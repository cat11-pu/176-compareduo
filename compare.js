// compare.js：逐项比较（一次扫描，每项只比一次）
import { readColumns } from "./read.js";

export function compareAll(left, right) {
  const columns = readColumns(left, right);
  const a = columns.left;
  const b = columns.right;
  const marks = new Array(a.length);
  let gt = 0;
  let lt = 0;
  let eq = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) { marks[i] = "gt"; gt += 1; }
    else if (a[i] < b[i]) { marks[i] = "lt"; lt += 1; }
    else { marks[i] = "eq"; eq += 1; }
  }
  return { marks: marks, gt: gt, lt: lt, eq: eq };
}
