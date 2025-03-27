function progression() {
    let m = 0;

    if( m < 1 ) {
        console.log("Помилка: m повинно бути більше або рівне 1");
        return;
    }
    for (let n = 1; n <= m; n++) {
       let num = Math.log(3 * n) + 5;
       let den = Math.pow(n,2);
       let x = num / den;
        console.log(`x_${n} = ${x}`)
    }
}

progression();