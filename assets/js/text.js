/**
 * Truncate
 *
 * @param {string} value
 * @param {number} [length = 22]
 *
 * @returns {string}
 */
export const truncate = (value, length = 22) => {
  if (value.length < length) {
    return value;
  }

  const keep = Math.floor((length - 1) / 2);

  return `${value.slice(0, keep)}\u2026${value.slice(value.length - keep)}`;
};
