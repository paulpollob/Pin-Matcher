document.getElementById('generatePin').addEventListener('click', function(){
    const pin = getPin();
    const Display = document.getElementById('showPin');
    Display.value = pin;
});

function getPin()
{
    let pin = Math.round(Math.random()*10000);
    if((pin+'').length===4)
    {
        console.log(pin);
        return pin;
    }
    else{
        console.log(pin);
        return getPin();
    }
}