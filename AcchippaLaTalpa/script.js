const grid = document.querySelector('#grid');
const gameData = document.querySelector('.game-data');

const cellLength = 9;


for(let i = 0; i < cellLength; i++) {
    const cell = document.createElement("div");
    grid.appendChild(cell);
    cell.classList.add('cell');
}


setInterval(DrawBug, 1000);

Point()

function DrawBug(){

    const cells = document.querySelectorAll('.cell');
    var changeNumber =  Math.round(Math.random() * 8);
    
    cells[changeNumber].classList.add('bug');
    setTimeout(() => {
        cells[changeNumber].classList.remove('bug');
    }, 1000);
}

    
function Point() {
    //conteggio punti
    //ad ogni bug colpito aggiunto 20 punti
    var point = 0;
    const score = document.createElement('h1');
    gameData.appendChild(score);
    score.innerHTML = "SCORE :" + " " + point;

    const cells = document.querySelectorAll('.cell');

    for(let i = 0; i < cellLength; i++){
        cells[i].addEventListener('click', function() {
            
            if(cells[i].classList.contains('bug')){
                //se contiene bug devo:
                //ggiugnere 20 punti
                point += 20;
                score.innerHTML = "SCORE :" + " " + point;
                //rimuovere la classe bug
                cells[i].classList.remove('bug');
                //aggiungere la classe bug-splat
                cells[i].classList.add('bug-splat');
                //tenerla per un po e rimuoverla
                setTimeout(() => {
                    cells[i].classList.remove('bug-splat');
                }, 1000);
            }    
        })
    }
}
