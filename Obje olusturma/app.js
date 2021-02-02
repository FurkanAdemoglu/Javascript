let value;

const programmer={
    name:"Furkan Ademoğlu",
    age:22,
    email:"furkanademoglu69@gmail.com",
    langs:["Python","Java","Javascript"],

    address:{
        city:"Istanbul",
        stree:"Kağıhane"
    },
    work:function(){
        console.log("Programcı Çalışıyor...");
    }

}

value=programmer;

value=programmer.email;//Genel olarak
value=programmer["email"];

value=programmer.langs;


value=programmer.address.city;

programmer.work();

const programmers=[
    {name:"Furkan",age:21},
    {name:"Ismet",age:22}
]
value=programmers[0].name;

console.log(value);