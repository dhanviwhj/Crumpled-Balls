class paper {
   constructor(x,y,r){

    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0 ,
        density:1.2
    }
   
    
     this.body = Bodies.circle(300,100,radius/2.5,options)
    
    
     this.image = loadImage("paper.png")
     World.add(world,this.body)

}

display(){
     image(this.image , this.body.position.x , this.body.position.y , radius , radius)

    
}



}