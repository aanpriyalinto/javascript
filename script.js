console.log('hello');
// alert('hello every one');


// variable
var a=9;
console.log(a);//block 1
{
var a=20;
console.log(a);    //block2
}
// let b=23;
// console.log(b);
{
    let b=34;
    console.log(b);
}
console.log(b);
//const
const t=30;
console.log(t);
{
    const t=90;
    console.log(t)
}
console.log(t);
//data types 
var nam='angel is a devil';
console.log(typeof(nam));
//numbers
var count=10;
console.log(typeof(count));
//boolean
var bb=true;
console.log(typeof(bb));
//undefined
var gtype;
console.log(typeof(gtype));
//arrays
let arr=['red','blue','white',10];
console.log(arr[1])

console.log(arr.length);
arr.push('violet');
console.log(arr);
arr.pop()
console.log(arr)
//javascript objects
let car={
    mileage:100,
    color:'blue',
    model:'i20'
}
console.log(car);
console.log(car.model);
console.log(car.mileage);
let person=new Object();
person.gender='male';
person.height=180;
console.log(person)
{
    var a=2; b=2;
    console.log(a+b)

}
{
    var a=2; b=2;
    console.log(a-b)
}
{
    var a=2; b=2;
    console.log(a*b);
} 

{
var a=2; b=2;
    console.log(a/b);
}
{
    var a=2; b=2;
    console.log(a%b);
}
var a=10;b=a++;
 console.log(a);
 console.log(b);

if (a==b) {
    console.log('a is equal to b')
    
} else {
    console.log('a is not equal to b')
    
}
if (a!=b) {
    console.log('a not equal to b')
    
} else {
    console.log('a is equal to b')
    
}
c=10;
d='10';
if (c==d) 
{
    console.log('c is equal to d')
    
} else
 {
console.log('c is not equal to d')
    
}
e=14;
f=11;
if (e>f&& e==f)
 {
    console.log('e greater than f or e is equal to f')
    
} else 
{
    console.log('e is not greater than f or e is equal not to f')
}

let A=10;
let Z=34;
let c=70;
let d=12;

var exp=(A+Z*(c-d)-7);
console.log(exp); 
const arr2=[
{
    name:"maya"
},{
    name:"krishna"

}
]
functons
function display(name)
{
    console.log('hi '+name+' welcome to js');
display('aanpriya') 
function addition(t,s){
    var result=t+s;
    return result;
}
var result=addition(10,30);
console.log('the sum is',result);

function sub(w,m){
    var subst=w-m;
    return subst;
}
var subst=sub(50,90);
console.log('the sub is'+subst);

function div(u,v){
    var divi=u/v;
    return divi;
}
var divi=div(200,2);
console.log('the div is', divi);




















