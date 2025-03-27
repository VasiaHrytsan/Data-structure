function calculateFunction() {
    
    const a = 5;
    const b = 10;
    const x = 5;
    let f;

    if(x < 0 || x >= 11) {
        console.log("Помилка: х поза діапазоном");
        return
    }

    if(x < 5) {
         f = Math.sin(x) 
       }

       else if(x === 5) {
           f = 3 * Math.exp(a * x) + 1;
       }

       else {
           if( b * x - 10 == 0) {
               console.log("Помилка: ділення на нуль");
               return;
           } else {
              f = 1 / (b * x - 10);
           }
       }

       console.log(`f(x) = ${f}`);
       return f;
}

calculateFunction();