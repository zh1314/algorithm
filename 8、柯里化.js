function add (x, y) {

    return (x + y)
  
  }

function trueCurrying(fn, ...args) {

    if (args.length >= fn.length) {

        return fn(...args)

    }

    return function (...args2) {

        return trueCurrying(fn, ...args, ...args2)

    }
}

const res = trueCurrying(add, 1)(2)
console.log(res);

