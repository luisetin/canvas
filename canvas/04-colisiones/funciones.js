


function getDistance(x1,y1,x2,y2) {
    xDistance = x1-x2;
    yDistance = y1-y2;

    return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
}