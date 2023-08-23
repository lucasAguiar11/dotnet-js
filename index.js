var edge = require('edge-js');

var clrMethod = edge.func('ClassLibrary/bin/net7.0/publish/ClassLibrary.dll');
 
clrMethod(123, function(error, result){
  if(error) throw error;
  console.log(result);
});