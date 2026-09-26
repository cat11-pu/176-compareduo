// app.js：渲染结果
import { readColumns } from "./read.js";
import { compareAll } from "./compare.js";

export function render(spec) {
  const columns = readColumns(spec.left || [], spec.right || []);
  const view = compareAll(spec.left || [], spec.right || []);
  const marks = view.marks || [];
  return { marks: marks, gt: view.gt || 0, lt: view.lt || 0, eq: view.eq || 0,
           count: marks.length, left_count: columns.left.length,
           right_count: columns.right.length,
           same_length: columns.left.length === columns.right.length };
}
