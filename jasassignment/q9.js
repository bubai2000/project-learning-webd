function Circle(r){
    this.radius=r;
    this.getArea=function(){
        return (Math.PI*this.radius*this.radius);
    }
    this.getPerimiter=function(){
        return (2*Math.PI*this.radius);
    }
}
let c1=new Circle(11);
console.log(c1.getArea());
let c2=new Circle(4.44);
console.log(c2.getPerimiter());