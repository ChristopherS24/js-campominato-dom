const gridButton = document.getElementById(`gridButton`);

gridButton.addEventListener(`click`,function (event) {
    //blocca comportamento di default
    event.preventDefault();

    const gridContainer = document.getElementById(`gridContainer`);
    
    let cellsNumber = 100;
    
    const bombs = [];
    while (bombs.length < 16) {
        const randomNumber = generateRandomNumber(1, cellsNumber);
        // console.log(`random number:`, randomNumber, typeof randomNumber);

    if (bombs.includes(randomNumber) == false) {
            bombs.push(randomNumber);
        }
    }
    console.log(`bombs`, bombs, typeof bombs);

    for (let i = 1; i <= cellsNumber; i++) {
        const newCell = document.createElement(`div`);
        newCell.innerText = i;
        newCell.addEventListener(`click`, function () {        
            newCell.classList.toggle(`lightcoral`);
            console.log(newCell.innerHTML);
            
            const cellNumber = parseInt(this.innerText);
            console.log (cellNumber);

            if (bombs.includes(cellNumber)){
                this.classList.add('bomb');
            }
            else {this.classList.add('notbomb');
            }
        });
        gridContainer.append(newCell);
    }
})


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

