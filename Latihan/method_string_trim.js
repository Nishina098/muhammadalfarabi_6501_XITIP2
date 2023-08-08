const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("masukkan sebuah kalimat: ", (kalimat) => {
    // gunakan method trim untuk menghapus spasi di awal dan akhir kalimat
    const kalimatTrimmed = kalimat.trim();
    console.log(`kalimat dalam huruf besar: ${kalimatTrimmed}`);
    rl.close();
});