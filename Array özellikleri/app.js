
let value;

const numbers=[43,56,33,23,44,35,5];


//const number2=new Array(1,2,3,4,5,6,7);

const langs=["Python","Java","C++","Javascript"];

const a=["Merhaba",22,null,undefined,3.14];

//Uzunluk

value=number.length;

//Indeksleme

value=numbers[0];
value=numbers[2];
value=numbers[numbers.length-1];

//Herhangi bir indeksteki değeri değiştirme

numbers[2]=1000;

value=numbers;

//Indexof 

value=numbers.indexOf(1000);
//Arrayin sonuna değer ekleme-Push

numbers.push(2000);
value=numbers;

//Başına ekleme
numbers.unshift(3000);

value=numbers;

//Sounundan değer atma
numbers.pop();

value=numbers;

//Başından değer atma
numbers.shift()
value=numbers;

//Belli birkısmını atma

numbers.splice(0,3);
value=numbers;

//Reverse

numbers.reverse();
value=numbers;

value=numbers.sort();

value=numbers.sort(function(x,y){
    return x-y;//Küçükten büyüğe doğru
});

value=numbers.sort(function(x,y){
    return y-x;//Büyükten küçüğe
});


console.log(value);










