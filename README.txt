TEGUK SALATIGA - WEBSITE PROJECT

Struktur folder:
- index.html : isi dan struktur halaman
- css/style.css : tampilan
- js/script.js : keranjang dan checkout WhatsApp (nomor admin: 6288224246481)
- images/ : foto produk (sudah dikompres, tiap file di bawah 60 KB)
- .nojekyll : file kosong agar GitHub Pages membaca folder apa adanya

Mengubah isi:
- Nama produk, harga, deskripsi, warna: cari "product-card" di index.html. Harga ada di dua tempat per produk
  (teks Rp... dan angka di addToCart(...)), ubah keduanya.
- Nomor WhatsApp: js/script.js, baris NOMOR_WA (format 62..., tanpa 0 di depan dan tanpa +).
- Kontak, ulasan, kebijakan: index.html.

Catatan:
- Nama pembeli di Customer stories, NIB, dan alamat lengkap adalah contoh (dummy).
- Foto produk berasal dari dokumentasi merek Cuculemon untuk keperluan tugas. Teguk Salatiga adalah reseller, bukan toko resmi Cuculemon.
- Keranjang berjalan di browser dan mengirim pesanan ke WhatsApp. Tidak ada pembayaran otomatis atau pelacakan stok.

MENAYANGKAN DI GITHUB PAGES (tanpa install apa pun)
1. Daftar atau masuk di github.com.
2. Klik tombol + (kanan atas) > New repository. Nama: teguk-salatiga. Pilih Public. Klik Create repository.
3. Di halaman repositori, klik "uploading an existing file".
4. Ekstrak zip ini, buka folder teguk_salatiga_project, pilih SEMUA ISINYA (index.html, folder css, js, images, README.txt, .nojekyll)
   lalu seret ke halaman GitHub. Jangan seret folder induknya, supaya index.html berada di paling atas repositori.
   Jika file .nojekyll tidak terlihat, lewati saja, website tetap berjalan.
5. Klik Commit changes.
6. Buka Settings > Pages. Pada Source pilih "Deploy from a branch", Branch: main, Folder: / (root). Klik Save.
7. Tunggu 1-3 menit, muat ulang halaman Pages. Alamat websitenya: https://USERNAME.github.io/teguk-salatiga/
8. Buka alamat itu di HP: cek tampilan, kecepatan, ikon gembok HTTPS, lalu tes keranjang dan tombol WhatsApp.

MENGUBAH WEBSITE SETELAH TAYANG
- Cara web: buka file di repositori, klik ikon pensil, edit, lalu Commit changes. Untuk foto: Add file > Upload files ke folder images.
- Perubahan tampil 1-3 menit kemudian. Jika tidak berubah, tekan Ctrl+F5.
