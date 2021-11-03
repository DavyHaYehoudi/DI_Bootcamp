//Exercice 1 : Conversion

fetch("https://swapi.dev/api/starships/9/")
    .then(response => response.json())
    .then(res => console.log(res));


    //---------------------------------------------------------

async function apiFetch(){
    const response = await fetch("https://swapi.dev/api/starships/9/");
    return await response.json()
}
apiFetch()
.then(res=>console.log(res))
.catch(err=>console.log(err))


    //---------------------------------------------------------


async function apiFetch2(){
    const response = await fetch("https://swapi.dev/api/starships/9/");
    
    try{
        if(response.ok){
            return await response.json()
        }
    }
    catch(err){
        console.log('erreur : ',err);       
    }
}
apiFetch2()
.then(res=>console.log(res))
.catch(err=>console.log(err))

    //---------------------------------------------------------


    //Exercise 2: Analyze
    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }
    
    async function asyncCall() {
        console.log('calling');
        let result = await resolveAfter2Seconds();
        console.log(result);
    }
    
    asyncCall();//calling
                //resolved (after 2 seconds)