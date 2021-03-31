class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB=pointB;
        this.slings = Constraint.create(options);
        World.add(world, this.slings);
    }

     fly(){
         this.slings.bodyA= null;
     }


    display(){

        if(this.slings.bodyA){
            var pointA = this.slings.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
        
    }
    
}