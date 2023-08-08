const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("masukkan kata yang ingin anda cari: ", (katacari) => {
        // gunakan method lasindexof untuk mencari kata cari dalam kalimat
        const indekskataterakhir = kalimat.lastIndexOf(katacari);
        if (indekskataterakhir !== -1) {
            console.log(`kata '${katacari}' ditemukan pada indeks terakhir: ${indekskataterakhir} `);
        } else {
            console.log(`kata '${katacari}' tidak ditemukan dalam kalimat. `);
        }
    rl.close();
    });
});