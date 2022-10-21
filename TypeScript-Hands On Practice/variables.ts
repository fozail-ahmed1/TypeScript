//string variable
let x:string;
x='Hello';

//number variable
let y:15;

//boolean
let isCorrect:boolean;
isCorrect=true;
isCorrect=false;

//array
let countries=['India','UAE','Sri Lanka'];
let numbers:Array<number>=[1,2];

//tuple
let t:[number,string]=[1,'f']

//any datatype
let a:any;
a=6;
a='hi';

//enum datatype
enum colors {red,blue,yellow};
let red=colors.red;
let blue=colors.blue;
let yellow=colors.yellow;

//void
function greeters():void {
    console.log('Hello');
}

//undefined
let b:number;
b=5;

//variable assertions
let greeted:string='hello';
greeted.indexOf('o')
