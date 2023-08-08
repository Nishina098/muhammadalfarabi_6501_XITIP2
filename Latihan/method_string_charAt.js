const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// chatAt
rl.question("masukkan sebuah kalimat: ", (inputString) => {
    rl.question("masukkan indeks yang ingin anda cek: ", (index) => {
        // konversi nilai ke tipe number
        index = Number(index);
        // periksa apakah index valid (berada dalam rentang string)
        if (index >= 0 && index < inputString.length) {
            // gunakan method charAt untuk mendapatkan karakter pada index yg diminta
            const  character = inputString.charAt(index);
            console.log(`karakter pada index ${index}: ${character}`);
        } else {
            console.log("index tidak valid!");
        }
        rl.close();
    });
});