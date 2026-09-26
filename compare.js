// compare.js：逐项比较（基线：一律给空表）
import { readColumns } from "./read.js";

export function compareAll(left, right) {
  return { marks: [], gt: 0, lt: 0, eq: 0 };
}
