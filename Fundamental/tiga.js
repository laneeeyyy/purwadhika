// Condition
// True or False = Boolean

// Comparison Operator
// Selalu menghasilkan Boolean (True or False)
// = X (Ini untuk declare variable)
// == (Nilai sama walaupun tipe data berbeda masih 'true' eg. number & string)
// === (Nilai dan tipe data harus sama)
// != tidak sama dengan
// > lebih besar dari
// < lebih kecil dari
// >= lebih besar atau sama dengan
// <= lebih kecil atau sama dengan

// var x = 5;
// var y = "5";

// console.log(x == y);

//  Logical Operator
// && and / dan
// || or / atau
// ! not / reverse logic

// Not !
// console.log(!(5 == 5)) // harusnya "true" tapi karena reverse logic jadi "false"
// console.log(!false); // hasilnya true
// console.log(!true); // hasilnya false

// And &&
// Dua-duanya harus true, Jika tidak maka hasilnya false
// console.log(5 == "5" && 4 < 9);

// OR ||
// Perlu salah satu "True" untuk menjadi "true"
// console.log(5 == "5" || 4 > 9);

// Conditional Statement
// if
// else if
// else (tidak ditulis kondisi)

// var nilai = 30;
// console.log(nilai > 70);
// if(nilai > 70) {
//     console.log("WOW")
// }else if(nilai < 70 && nilai > 40) {
//     console.log("nooo")
// }else {
//     console.log("Belajar!")
// }

// var pass = "abc123456";
// if(pass.length > 8) {
//     console.log("Strong!", pass.length)
// }else if(pass.length <= 8 && pass.length >= 4) {
//     console.log("Medium!", pass.length)
// }else {
//     console.log("Weak!", pass.length)
// }

// false null undefined "" 0
// sisanya true
// var nilai = 1;
// if (nilai) {
//     console.log("always true");
// } else {
//     console.log(false);
// }

// Switch Case
// var job = "coder";
// switch (job) {
//     case "dokter":
//         console.log("rumah sakit");
//         break;
//     case "polisi":
//         console.log("ninuninu");
//         break;
//     case "guru":
//         console.log("sekolah")
//         break;
//     default:
//         console.log("not found!");
// }