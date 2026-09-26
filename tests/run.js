import assert from "node:assert";
import { readColumns } from "../read.js";
import { compareAll } from "../compare.js";
import { render } from "../app.js";

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

check("readColumns returns lists", () => {
  assert.ok(Array.isArray(readColumns([1], [2]).left));
});

check("compareAll returns marks", () => {
  assert.ok(Array.isArray(compareAll([1], [2]).marks));
});

check("compareAll returns counts", () => {
  assert.strictEqual(typeof compareAll([1], [2]).gt, "number");
});

check("render counts marks", () => {
  assert.strictEqual(typeof render({ left: [1], right: [2] }).count, "number");
});

check("render exposes same length flag", () => {
  assert.strictEqual(typeof render({ left: [1], right: [2] }).same_length, "boolean");
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
