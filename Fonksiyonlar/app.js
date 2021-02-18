//Fonksiyon Tanımlama
// function merhaba(name="Bilgi Yok",age="Bilgi Yok"){
//     //if (typeof name==="undefined") name="Bilgi Yok";

//     //if(typeof age==="undefined") age="Bilgi Yok";

//     console.log('İsim: ${name} Yaş:${age}');



// }
// merhaba("Murat,25");//Function Call
// merhaba( "Ayşe",30);
// merhaba();
// merhaba("Kadir");

// function square(x){
//     return x*x;
//     console.log("Naber");


// }

// function cube(x){
//     return x*x*x;
// }
// let a=cube(square(12));

// console.log(a);

//Function Expression
// const merhaba=function(name){
//     console.log("Meraba"+name);
// };


// merhaba("Murat");

// //Immediately Invoked Function Expression(IIFE)
// (function(name){
//     console.log("Mehaba"+name);
// })("Furkan");

const database={
    host:"Localhost",
    add:function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log('Id: ${id} Guncellendi');
    },
    delete:function(id){
        console.log('Id:${id} Silindi');
    }
}

console.log(database.host);

database.add();

database.delete(10);
