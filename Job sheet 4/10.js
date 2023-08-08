const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat pertama: ", (kalimat1) => {
    rl.question("masukkan kalimat kedua: ", (kalimat2) => {
        // menggabungkan kalimat 1 dan kalimat 2 menggunakan method concat()
        const kalimatGabungan = kalimat1.concat(kalimat2);
        console.log(`hasil penggabungan: ${kalimatGabungan}`);
        rl.close();
    });
});