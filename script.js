// closure
debugger;
function outer () {
  function inner () {
    console.log(a);
  }
  let a = 10;
  const b = 20;
  var c= 30;
  const foo = function () {
    console.log("foo");
  }
  function bar () {
    console.log("bar");
  }
  inner();
}

outer();