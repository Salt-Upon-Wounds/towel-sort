
// You should implement your task here.

module.exports = function towelSort (matrix) {
  res = [];
  if (matrix) {
    matrix.forEach((element, index) => {
      if (index % 2) res = res.concat(element.reverse());
      else res = res.concat(element);
    });
  }
  return res;
}
