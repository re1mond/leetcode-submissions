/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0;

  while (i < chars.length) {
    let j = i;

    while (chars[i] == chars[j] && j < chars.length) j++;

    let count = j - i;

    if (count > 1) {
      chars.splice(i + 1, count - 1, ...count.toString().split(""));
      i += count.toString().length + 1;
    } else {
      i++;
    }
  }

  return chars.length;
};
