 function getInfoUser(){

     fetch('http://localhost:3000/user')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            document.querySelector('.root').innerHTML = `${data.firstname} ${data.lastname}`
        } )
        .catch(e => console.log(e))

       
}




 function getInfoUserByOne(){
     fetch('http://localhost:3000/user/',id)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(e=>console.log(e))
}



