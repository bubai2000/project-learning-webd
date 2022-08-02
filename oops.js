// How to declare objects
// Just declare

let test={
    x: 1,
    y: 2,
    hello: function(){
      console.log("Hello world!");
    }
  }
  test.hello();
  console.log(test.x);
  
  // Using factory functions
  function hello(){
    return{
      messege: "Hi",
      name: "Soumyadip",
      salute: function(){
        console.log("Good Morning!");
      }
    }
  }
  let nayak=hello();
  nayak.salute();
  console.log(nayak.name);
  function Circle(){
    let center={x:0,y:0};
    this.radius= "5cm";
    this.draw= function(){
      console.log("Drawing a circle with center at "+"("+center.x+","+center.y+")"+ " with radius "+this.radius);
    }
    // Getters and setters
    this.getx= function(){
      return center.x;
    }
    this.setx=function(x){
      center.x=x;
    }
  }
  
  let circle1=new Circle();
  circle1.draw();
  circle1.setx(3);
  circle1.draw();
  console.log(circle1.getx());
  
  // Object.defineProperty(this,'center',{
  //   setxy: function(x,y){
  //     center.x=x;
  //     center.y=y;
  //   }
  // });
  // Object.defineProperties(this,{
  //   getx: function(){
  //     return center.x;
  //   },
  //   gety: function(){
  //     return center.y;
  //   },
  //   setx: function(x){
  //     center.x=x;
  //   },
  //   sety: function(y){
  //     center.y=y;
  //   }
  // });