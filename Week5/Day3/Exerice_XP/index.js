//Exercise 1 : Comparison

//Create a function called compareToTen that takes a number as an argument.
//The function should return a Promise that tests if the value of the given argument is less or greater than 10
function compareToTen(num){

    return new Promise((resolve,reject)=>{
        if(num >= 10){
            resolve(num)
            
        }else{
            reject(num)
        }
    })
}

compareToTen(10)
.then((result) => console.log(`${result} is greater or equal than 10, success!`))
.catch((error) => console.log(`${error} is less than 10, error!`))





//Exercise 2 : Promises
function successTimeout(validity){
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
    
            if(validity){
                resolve(console.log('success!'));
            } else {
                reject(console.log('Ooops something went wrong'))
            }
        }, 4000);
    })
}
successTimeout(true)





//Exercise 3 : Resolve & Reject
//Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
function learnPromise1(value){
    return new Promise((resolve,reject)=>{
        if(value===3){
            resolve(console.log("It's right !"))
        } else {
            reject(console.log("Sorry,we expected another result..."))
        }
    })
}
learnPromise1()
.then(res=>console.log(res))
.catch(err=>console.log(err));


//Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
function learnPromise2(string){
    return new Promise((resolve,reject)=>{
        if(string==='Boo!'){
            resolve(console.log("It's right !"))
        } else {
            reject(console.log("Sorry,we expected another world..."))
        }
    })
}
learnPromise2('Boo')
.then(res=>console.log(res))
.catch(err=>console.log(err));