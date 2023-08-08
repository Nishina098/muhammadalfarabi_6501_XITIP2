const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("masukkan kata yang ingin anda cari: ", (katacari) => {
        // gunakan method indexof untuk mencari kata cari dalam kalimat
        const  indeksKata = kalimat.indexOf(katacari);
        if (indeksKata !== -1) {
            console.log(`kata '${katacari}' ditemukan pada indeks: ${indeksKata}`);
        } else {
            console.log(`kata '${katacari}' tidak ditemukan di dalam kalimat.`);
        }
        rl.close();
    });
});