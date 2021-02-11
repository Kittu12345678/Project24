class Dustbin{

    constructor(x,y,w,h){

        var options={
            isStatic:true
        }

        this.bodyb = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.bodyb);
        this.bodyl = Bodies.rectangle((x-(w/2)), (y-(h*2)), h, w, options);
        World.add(world, this.bodyl);
        this.bodyr = Bodies.rectangle((x+(w/2)), (y-(h*2)), h, w, options);
        World.add(world, this.bodyr);
        this.bodyb.width = w;
        this.bodyb.height = h;

    }

    display(){
        fill("green");
        rect(this.bodyb.position.x, this.bodyb.position.y, this.bodyb.width, this.bodyb.height);
        rect(this.bodyb.position.x-(this.bodyb.width/2), this.bodyb.position.y-(this.bodyb.height*2),  this.bodyb.height, this.bodyb.width);
        rect(this.bodyb.position.x+(this.bodyb.width/2), this.bodyb.position.y-(this.bodyb.height*2),  this.bodyb.height, this.bodyb.width);
    }

}