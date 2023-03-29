const square = document.querySelector('.square');
let flagMove = false;
let flagHold = false;
let x = 500;
let y = 50;
let xSpeed;
let ySpeed;
let speedVariable = 1;

square.style.left = `${window.innerWidth / 2}px`;
square.style.top = `${window.innerHeight - 150}px`;

function hold() {
    flagHold = true;

}
function release() {
    flagHold = false;
    fall()
    xThrow()

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

function xThrow() {
    let throwXSpeed = xSpeed * 5;
    let speedReduction;

    if (throwXSpeed < 0) { speedReduction = -throwXSpeed }
    else { speedReduction = throwXSpeed }

    let throwXInterval = setInterval(() => {

        square.style.left = `${x = x - throwXSpeed}px`
        throwXSpeed = throwXSpeed / 1.02 - 0.1;
        speedReduction = speedReduction / 1.02 - 0.1;

        if (speedReduction < 0 || x < 100 || x > window.innerWidth - 100) {
            clearInterval(throwXInterval)
        }
    }, 10)

    // let xSpeedReduce;
    // let xSpeedChange = xSpeed;
    // xSpeedChange = xSpeedChange * 1000;
    // xSpeedReduce = xSpeedChange / 20;
}
// let d = 500;
// let s = -60;
// for (let i = 0; i < 20; i++) {
//     s = s / 1.02 - 0.1;
//     d = d + s;
//     console.log(d);

// }

function fall() {
    let gravityForce = 2;
    let fallInterval = setInterval(() => {
        // console.log('spadam');
        square.style.top = `${y}px`;

        y = gravityForce + y;
        gravityForce = gravityForce * 1.05;
        // console.log(y);
        if (y > window.innerHeight - 50) {
            clearInterval(fallInterval)
        }
    }, 10)
}


let positionXOne, positionXTwo, positionYOne, positionYTwo;
function speed() {
    const time = new Date;
    let milliSeconds;
    milliSeconds = time.getMilliseconds();



    setInterval(() => {
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
            // console.log(positionXTwo, positionXOne);

            xSpeed = (positionXTwo - positionXOne) / 10;
            ySpeed = (positionYTwo - positionYOne) / 10;
            // if (xSpeed < 0) {
            //     xSpeed = -xSpeed;
            // }
            // if (ySpeed < 0) {
            //     ySpeed = -ySpeed;
            // }
            // console.log(xSpeed, ySpeed);
        }
    }, 10)
}
speed()




