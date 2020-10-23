// var angka = 0;
// var loop = true;

// // While
// while(angka < 10){
//     console.log(angka);
//     angka++;
// }

// // Do While
// do {
//     console.log(angka, "while aja");
//     angka++;
// } while (angka < 10);

// // For
// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

// var angka;

// for(angka = 1; angka <= 10; angka++){
//     if(angka % 2 == 0) {
//         console.log("Genap \t", angka);
//     } else {
//         console.log("Ganjil \t", angka);
//     }
// }

// var output = "";
// for(var j = 0; j < 5; j++){
// for(var i = 0; i < 5; i++){
//     output += "*";
//     }
//     output += "\n";
// }
// console.log(output);

var output = "";
for (var i = 0; i < 5; i++){
    for(var j = 0; i > j; j++){
        output += "*";
    }
    output += "\n";
}
console.log(output);