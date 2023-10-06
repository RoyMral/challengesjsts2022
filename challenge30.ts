function drawFrame(text: string) {
    let lineUpDown = "**********";

    let words = text.split(" ");

    console.log(lineUpDown);

    let newLine = [];
    for (let i = 0; i <= 9; i++) {
        if (i == 0 || i == 9) {
            newLine.push("*");
        } else {
            newLine.push(" ");
        }
    }

    for (let i = 0; i < words.length; i++) {
        newLine[1] = words[i];
        console.log(newLine.join(""));
    }

    console.log(lineUpDown);
}

drawFrame("¿Qué te parece el reto?");