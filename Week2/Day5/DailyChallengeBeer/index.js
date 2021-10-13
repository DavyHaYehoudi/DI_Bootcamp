

let bottleBeer = prompt("Enter a number of bootle of beer :)");
let take = 0;


        for(let i= bottleBeer; i>0; i--){

            for(let j = 1; j<bottleBeer; j++){

                take++;
                
                if(take===1){
                    console.log(bottleBeer + " bottles of beer on the wall");
                    console.log(bottleBeer + " bottles of beer");
                    console.log(`Take ${take} pass it around`);
                }else{
                    console.log(bottleBeer + " bottles of beer on the wall");
                    console.log(bottleBeer + " bottles of beer on the wall");
                    console.log(bottleBeer + " bottles of beer");

                    console.log(`Take ${take} pass them around`);
                }
                
            bottleBeer-=j;
          
    }   
    if(bottleBeer-take<1){
        console.log("End of Game");
        
        break
    }
  }