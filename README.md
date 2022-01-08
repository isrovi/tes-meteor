# Technical Test Meteor

Cara penggunaan: 
1. pull project
2. install node modules dengan command "npm install" di direktori "nama projek/client" untuk frontend dan "nama projek/server" untuk backend
3. import sql/database mysql dengan xampp, buat database dengan nama db_meteor terlebih dahulu
4. jalankan project dengan masuk ke direktori "nama projek/server" lalu buka command prompt dan ketik "npm run dev" pada direktori server tersebut
5. ketika projek dijalankan maka akan otomatis membuka browser ke halaman projek atau jika tidak muncul lokasinya ada di localhost:3000
6. halaman pertama adalah login dengan url localhost:3000/admin, masuk dengan user admin email: admin@mail.com password:admin
7. setelah login akan masuk padahal halaman utama yaitu data user untuk menampilkan semua user
8. untuk menambah user klik tombol add new user yang nantinya akan berpindah halaman ke form add new user
9. setelah submit add new user maka otomatis berpindah halaman utama
10. untuk mengedit user bisa klik edit di tombol action sesuai user yang diinginkan
11. untuk delete user bisa klik delete di tombol action sesuai user yang diinginkan

Note: 
- teknikal tes yang sudah selesai terbatas pada crud user saja untuk lainnya belum selesai karena keterbatasan waktu
- tabel yang tersedia hanya user 
- enkripsi password hanya ada pada admin menggunakan bcrypt dan di apply ke login admin pada backend, untuk password user belum saya implementasi enkripsi hanya teks terbuka saja
- untuk login cukup login satu kali karena menggunakan jsonwebtoken yang dipakai untuk sesi login, jika direfresh tetap masuk / tidak perlu login lagi
- profile, edit profile, change password, reset password belum sempat mengerjakan
- stack yang digunakan pada backend: bcrypt, concurrently, cors, dotenv, express, jsonwebtoken, mysql2, sequelize, sequelize-cli
- stack yang digunakan pada frontend: axios, react-bootstrap, react-router-dom

-- Login
![alt text](https://github.com/isrovi/tes-meteor/blob/master/1.JPG)

-- Halaman utama list user
![alt text](https://github.com/isrovi/tes-meteor/blob/master/2.JPG)

-- Form add new user
![alt text](https://github.com/isrovi/tes-meteor/blob/master/6.JPG)

-- Dropdown action edit dan delete user
![alt text](https://github.com/isrovi/tes-meteor/blob/master/3.JPG)

-- Modal delete user 
![alt text](https://github.com/isrovi/tes-meteor/blob/master/4.JPG)

-- Form edit user
![alt text](https://github.com/isrovi/tes-meteor/blob/master/5.JPG)
