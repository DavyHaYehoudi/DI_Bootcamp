//Fisrt Part

const playTheGame = () =>{
    let numberUser;
    let computerNumber;


   if(!( confirm("Do you want to play the game ?"))){

    alert("No problem, bye ");

   }else{

    numberUser = prompt(" Enter a number between 0 and 10 ");

    while(isNaN(numberUser) || numberUser === ""){
        numberUser= prompt(" Sorry Not a number, Try again and Enter a number between 0 and 10 "); 
    }

    while(!(numberUser>=0 && numberUser<=10)){
        numberUser = prompt("Enter a number between 0 and 10 !");
    }
    computerNumber = Math.floor(Math.random() * 10);
    numberUser = Number(numberUser);
    console.log("computer : " +computerNumber);
    console.log("user : " + numberUser);
    
    
            
            
   //Second Part

        const test = (numberUser,computerNumber)=>{

            let chances = 0;

            while(numberUser > computerNumber){
                let bigger = prompt("Your number is bigger then the computer’s, guess again");
                chances+=1;

                    if(isNaN(bigger) || bigger === ""){
                        alert("Not a number");
                        chances-=1;
                    }
                    if(chances === 3){
                        alert("out of chances");
                        break;
                    }         
                    if(Number(bigger) === computerNumber){
                        numberUser = Number(bigger);
                    }                  
            }

            while(numberUser < computerNumber){
                let smaller = prompt("Your number is smaller then the computer’s, guess again");
                chances+=1;

                    if(isNaN(smaller) || smaller === ""){
                        alert("Not a number");
                        chances-=1;
                    }
                    if(chances === 3){
                        alert("out of chances");
                        break;
                    }          
                    if(Number(smaller) === computerNumber){
                        numberUser = Number(smaller);
                    }
                }

            if(numberUser === computerNumber){
                alert("WINNER")
            } else{console.log("autre chose")

            }
    }
    test(numberUser,computerNumber);
  }
}

playTheGame();


