function calculateScore(a){
    let r1=0;
    let r2=0;
    function winner(a){
        if(a[0]===a[1]){
            r1++;
            r2++;
        }
        else if((a[0]==="R" && a[1]==="S") || (a[0]==="P" && a[1]==="R") || (a[0]==="S" && a[1]==="P")){
            r1++;
        }
        else{
            r2++;
        }
    }
    a.forEach(element => {
        winner(element);
    });
    if(r1===r2){
        console.log("It's a Tie!");
    }
    else if(r1>=r2){
        console.log("Aritro wins by "+r1+"/"+r2);
    }
    else{
        console.log("Sounak wins by "+r2+"/"+r1);
    }
}
calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]);
calculateScore([["R", "R"], ["S", "S"]]);
calculateScore([["R", "P"], ["P", "S"]])