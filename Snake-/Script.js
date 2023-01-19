let inputDir = { x: 0, y: 0 };
let speed = 2;
let lastpaintime = 0;
let snakeArr = [{ x: 8, y: 9 }];//position of Snake
let food = { x: 3, y: 5 };
let score = 0;
let scoreBox = document.getElementById("score")
//starting logic
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastpaintime) / 1000 < 1 / speed) {
        return;
    }

    // console.log(ctime);
    lastpaintime = ctime;
    gameEngine();

}


function isCollide(Snake) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (Snake[i].x === Snake[0].x && Snake[i].y === Snake[0].y) {
            return true;
        }

    }
    if (Snake[0].x >= 10 || Snake[0].y <= 0 || Snake[0].y >= 10 || Snake[0].x <= 0) {
        return true;
    }
    return false;


}
// function gameEngine()
// {
//     // if(iscollide(SnakeArr))
//     // {
//     //     direction = {x:0,y:0};
//     //     alert("game over");
//     //     SnakeArr = [{x:4,y:8}];
//     //     score = 0;

//     // }


//     // If you have eaten the food, increment the score and regenerate the food
//     if(SnakeArr[0].y === food.y && SnakeArr[0].x ===food.x){
//         // foodSound.play();
//         score += 1;
//         if(score>hiscoreval){
//             hiscoreval = score;
//             localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
//             hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
//         }
//         scoreBox.innerHTML = "Score: " + score;
//         SnakeArr.push({x: SnakeArr[0].x + direction.x, y: SnakeArr[0].y + direction.y});
//         let a = 2;
//         let b = 16;
//         food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
//     }

//     // Moving the snake
//     for (let i = SnakeArr.length - 2; i>=0; i--) { 
//         SnakeArr[i+1] = {...SnakeArr[i]};
//     }

//     SnakeArr[0].x += direction.x;
//     SnakeArr[0].y += direction.y;


//     //logic 1 Snake Face
//     row.innerHTML ="";
//     SnakeArr.forEach((e,index)=>{
//         SnakeElement = document.createElement('div');
//         SnakeElement.style.gridRowStart = e.y;
//         SnakeElement.style.gridcolumnStart = e.x;
//         if(index===0)
//         {
//             SnakeElement.classList.add('head');
//         }
//         else
//         {
//             SnakeElement.classList.add('snake');
//         }

//         row.appendChild(SnakeElement);

//     });
//       //logic 2 Snake food
//       foodElement = document.createElement('div');
//         foodElement.style.gridRowStart = food.y;
//         foodElement.style.gridcolumnStart = food.x;
//         foodElement.classList.add('food');
//         row.appendChild(foodElement);


// }








// window.requestAnimationFrame(main);
// window.addEventListener('keydown',e=>
// {

// direction = {x:0,y:1};
// switch(e.key) {
//     case "ArrowUp":
//         console.log("Keyup");
//     direction.x=0;
//     direction.y=-1;

//     break;
//     case "ArrowDown":
//         console.log("Keydown");
//     direction.x=0;
//     direction.y=1;

//     break;
//     case "ArrowLeft":
//         console.log("Keyleft");
//     direction.x=-1;
//     direction.y=0;

//     break;
//     case "ArrowRight":
//         console.log("KeyRight");
//     direction.x=1;
//     direction.y=0;

//     break;
//     default:
//         break;



// }}

// );
function gameEngine() {
    // Part 1: Updating the snake array & Food
    if (isCollide(snakeArr)) {
        // gameOverSound.play();
        // musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over. Press any key to play again!");
        snakeArr = [{ x: 8, y: 8 }];
        // musicSound.play();
        score = 0;
    }

    // If you have eaten the food, increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        // foodSound.play();
        score += 1;
        console.log(score)
        // if(score>hiscoreval){
        //     hiscoreval = score;
        //     localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
        //     hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        // }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 8;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and Food
    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);


}


// Main logic starts here
// musicSound.play();
// let hiscore = localStorage.getItem("hiscore");
// if(hiscore === null){
//     hiscoreval = 0;
//     localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
// }
// else{
//     hiscoreval = JSON.parse(hiscore);
//     hiscoreBox.innerHTML = "HiScore: " + hiscore;
// }

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } // Start the game
    // moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }

});