function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


  function getDistance(x1,y1,x2,y2) {
    xDistance = x1-x2;
    yDistance = y1-y2;

    return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
}

function resolveCollision(particle, otherParticle) {
    //diferencia de velocidades x y 
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
    //diferencia de posicion x y 
    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    if(xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        //angulo del eje x a un punto
        const angle = -Math.atan2(yDist,xDist);

        //masas
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        //velocidad antes de la ecuacion    
        const u1 = rotate(particle.velocity,angle);
        const u2 = rotate(otherParticle.velocity,angle);

        // (estatic collision wikipedia one-dimensional newtionan)
        // velocidad despues de la colision en 1 dimension (eje X)
        const v1 = {x: u1.x * (m1-m2) / (m1+m2) + u2.x * 2 * m2 / (m1+m2), y: u1.y}
        const v2 = {x: u2.x * (m1-m2) / (m1+m2) + u1.x * 2 * m2 / (m1+m2), y: u2.y}

        //velocidad final tras rotar de vuelta a 2d (angulo original)
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        //trasladar velocidad final a cada particula
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;

    }


}
function rotate(velocity, angle) {
        const rotatedVelocities = {
            x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
            y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
        };
        return rotatedVelocities;
    }

