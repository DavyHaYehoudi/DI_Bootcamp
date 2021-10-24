
let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//Copy this object using the method that was taught in today’s lesson.

// let monNouvelObjet = JSON.parse(JSON.stringify(groceries));  
let objet2 = groceries;    
console.log('objet2 :',objet2);

//Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
groceries.totalPrice = '35$';
console.log(objet2);//Yes, we see this modification

//Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?
groceries.payed = false;
console.log(objet2);//Yes, we see this modification.

//Because the object groceries and object2 are the same object, which is why changing groceries also changes the value of object2. 