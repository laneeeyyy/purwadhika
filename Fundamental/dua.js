// var nama;
// nama = "lian";
// nama = "Bambang";
// console.log(nama);

// null = kosong

// var let const

// var bisa diganti dan dideclare dua kali

// let bisa diganti tapi tidak bisa dideclare dengan nama yang sama
// let nama = "Lian";
// nama = "Bambang";
// console.log(nama);

// Const constant = sama sekali tidak bisa diubah
// const nama = "Lian";
// nama = "Bambang";
// console.log(nama);

// var nama = "Wido Wicaksono";
// var exp = 5;
// var coder = true;

// var str = "123";
// var num = 5
// var boolean = false;
// var result = str + num;
// console.log(typeof str)

// var num = 10;
// var str = "10";
// console.log(num.toString);
// console.log(parseInt(str));
// console.log(num + parseInt(str));

// Aritmathic
// + Add
// - Substract
// * 
// / Divided
// % Modulus = Nilai sisa dari pembagian = Misal Modulus dari 10/4 = Sisa 2
// ++ Increment = Tambah 1 -> Tambah 1 -> dst (Kalau mau lebih tinggi +=)
// -- Decrement = Kurang 1 -> Kurang 1 -> dst (Kalau mau lebih tinggi -=)

// var num = 10;
// var str = "10";
// var result = parseInt(str);

// Math Object
// console.log(Math.PI);
// console.log(Math.abs(-23.34));
// console.log(Math.pow(5, 2));
// console.log(Math.sqrt(64));
// console.log(Math.cbrt(8));
// console.log(Math.round(4.7));
// console.log(Math.round(4.4));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(4.4));

// Date Object
// var date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay())

// var x = 4;
// var y = 3;
// var z = 2;
// console.log(Math.pow((x+y*z)/(x*y), z));

var num = 485;
var bulan = 30
var tahun = Math.floor(num/360)
var temp = (num%360)
var bulan = Math.floor(temp/30)
var temp2 = (temp%30)
var minggu = Math.floor(temp2/7)
var hari = (temp2%7)

console.log(tahun + " tahun");
console.log(bulan + " bulan");
console.log(minggu + " minggu");
console.log(hari + " hari");
