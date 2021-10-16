let nodeForm = document.querySelector('form');
let nodeRadius = document.querySelector('#radius');
let nodeVolume = document.querySelector('#volume');

nodeForm.addEventListener('submit',function(e){
    e.preventDefault();
    let radius = nodeRadius.value;
    
    let volume;
    function calculVolume(rad){
       volume = (4/3)*((Math.PI)*(rad**3));
       volume =volume.toFixed(2);
       return volume;
    }
    
    console.log(calculVolume(radius));

    nodeVolume.value = volume;
})








