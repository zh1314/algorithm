// function foo() {
//     foo.abc = function () { alert('def') }
//     this.abc = function () { alert('xyz') }
//     abc = function () { alert('@@@@@') };
//     var abc = function () { alert('$$$$$$') }
// }
// foo.prototype.abc = function () { alert('456'); }
// foo.abc = function () { alert('123'); }
// var f = new foo();
// f.abc();    // xyz
// foo.abc();  // def
// abc();      // undefined

function test() {
    a = 1;
}

test();

console.log(a);



