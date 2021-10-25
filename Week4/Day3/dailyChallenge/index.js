//Part I
let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

// Create a function getCarHonda(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
const getCarHonda = (inventory) => {
    //The function should
    // loop through the array of object and return the first car with the name “Honda”.
   
        for(element of inventory){

           let values = Object.values(element);
           let indexHonda = values.indexOf('Honda');
            if(indexHonda >0){
                console.log(element);

                //then, return a string in the format This is a {car_make} {car_model} from {car_year}.
                console.log(`This is a ${element.car_make},${element.car_model} from ${element.car_year}`);
                break
            }
            
        }

}
getCarHonda(inventory)






//Part II
let inventory2 = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
const sortCarInventoryByYear = (inventory2) => {
    //the function should return an inventory that is sorted by car_year, ascending.
    inventory2.sort(function (x,y){
        return x.car_year - y.car_year; 
    })
}

sortCarInventoryByYear(inventory2);
console.table(inventory2)
console.log(inventory2);