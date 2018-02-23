const g = 9.81;
var ball = document.getElementById("ball");
ball.style.top = '650px';
ball.style.left = '200px';

function play() {
    var time = 0;
    setInterval(function () {
        throwBall(20, 25, time += 0.05);}, 50);
}

function throwBall(v, corner, t) {
    console.log(t);
    let radian = toRadian(corner);
    let x = parseInt(ball.style.left);
    let y = parseInt(ball.style.top);
    if (x < 1200 && y > 0 && y < 900) {
        ball.style.left = Math.ceil(x + v * t * Math.cos(radian)) + 'px';
        ball.style.top = Math.ceil(y - (v * t * Math.sin(radian) - 1/2 * g * t * t)) + 'px';
        console.log(ball.style.left);
        console.log(ball.style.top);
    } else {
    }
}

