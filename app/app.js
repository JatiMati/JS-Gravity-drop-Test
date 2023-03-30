const square = document.querySelector('.square');
const text = document.querySelector('h1');
let flagMove = false;
let flagHold = false;
let x = 500;
let y = 50;
let xSpeed;
let ySpeed;
let speedVariable = 1;

text.style.left = `${window.innerWidth / 2}px`;
text.style.top = `${window.innerHeight / 2 - 100}px`;
square.style.left = `${window.innerWidth / 2}px`;
square.style.top = `${window.innerHeight / 2}px`;
speed()
function hold() {
    flagHold = true;
    text.style.display = "none";
    square.style.backgroundColor = "grey";


}
function release() {
    flagHold = false;
    fall()
    xThrow()
    yThrow()
    square.style.backgroundColor = "black";
}
function action(e) {
    if (flagHold) {
        x = e.pageX;
        y = e.pageY;
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;
    }
}
square.addEventListener('mousedown', hold)
square.addEventListener('mouseup', release)
window.addEventListener('mousemove', action);

function yThrow() {
    let throwYSpeed = ySpeed * 5;
    let speedReduction;

    if (throwYSpeed < 0) { speedReduction = -throwYSpeed }
    else { speedReduction = throwYSpeed }

    let throwYInterval = setInterval(() => {

        square.style.top = `${y = y - throwYSpeed}px`;
        if (throwYSpeed > 0) {
            throwYSpeed = throwYSpeed / 1.02 - 0.1;
        }
        else {
            throwYSpeed = throwYSpeed / 1.02 + 0.1;
        }
        speedReduction = speedReduction / 1.02 - 0.1;

        if (y > window.innerHeight - 100) {
            clearInterval(throwYInterval)
        }
    }, 10)
}

function xThrow() {
    let throwXSpeed = xSpeed * 5;
    let speedReduction;

    if (throwXSpeed < 0) { speedReduction = -throwXSpeed }
    else { speedReduction = throwXSpeed }

    let throwXInterval = setInterval(() => {

        square.style.left = `${x = x - throwXSpeed}px`;
        if (throwXSpeed > 0) {
            throwXSpeed = throwXSpeed / 1.02 - 0.1;
        }
        else {
            throwXSpeed = throwXSpeed / 1.02 + 0.1;
        }
        speedReduction = speedReduction / 1.02 - 0.1;
        if (speedReduction < 0 || x < 100 || x > window.innerWidth - 100) {
            clearInterval(throwXInterval)
        }
    }, 10)
}

function fall() {
    let gravityForce = 2;
    let fallInterval = setInterval(() => {
        square.style.top = `${y}px`;

        y = gravityForce + y;
        if (gravityForce < 25) {
            gravityForce = gravityForce * 1.05;
        }
        if (y > window.innerHeight - 100) {
            clearInterval(fallInterval)
        }
    }, 10)
}


let positionXOne, positionXTwo, positionYOne, positionYTwo;
function speed() {
    const time = new Date;
    let milliSeconds;
    milliSeconds = time.getMilliseconds();



    let speedInterval = setInterval(() => {
        //pobiera pozycje 1     100ms
        // pobiera pozycje 2    
        // oblicza prędkość
        // zeruje pozycje       100ms

        if (speedVariable % 2) {
            speedVariable++;

            positionXOne = x;
            positionYOne = y;
        }
        else {
            speedVariable--;

            positionXTwo = x;
            positionYTwo = y;
        }
        if (speedVariable % 2 == 0) {
            xSpeed = (positionXTwo - positionXOne) / 10;
            ySpeed = (positionYTwo - positionYOne) / 10;
        }
        console.log(xSpeed, ySpeed);

    }, 10)
    // if (xSpeed == 0 && ySpeed == 0) {
    //     clearInterval(speedInterval);
    // }


}





