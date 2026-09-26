// read.js：读两列并校验：长度必须一致，任一列出现负数都报 E_BAD_COLUMN
export function readColumns(left, right) {
  if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) {
    throw badColumn("两列长度必须一致");
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] < 0 || right[i] < 0) {
      throw badColumn("两列不允许出现负数");
    }
  }
  return { left: left, right: right };
}

function badColumn(message) {
  const error = new Error(message);
  error.code = "E_BAD_COLUMN";
  return error;
}
