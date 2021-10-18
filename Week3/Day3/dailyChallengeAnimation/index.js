let nodeInput = document.querySelector('input');


nodeInput.addEventListener('keyup',function(e){
    
   let array = nodeInput.value.split("");
   console.log(array);

        if(!((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 95 && e.keyCode <= 122))){
            
            array.pop();
            array = array.join("");
            nodeInput.value = array;

        }else{
            array.push();
            array = array.join("");
            nodeInput.value = array;
        }
       
    })

// let regex = /[a-zA-Z]/;