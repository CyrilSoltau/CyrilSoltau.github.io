"use strict";
document.addEventListener("DOMContentLoaded",() =>{
    const squares = document.querySelectorAll(".grid div");
    const scoreDisplay = document.querySelector("span");
    const startBtn = document.querySelector(".start");

    const width = 10;
    let currentIndex = 0;
    let appleIndex = 0;
    let currentSnake = [2,1,0]; // div with value 2 (head) and all div with value 0 (tail ) and body will be all 1s

    let direction = 1;

    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0;

    //start/restart the game
     function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove("snake"))
        squares[appleIndex].classList.remove("apple");
        clearInterval(interval);
        score = 0;
        randomApple()
        direction = 1;
        scoreDisplay.innerText = score;
        intervalTime = 1000;
        currentSnake = [2,1,0];  
        currentIndex = 0;
        currentSnake.forEach(index  => squares[index].classList.add("snake"))
        interval = setInterval(moveOutcomes, intervalTime);   
    }

     function moveOutcomes() {
        if(
            (currentSnake[0] + width >= (width * width) && direction == width) || // if snake hit bottom wall
            (currentSnake[0] % width == width -1 && direction == 1) || // if snake hits right wall
            (currentSnake[0] % width == 0 && direction == -1) || //if snake hits left wall
            (currentSnake[0] - width < 0 && direction == -width) || // if snake hits top wall
            squares[currentSnake[0] + direction].classList.contains("snake") // if snake good into self
        ) {
           return clearInterval(interval); // will clear interval if above happans
        }

        const tail = currentSnake.pop(); 
        squares[tail].classList.remove("snake"); 
        currentSnake.unshift(currentSnake[0] + direction);

        if(squares[currentSnake[0]].classList.contains("apple")){
            squares[currentSnake[0]].classList.remove("apple");
            squares[tail].classList.add("snake");
            currentSnake.push(tail);
            randomApple();
            score++;
            scoreDisplay.textContent = score;
            clearInterval(interval);
            intervalTime = intervalTime * speed;
            interval = setInterval(moveOutcomes, intervalTime);
        }
        squares[currentSnake[0]].classList.add("snake");
     }

     // generate apple
     function randomApple() {
        do{
            appleIndex = Math.floor(Math.random() * squares.length)
        } while(squares[appleIndex].classList.contains("snake"))
        squares[appleIndex].classList.add("apple")
    }  


     function control(e) {
        squares[currentIndex].classList.remove("snake");

        if(e.keyCode === 39){
            direction = 1 // the snake will go right one
        }
        else if (e.keyCode === 38){
            direction = -width // the snake will go back ten div going up
        }
        else if (e.keyCode === 37){
            direction = -1 // go left snake one
        }
        else if (e.keyCode === 40){
             direction = +width // the snake will go down ten form the courent postistions
        }
    }

    document.addEventListener("keyup", control);
    startBtn.addEventListener("click", startGame);



});