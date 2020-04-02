/**
 * for( var i = 0; i < 5; i++) { 
  setTimeout(() => { 
    console.log(i); 
   }, 1000); 
}
打印结果 5个5

打印1，2，3，4，5
 */

const printNums = () => {
    const delay = num => setTimeout(() => {
        console.log(num);
    }, 100);
    for(let i = 0; i < 5; i++) { 
      console.log(i);
        // const j = i;
        // setTimeout(() => { 
        //   console.log(i); 
        //  }, 1000); 
      }
}

printNums();