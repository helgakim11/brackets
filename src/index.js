module.exports = function check(str, bracketsConfig) {
  const tmp = [];
  const openBrackets = [];
  const closeBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
      openBrackets.push(bracketsConfig[i][0]);
      closeBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    if (closeBrackets.includes(str[i])) {
      const oppositeOpenedBracket = openBrackets[closeBrackets.indexOf(str[i])];
      if (tmp[tmp.length - 1] === oppositeOpenedBracket) {
        tmp.pop();
      } else if (str[i] !== oppositeOpenedBracket) {
        return false;
      } else {
        tmp.push(str[i]);
      }
    } else {
      tmp.push(str[i]);
    }
  }
  return tmp.length === 0;
}
