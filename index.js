var edge = require("edge-js");

var clrMethod = edge.func("dll/ClassLibrary.dll");

clrMethod(123, function (error, result) {
  if (error) throw error;
  console.log(result);
});
