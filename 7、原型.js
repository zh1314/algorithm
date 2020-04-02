function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}

Fn.prototype = {
    y: 400,
    getX: function() {
        console.log(this.y);
    },
    getY: function() {
        console.log(this.y);
    },
    sum:function() {
        console.log(this.x+this.y);
    }
};

var f1 = new Fn();
var f2 = new Fn;

console.log(f1.getX);
console.log(f2.getX);
console.log(f1.getX === f2.getX); //false

f2.getY();
f1.getX();
f2.getX();
console.log(f2.y);

a = 1;
function test() {
    console.log(a);
    console.log(this.a);
    return {
        a: 2,
        b: function() {
            console.log(a);
            console.log(this.a);
        }
    }
}

const res = test();
res.b();