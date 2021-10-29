// Exercise 3 : JSON Mario
let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  console.log('marioGame : ', marioGame);

// Convert this JS object into a JSON object. 
let convertJson = JSON.stringify(marioGame,null,2);
console.log('convertJson :',convertJson);
//What happens to the nested objects ?    // ALL converted in string

// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
let backObject = JSON.parse(convertJson);
console.log('backObject :',backObject);

// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
console.log('type of marioGame : ',typeof marioGame);
console.log('type of convertJson : ',typeof convertJson);
console.log('type of backObject : ',typeof backObject);