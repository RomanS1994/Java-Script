const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const qwe = function (x, y) {
  return x * y;
};

doMath(2, 6, add);