let squaresQuantity = 0;
let color = 'white';

function setBoard(squares = 16){
    const grid = document.querySelector('.grid');
    deleteBoard(grid);
    const squareSize = getSquareSize(squares, grid);
    console.log(squareSize)
    for(let i = 0; i < squares; i++){
        for(let j = 0; j < squares; j++){
            const element = document.createElement('div');
            element.classList.add('element');
            element.style.width = `${squareSize}px`;
            element.style.height = `${squareSize}px`;
            element.addEventListener('mouseover',setBackgroundColor)
            grid.appendChild(element);
        }
    }
}

function setBackgroundColor(e){
    if(!color.includes('random')){
        this.style.backgroundColor = color;
    }else{
        this.style.backgroundColor = getRandomColor(); 
    }
}

function getSquareSize(squares, grid){
    const gridWidth = grid.getBoundingClientRect().width - 4;
    return gridWidth / squares;
}

function deleteBoard(grid){
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        grid.removeChild(element);
    })
}

function getSquaresByUser(){
    const gridSize = document.querySelector('.size');
    gridSize.addEventListener('click',(e)=>{
        squaresQuantity = parseInt(prompt('Enter the quantity of square per side n x n'));

        isNaN(squaresQuantity) ? alert('Is not a valid number'): setBoard(squaresQuantity)
    })
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changePaintColor(colorByUser){
    color = colorByUser;
}



setBoard();
getSquaresByUser();