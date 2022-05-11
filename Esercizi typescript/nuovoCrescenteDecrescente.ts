function primaScelta(): boolean {
    let input1: string = prompt("Scegli come inserire la lista: 1)CRESCENTE   2)DECRESCENTE ");

    if (input1 == 'CRESCENTE') {
        return true;
    } else {
        return false;
    }
}


function riempiArray(): number {
    return +prompt("Inserisci la lista di numeri. \n Digita -1 per terminare");
}

primaScelta();
let input = riempiArray();
let array: number[] = [];

while (input != -1) {
    array.push(input);
    input = riempiArray();
}
console.log(array);

if (primaScelta() == true) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[i]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

} else {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

}


console.log("La lista riversata è :" + array);