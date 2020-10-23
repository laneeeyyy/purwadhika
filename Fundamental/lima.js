// Array
// Element adalah satu data di dalam array
// Setiap element punya index masing-masing
// Index adalah urutan element di dalam array
// Index dimulai dari 0
var nama = "Lian";
var namaStorage = ["Lian", "Bambang", "Susilo", 777]
// console.log(namaStorage.join(" "));
// console.log(namaStorage[0]);
// console.log(namaStorage[3].toString());
var panjangArr = namaStorage.length;

for (let i = 0; i < panjangArr; i++) {
    console.log(namaStorage[i]);
}

// Pop & Push
namaStorage.pop(); // Digunakan untuk menghilangkan data di index terakhir dalam array
namaStorage.push("Joko", "Felix"); // Digunakan untuk menambahkan element baru ke dalam array
console.log(namaStorage);

// Shift & Unshift
namaStorage.shift(); // Menghilangkan data di index pertama dalam array
namaStorage.unshift("James"); // Menambahkan data di index diurutan pertama
console.log(namaStorage);

// Delete & Splice
namaStorage.splice(1, 1); // Hapus index 1, delete 1 item
namaStorage.splice(1, 1, "Philip"); // Hapus index 1, delete 1 item dan menambahkan "Philip" di Index 1
console.log(namaStorage);

// Slice = Ambil sebagian dari array, Mulai dari angka pertama sampai angka kedua (element di angka kedua tidak ikut diambil)
console.log(namaStorage.slice(2)); // Mengambil data dari index 2
console.log(namaStorage.slice(0, 3)); // Mengambil data dari index 0 sampai index 3

// Adding New Elements
// Push
// Unshift
// Manual
var buah = [
    "Apel",
    "Mangga",
    "Jeruk"
];
buah.push("Duren"); // Tambah di belakang
buah.unshift("Rambutan"); // Tambah di depan
buah[5] = "Melon";
buah[6] = "Kiwi";
buah[0] = "Pear"; // Menimpa data yang sudah ada index [0] ("Rambutan" diganti "Pear")
buah[buah.length] = "Pisang";

console.log(buah);

// Merging 2 Arrays (Concatenating)
let nama1 = ["Andi", "Budi"];
let nama2 = ["Felix", "Charles", "Philip"];

let nama3 = nama1.concat(nama2);
let nama4 = nama2.concat(nama1);
console.log(nama3);
console.log(nama4);

// let mobil = ["jazz", "brio", "march"]
// console.log(mobil);
// console.log(mobil.toString());
// console.log(mobil.join(' '));

// let x = [40, 100, 1, 5, 25, 10];
// console.log(x.sort(function(a, b) {
//     return a - b
// }));