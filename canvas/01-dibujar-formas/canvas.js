const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

c.fillStyle = "red";
c.fillRect(50, 100, 100, 100);

c.beginPath();
c.moveTo(200, 50);
c.lineTo(350, 500);
c.strokeStyle = "rebeccapurple";
c.stroke();

c.beginPath();
c.arc(350, 500, 50, 0, Math.PI * 2, false);
c.strokeStyle = "green";
c.stroke();



for(let i = 0; i < 1; i++) {

    let randx = Math.random()*window.innerWidth;
    let randy = Math.random()*window.innerHeight;
    let randsize = Math.random()*(70-10)+10;
    let randcolor1 = Math.floor(Math.random()*(256+1)-1);
    let randcolor2 = Math.floor(Math.random()*(256+1)-1);
    let randcolor3 = Math.floor(Math.random()*(256+1)-1);

    c.beginPath();
    c.arc(randx, randy, 50, 0, Math.PI * 2, false);
    c.strokeStyle = "rgb(" + randcolor1 + ", " + randcolor2 +
     ", " + randcolor3 + ")";
    c.stroke();
}

