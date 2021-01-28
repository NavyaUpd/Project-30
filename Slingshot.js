class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    reset(){
        this.sling.bodyA = this.bodyA;
        Matter.Body.setPosition(this.bodyA, {x:100, y:300});
    }

    display(){
    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke("black")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            strokeWeight(3);
            noStroke();
        }
    }
    
}