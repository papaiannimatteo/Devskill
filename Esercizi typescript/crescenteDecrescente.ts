function riempiArray(): number {
    return +prompt("Inserisci la lista di numeri in ordine crescente. \n Digita -1 per terminare");
}

let input = riempiArray();
let array: number[] = [];

while (input != -1) {
    array.push(input);
    input = riempiArray();
}
console.log(array);
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] > array[i]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

console.log("La lista riversata è :"+array);