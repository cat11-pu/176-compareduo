// read.js：读两列并校验（长度一致、不得有负数，否则报 E_BAD_COLUMN）
export function readColumns(left, right) {
  const a = Array.isArray(left) ? left : [];
  const b = Array.isArray(right) ? right : [];
  if (a.length !== b.length) {
    const error = new Error("两列长度不一致");
    error.code = "E_BAD_COLUMN";
    throw error;
  }
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] < 0 || b[i] < 0) {
      const error = new Error("列中出现负数");
      error.code = "E_BAD_COLUMN";
      throw error;
    }
  }
  return { left: a, right: b };
}
