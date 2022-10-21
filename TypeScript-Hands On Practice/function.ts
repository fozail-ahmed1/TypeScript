function getSum(x:number,y:number,z:number):number {
    console.log(x+y+z);
    return x+y+z;
}

getSum(1,2,3);


let getSum2=function(x:number,y:number,z?:number):number {
    return x+y;
    let count=2;
    if(typeof z!== 'undefined'){
        return x+y;
        count++;
    }
}

getSum2(1,2);


//rest parameter
function getAverage (...x:number[]):number{
    let total=0;
    let count=0;
    for( let i=0;i<x.length;i++)
    {
        total+=x[i];
        count++;
    }
    const result= total/count;
    return result;
}