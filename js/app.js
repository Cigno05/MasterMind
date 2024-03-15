console.log('JS funziona');

// Generare un array di 4 numeri univoci da 1 a 9


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateUniqueNumbers(min, max, count) {
    let numbers = [] // array

    do {
        //invoco una funzione che mi crea un numero random da un min a un max
        const  number=  getRandomArbitrary(min, max); //number

        //dichiaro una variabile di controllo per vedere se il numero è un duplicato

        if (numbers.includes(number) === false){
            numbers.push(number); 
        }

    

    } while (numbers.length !== count)

    //restituisco l'array i numeri generati
    return numbers;
}

function convertStringToNumberArray(numberString){

    const arrayOfNumbers = [];

    for(let i = 0; i < numberString.length; i++){
        console.log(numberString[i]);
        const playerNumberReal = parseInt(numberString[i]);
        arrayOfNumbers.push(playerNumberReal);
    }

    return arrayOfNumbers;

}


const playBtn = document.querySelector('#play');
const playerNumber = document.querySelector('#number');

const checkNumberArray = generateUniqueNumbers(1,10,4);


playBtn.addEventListener('click', function() {

    const playerNumberValue = playerNumber.value;
    const playerNumerArray = convertStringToNumberArray(playerNumberValue);
    let counter = '';
    for (let index = 0; index < playerNumerArray.length; index++) {
        const indexChecked = checkNumberArray.indexOf(playerNumerArray[index]);

        if (indexChecked !== -1) {
            if (indexChecked === index) {
                counter += 'X';
            }else {
                counter += 'O'
            }


        }
        console.log(indexChecked)
    }

    // for (let index = 0; index < checkNumberArray.length; index++) {
    //     const indexPlayer = playerNumerArray.indexOf(checkNumberArray[index]);

    //     if (indexPlayer !== -1) {
    //         counter++;
    //     }
    //     console.log(indexPlayer)
    // }

const resultDOMElement = document.getElementById('risultato');
resultDOMElement.innerHTML = `
<h2>${counter}</h2>
`



    console.log('playerNumerArray ', playerNumerArray)
    console.log('checkNumberArray', checkNumberArray)
    console.log('risultato', counter);



    if (counter === 'XXXX') {
        resultDOMElement.innerHTML = `
<h2>Hai Vinto!!!</h2>
`
    }






    
});




































































































