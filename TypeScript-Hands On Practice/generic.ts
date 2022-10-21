function result(x:number):number{
    return x;
}

let y=result(6)
console.log(y)

function result2 <T>(x:T):T{
    return x;
}

let t=result2<number>(10);
let t1=result2<string>('hi');
console.log(t)